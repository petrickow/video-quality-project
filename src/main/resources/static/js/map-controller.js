app.controller('mapController', function ($scope, Socket) {
    "use strict";
    $scope.ids = [];
    $scope.markers = [];
    
    $scope.areaFilterPath = {
        sw: { latitude : 0.0, longitude: 0.0 },
        ne: { latitude : 1.0, longitude: 1.0 }
    };
    
    $scope.areaFilterVisible = false;
    
    $scope.mapEvents = {
        'click': function (map, eventName, args) {
            if(!$scope.areaFilterVisible)
                $scope.initAreaFilter();
            $scope.areaFilterVisible = !$scope.areaFilterVisible;
        }
    };
    
    $scope.areaFilterEvents = {
        'dragend': function (rectangle, eventName, args) {
            var bounds = rectangle.getBounds();
            var markers = $scope.markers
            for (var marker in markers) {
                if(bounds.contains(new google.maps.LatLng(markers[marker].coords.latitude, markers[marker].coords.longitude))){
                    // TODO Add disabled Video
                    console.log("Add: " + markers[marker].idKey);
                } else {
                    // TODO Remove enable Video
                    console.log("Remove: " + markers[marker].idKey);
                }
            }
        }
    };
    
    $scope.getStreams = function () {
        $scope.ids = Object.keys(Socket.stream);
        return $scope.ids;
    };
    
    $scope.map = {
        center: {
            latitude: 0,
            longitude: 0
        },
        zoom: 14
    };
    
    $scope.getCenter = function () {
        var parameter;
        var currentValue;
        var sumLongitude = 0;
        var sumLatitude = 0;
        try {
            for (var stream in Socket.stream){
                parameter = Socket.stream[stream].Location;
                if (parameter.index !== 0)
                    currentValue = parameter.data[parameter.index - 1];
                else
                    currentValue = parameter.data[Socket.maxCachedItems - 1];
                sumLatitude += parseFloat(currentValue.latitude);
                sumLongitude += parseFloat(currentValue.longitude);
            }
            var centralLatitude = sumLatitude / $scope.getStreams().length;
            var centralLongitude = sumLongitude / $scope.getStreams().length;
            var hThreshold = 0.002;
            var vThreshold = 0.004;
            if(centralLatitude < ($scope.map.center.latitude - vThreshold) || centralLatitude > ($scope.map.center.latitude + vThreshold))
                $scope.map.center.latitude = centralLatitude;
            if(centralLongitude < ($scope.map.center.longitude - hThreshold) || centralLongitude > ($scope.map.center.longitude + hThreshold)){
                $scope.map.center.longitude = centralLongitude;
            }
        } catch (e) {
            console.log("center: " + e);
        }
        return $scope.map.center;
    };
    
    $scope.getMarker = function (id) {
        var currentValue;
        try {
            var currentStream = Socket.stream[id];
            var parameter = currentStream.Location;
            if (parameter.index !== 0)
                currentValue = parameter.data[parameter.index - 1];
            else
                currentValue = parameter.data[Socket.maxCachedItems - 1];
            if($scope.markers[id] === undefined){
                $scope.markers[id] = {};
                $scope.markers[id].coords = {};
            }
            $scope.markers[id].idKey = id;
            $scope.markers[id].coords.latitude = currentValue.latitude;
            $scope.markers[id].coords.longitude = currentValue.longitude;
        } catch (e) {
            console.log("error: " +e);
        }
        return $scope.markers[id];
    };
    
    $scope.initAreaFilter = function () {
        var parameter;
        var currentValue;
        var latitude;
        var longitude;
        var minLatitude;
        var minLongitude;
        var maxLatitude;
        var maxLongitude;
        var first = true;
        try {
            for (var stream in Socket.stream) {
                parameter = Socket.stream[stream].Location;
                if (parameter.index !== 0)
                    currentValue = parameter.data[parameter.index - 1];
                else
                    currentValue = parameter.data[Socket.maxCachedItems - 1];
                latitude = parseFloat(currentValue.latitude);
                longitude = parseFloat(currentValue.longitude);
                if (first){
                    minLatitude = latitude;
                    minLongitude = longitude;
                    maxLatitude = latitude;
                    maxLongitude = longitude;
                    first = false;
                } else {
                    if (latitude < minLatitude)
                        minLatitude = latitude;
                    else if (latitude > maxLatitude)
                        maxLatitude = latitude;
                    if (longitude < minLongitude)
                        minLongitude = longitude;
                    else if (longitude > maxLongitude)
                        maxLongitude = longitude
                }
            }
            var hFrame = 0.002;
            var vFrame = 0.001;
            $scope.areaFilterPath = {
                sw: { latitude: (minLatitude - vFrame), 'longitude': (minLongitude - hFrame)},
                ne: {latitude: (maxLatitude + vFrame), longitude: (maxLongitude + hFrame)}
            };
        } catch (e) {
            console.log("error " + e);
        }
    };
});
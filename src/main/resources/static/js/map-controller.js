app.controller('mapController', ['$scope', 'Socket', 'MapFilter',
        function ($scope, Socket, MapFilter, StreamController) {
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
    
    // TODO handle rootScope apply exception (inprog)
    $scope.areaFilterEvents = {
        'bounds_changed': function (rectangle, eventName, args) {
            $scope.filterFunction(rectangle, eventName, args);
        }
    };
        
    $scope.filterFunction = function (rectangle, eventName, args) {
            var bounds = rectangle.getBounds();
            var markers = $scope.markers
            for (var marker in markers) {
                if(bounds.contains(new google.maps.LatLng(markers[marker].coords.latitude, markers[marker].coords.longitude))){
                    MapFilter.show(markers[marker].idKey);
                    console.log("Add: " + markers[marker].idKey);
                } else {
                    MapFilter.hide(markers[marker].idKey);
                    console.log("Remove: " + markers[marker].idKey);
                }
            }
        }
    
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
                currentValue = parameter.data[parameter.index];
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
            currentValue = parameter.data[parameter.index];
            if($scope.markers[id] === undefined){
                $scope.markers[id] = {};
                $scope.markers[id].coords = {};
                $scope.markers[id].options = {
                    labelContent: "Stream: " + id
                };
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
                currentValue = parameter.data[parameter.index];
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
}]);
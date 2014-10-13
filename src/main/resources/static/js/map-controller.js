app.controller('mapController', function($scope, Socket) {
    
    $scope.ids = [];
    $scope.markers = [];
    
    $scope.getStreams = function () {
        $scope.ids = Object.keys(Socket.stream);
        return $scope.ids;
    };
    
    $scope.map = {
        center: {
            latitude: 0,
            longitude: 0
        },
        zoom: 15
    };
    
    $scope.getCenter = function () {
        var parameter;
        var currentValue;
        var sumLongitude = 0;
        var sumLatitude = 0;
        try {
            for (stream in Socket.stream){
                parameter = Socket.stream[stream].Location;
                if (parameter.index != 0)
                    currentValue = parameter.data[parameter.index - 1];
                else
                    currentValue = parameter.data[Socket.maxCachedItems - 1];
                sumLatitude += parseFloat(currentValue.latitude);
                sumLongitude += parseFloat(currentValue.longitude);
            }
            var centralLatitude = sumLatitude / $scope.getStreams().length;
            var centralLongitude = sumLongitude / $scope.getStreams().length;
            if(centralLatitude < $scope.map.center.latitude + 1 || centralLatitude > $scope.map.center.latitude + 1)
                $scope.map.center.latitude = currentValue.latitude;
            if(centralLongitude < $scope.map.center.longitude + 1 || centralLongitude > $scope.map.center.longitude + 1)
                $scope.map.center.longitude = currentValue.longitude;
        } catch (e) {
        }
        return $scope.map.center;
    };
    
    $scope.getMarker = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location;
                if (parameter.index != 0)
                    var currentValue = parameter.data[parameter.index - 1];
                else
                    var currentValue = parameter.data[Socket.maxCachedItems - 1];
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
});
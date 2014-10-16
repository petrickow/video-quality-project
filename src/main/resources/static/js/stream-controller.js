app.controller('StreamController', ['$scope', 'Socket', 'MapFilter',
    function ($scope, Socket) {
        "use strict";
        $scope.modes = {
            SHAKINESS: 0
        }
    
        $scope.ids = [];
        $scope.hidden = {};
        $scope.mode = $scope.modes.SHAKINESS;
        $scope.quality = {};
        $scope.latitude = {};
        $scope.longitude = {};
        $scope.speed = {};
        $scope.accuracy = {};
        $scope.altitude = {};
        $scope.force = {};
        $scope.azimuth = {};
        $scope.pitch = {};
        $scope.roll = {};
        $scope.xResolution = {};
        $scope.yResolution = {};
        $scope.Brightness = {};
        $scope.averageBrightness = {};
        $scope.averageAzimuth = {};
        $scope.averagePitch = {};
        $scope.averageRoll = {};
    
        $scope.getStreams = function () {
            $scope.ids = Object.keys(Socket.stream);
            return $scope.ids;
        };
    
        $scope.isHidden = function (id) {
            var hide = false;
            if (false)
                hide = true;
            return hide;
        };
    
        $scope.getQuality = function (id) {
            switch ($scope.mode) {
                    case $scope.modes.SHAKINESS:
                        return $scope.getQualityByShakiness(id);
            }
        }
        
        $scope.getQualityByShakiness = function (id) {
            $scope.quality = 100 * Math.pow(2, (- Math.abs($scope.force[id]) / 10));
            return $scope.quality;
        };

        $scope.getLatitude = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location;
                var currentValue = parameter.data[parameter.index];
                $scope.latitude[id] = currentValue.latitude;
            } catch (e) {
            }
            return $scope.latitude[id];
        };
    
        $scope.getLongitude = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location;
                var currentValue = parameter.data[parameter.index];
                $scope.longitude[id] = currentValue.longitude;
            } catch (e) {
            }
            return $scope.longitude[id];
        };
        
        $scope.getSpeed = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location;
                var currentValue = parameter.data[parameter.index];
                $scope.speed[id] = currentValue.speed;
            } catch (e) {
            }
            return $scope.speed[id];
        };
        
        $scope.getAccuracy = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location;
                var currentValue = parameter.data[parameter.index];
                $scope.accuracy[id] = currentValue.accuracy;
            } catch (e) {
            }
            return $scope.accuracy[id];
        };
        
        $scope.getAltitude = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location;
                var currentValue = parameter.data[parameter.index];
                $scope.altitude[id] = currentValue.altitude;
            } catch (e) {
            }
            return $scope.accuracy[id];
        };
        
        $scope.getForce = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Acceleration;
                var currentValue = parameter.data[parameter.index];
                $scope.force[id] = currentValue.force;
            } catch (e) {
            }
            return $scope.force[id];
        };
        
        $scope.getAzimuth = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation;
                var currentValue = parameter.data[parameter.index];
                $scope.azimuth[id] = currentValue.azimuth;
            } catch (e) {
            }
            return $scope.azimuth[id];
        };
        
        $scope.getPitch = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation;
                var currentValue = parameter.data[parameter.index];
                $scope.pitch[id] = currentValue.pitch;
            } catch (e) {
            }
            return $scope.pitch[id];
        };
        
        $scope.getRoll = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation;
                var currentValue = parameter.data[parameter.index];
                $scope.roll[id] = currentValue.roll;
            } catch (e) {
            }
            return $scope.roll[id];
        };
        
        $scope.getXResolution = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Camera;
                var currentValue = parameter.data[parameter.index];
                $scope.xResolution[id] = currentValue.x;
            } catch (e) {
            }
            return $scope.xResolution[id];
        };
        
        $scope.getYResolution = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Camera;
                var currentValue = parameter.data[parameter.index];
                $scope.yResolution[id] = currentValue.y;
            } catch (e) {
            }
            return $scope.yResolution[id];
        };
        
        $scope.getSnapshot = function (id) {
            var img;
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Snapshot;
                var currentValue = parameter.data[parameter.index];
                img = "data:image/jpeg;base64," + currentValue.snapshot;
            } catch (e) {
                console.log("ImageError: " + e);
            }
            return img;
        };
        
        $scope.getBrightness = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Brightness;
                var currentValue = parameter.data[parameter.index];
                $scope.Brightness[id] = currentValue.lux;
            } catch (e) {
            }
            return $scope.Brightness[id];
        };
        
        $scope.getAverageBrightness = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Brightness;
                var sum = 0.0;
                for (var i = 0; i < parameter.data.length - 1; i++){
                    sum += parseFloat(parameter.data[i].lux);
                }
                $scope.averageBrightness[id] = sum / (parameter.data.length -1);
            } catch (e) {
            }
            return $scope.averageBrightness[id];
        };
        
        // TODO Calculate all Values at once to improve performance
        $scope.getAverageAzimuth = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation;
                var sum = 0.0;
                for (var i = 0; i < parameter.data.length - 1; i++){
                    sum += parseFloat(parameter.data[i].azimuth);
                }
                $scope.averageAzimuth[id] = sum / (parameter.data.length -1);
            } catch (e) {
            }
            return $scope.averageAzimuth[id];
        };
        
        $scope.getAveragePitch = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation;
                var sum = 0.0;
                for (var i = 0; i < parameter.data.length - 1; i++){
                    sum += parseFloat(parameter.data[i].pitch);
                }
                $scope.averagePitch[id] = sum / (parameter.data.length -1);
            } catch (e) {
            }
            return $scope.averagePitch[id];
        };
        
        $scope.getAverageRoll = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation;
                var sum = 0.0;
                for(var i = 0; i < parameter.data.length - 1; i++){
                    sum += parseFloat(parameter.data[i].roll);
                }
                $scope.averageRoll[id] = sum / (parameter.data.length -1);
            } catch (e) {
            }
            return $scope.averageRoll[id];
        };
    }]);
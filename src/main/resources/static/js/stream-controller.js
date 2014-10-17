app.controller('StreamController', ['$scope', 'Socket', 'MapFilter',
    function ($scope, Socket, MapFilter) {
        "use strict";
        $scope.modes = {
            SHAKINESS: 0
        };
    
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
        $scope.brightness = {};
        $scope.brightnessQuality = {};
        $scope.averageBrightnessQuality = {};
        $scope.averageBrightness = {};
        $scope.averageAzimuth = {};
        $scope.averagePitch = {};
        $scope.averageRoll = {};
    
        $scope.getStreams = function () {
            $scope.ids = Object.keys(Socket.stream);
            return $scope.ids;
        };
    
        $scope.isHidden = function (id) {
            $scope.hidden = MapFilter.getHidden();
            var hide = false;
            try {
                if ($scope.hidden[id]) {
                    hide = true;
                }
            } catch (e) {
                
            }
            return hide;
        };
    
        $scope.getQuality = function (id) {
            switch ($scope.mode) {
            case $scope.modes.SHAKINESS:
                return $scope.getQualityByShakiness(id);
            }
        };
        
        $scope.getQualityByShakiness = function (id) {
            var average;
            var sum = 0.0;
            var sampleSize = 5;
            var currentStream = Socket.stream[id];
            var parameter = currentStream.Acceleration.force;
            // Since the data array is rewritten starting by 0 once it reaces its maxSize the index has
            // to continue at the end of the array if it is on the edge
            if(parameter.length >= sampleSize){
                for (var i = parameter.length - 1; i >= parameter.length - sampleSize; i--){
                    sum += parameter[i];
                }
                average = sum / sampleSize;
                $scope.quality = 100 * Math.pow(2, (- Math.abs(average) / 10));
            } else
                $scope.quality = 0.0;
            return $scope.quality;
        };

        $scope.getLatitude = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location.latitude;
                var currentValue = parameter[parameter.length - 1];
                $scope.latitude[id] = currentValue;
            } catch (e) {
            }
            return $scope.latitude[id];
        };
    
        $scope.getLongitude = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location.longitude;
                var currentValue = parameter[parameter.length - 1];
                $scope.longitude[id] = currentValue;
            } catch (e) {
            }
            return $scope.longitude[id];
        };
        
        $scope.getSpeed = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location.speed;
                var currentValue = parameter[parameter.length - 1];
                $scope.speed[id] = currentValue;
            } catch (e) {
            }
            return $scope.speed[id];
        };
        
        $scope.getAccuracy = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location.accuracy;
                var currentValue = parameter[parameter.length - 1];
                $scope.accuracy[id] = currentValue;
            } catch (e) {
            }
            return $scope.accuracy[id];
        };
        
        $scope.getAltitude = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location.altitude;
                var currentValue = parameter[parameter.length - 1];
                $scope.altitude[id] = currentValue;
            } catch (e) {
            }
            return $scope.accuracy[id];
        };
        
        $scope.getForce = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Acceleration.force;
                var currentValue = parameter[parameter.length - 1];
                $scope.force[id] = currentValue;
            } catch (e) {
            }
            return $scope.force[id];
        };
        
        $scope.getAzimuth = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation.azimuth;
                var currentValue = parameter[parameter.length - 1];
                $scope.azimuth[id] = currentValue;
            } catch (e) {
            }
            return $scope.azimuth[id];
        };
        
        $scope.getPitch = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation.pitch;
                var currentValue = parameter[parameter.length - 1];
                $scope.pitch[id] = currentValue;
            } catch (e) {
            }
            return $scope.pitch[id];
        };
        
        $scope.getRoll = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation.roll;
                var currentValue = parameter[parameter.length - 1];
                $scope.roll[id] = currentValue;
            } catch (e) {
            }
            return $scope.roll[id];
        };
        
        $scope.getXResolution = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Camera.x;
                var currentValue = parameter[parameter.length - 1];
                $scope.xResolution[id] = currentValue;
            } catch (e) {
            }
            return $scope.xResolution[id];
        };
        
        $scope.getYResolution = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Camera.y;
                var currentValue = parameter[parameter.length - 1];
                $scope.yResolution[id] = currentValue;
            } catch (e) {
            }
            return $scope.yResolution[id];
        };
        
        $scope.getSnapshot = function (id) {
            var img;
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Snapshot.snapshot;
                var currentValue = parameter[parameter.length - 1];
                img = "data:image/jpeg;base64," + currentValue;
            } catch (e) {
                console.log("ImageError: " + e);
            }
            return img;
        };
        
        $scope.getBrightnessQuality = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Snapshot.brightnessQuality;
                var currentValue = parameter[parameter.length - 1];
                $scope.brightnessQuality[id] = currentValue;
            } catch (e) {
            }
            return $scope.brightnessQuality[id];
        };
        
        $scope.getAverageBrightnessQuality = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Snapshot.brightnessQuality;
                var sum = 0.0;
                for (var i in parameter){
                    sum += parseFloat(parameter[i]);
                }
                $scope.averageBrightnessQuality[id] = sum / (parameter.length);
            } catch (e) {
            }
            return $scope.averageBrightnessQuality[id];
        };
        
        $scope.getBrightness = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Brightness.lux;
                var currentValue = parameter[parameter.length - 1];
                $scope.brightness[id] = currentValue;
            } catch (e) {
            }
            return $scope.brightness[id];
        };
        
        $scope.getAverageBrightness = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Brightness.lux;
                var sum = 0.0;
                for (var i in parameter){
                    sum += parseFloat(parameter[i]);
                }
                $scope.averageBrightness[id] = sum / (parameter.length);
            } catch (e) {
            }
            return $scope.averageBrightness[id];
        };
        
        // TODO Calculate all Values at once to improve performance
        $scope.getAverageAzimuth = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation.azimuth;
                var sum = 0.0;
                for (var i in parameter){
                    sum += parseFloat(parameter[i]);
                }
                $scope.averageAzimuth[id] = sum / (parameter.length);
            } catch (e) {
            }
            return $scope.averageAzimuth[id];
        };
        
        $scope.getAveragePitch = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation.pitch;
                var sum = 0.0;
                for (var i in parameter){
                    sum += parseFloat(parameter[i]);
                }
                $scope.averagePitch[id] = sum / (parameter.length);
            } catch (e) {
            }
            return $scope.averagePitch[id];
        };
        
        $scope.getAverageRoll = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation.roll;
                var sum = 0.0;
                for (var i in parameter){
                    sum += parseFloat(parameter[i]);
                }
                $scope.averageRoll[id] = sum / (parameter.length);
            } catch (e) {
            }
            return $scope.averageRoll[id];
        };
    }]);
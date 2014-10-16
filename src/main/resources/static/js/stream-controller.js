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
            var sampleIndexes = [];
            var sampleSize = 5;
            var currentStream = Socket.stream[id];
            var parameter = currentStream.Acceleration;
            // Since the data array is rewritten starting by 0 once it reaces its maxSize the index has
            // to continue at the end of the array if it is on the edge
            if(parameter.data.length >= sampleSize){
                for (var i = parameter.index; i > parameter.index - sampleSize; i--){
                    if(i < 0){
                        sampleIndexes.push(parameter.data.length - i);
                    } else {
                        sampleIndexes.push(i);
                    }
                    console.log("i: " + i);
                }
                for (var index in sampleIndexes){
                    sum += parameter.data[sampleIndexes[index]].force;
                    console.log("sum: " + i);
                }
                average = sum / sampleSize;
                console.log("average: " + i);
                $scope.quality = 100 * Math.pow(2, (- Math.abs(average) / 10));
            } else
                $scope.quality = 0.0;
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
        
        $scope.getBrightnessQuality = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Snapshot;
                var currentValue = parameter.data[parameter.index];
                $scope.brightnessQuality[id] = currentValue.brightnessQuality;
            } catch (e) {
            }
            return $scope.brightnessQuality[id];
        };
        
        $scope.getAverageBrightnessQuality = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Snapshot;
                var sum = 0.0;
                for (var i = 0; i < parameter.data.length; i++){
                    sum += parseFloat(parameter.data[i].brightnessQuality);
                }
                $scope.averageBrightnessQuality[id] = sum / (parameter.data.length);
            } catch (e) {
            }
            return $scope.averageBrightnessQuality[id];
        };
        
        $scope.getBrightness = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Brightness;
                var currentValue = parameter.data[parameter.index];
                $scope.brightness[id] = currentValue.lux;
            } catch (e) {
            }
            return $scope.brightness[id];
        };
        
        $scope.getAverageBrightness = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Brightness;
                var sum = 0.0;
                for (var i = 0; i < parameter.data.length; i++){
                    sum += parseFloat(parameter.data[i].lux);
                }
                $scope.averageBrightness[id] = sum / (parameter.data.length);
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
                for (var i = 0; i < parameter.data.length; i++){
                    sum += parseFloat(parameter.data[i].azimuth);
                }
                $scope.averageAzimuth[id] = sum / (parameter.data.length);
            } catch (e) {
            }
            return $scope.averageAzimuth[id];
        };
        
        $scope.getAveragePitch = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation;
                var sum = 0.0;
                for (var i = 0; i < parameter.data.length; i++){
                    sum += parseFloat(parameter.data[i].pitch);
                }
                $scope.averagePitch[id] = sum / (parameter.data.length);
            } catch (e) {
            }
            return $scope.averagePitch[id];
        };
        
        $scope.getAverageRoll = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation;
                var sum = 0.0;
                for(var i = 0; i < parameter.data.length; i++){
                    sum += parseFloat(parameter.data[i].roll);
                }
                $scope.averageRoll[id] = sum / (parameter.data.length);
            } catch (e) {
            }
            return $scope.averageRoll[id];
        };
    }]);
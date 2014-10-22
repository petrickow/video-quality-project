app.controller('StreamController', ['$scope', 'Socket', 'MapFilter',
    function ($scope, Socket, MapFilter) {
        "use strict";
        
        // Selectable Quality Modes
        $scope.modes = {
            SHAKINESS: 0,
            AGGREGATED: 1
        };
        
        // The selected Stream that gets max bandwidth
        $scope.selectedStream;
    
        // Classes for Quality Selection "Links/ Buttons"
        $scope.qsShakinessClass = "active";
        $scope.qsAggregatedClass = "";
        
        // Meta Data Values
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
        
        $scope.selectStream = function (id) {
            // TODO Give that stream full bandthwidth
            $scope.selectedStream = id;
            console.log("Stream " + id + " is now selected!");
        };
        
        $scope.getRowClass = function (id) {
            var cssClass = "";
            if($scope.selectedStream === id)
                cssClass = "highlight";
            return cssClass;
        }
    
        $scope.getQuality = function (id) {
            switch ($scope.mode) {
            case $scope.modes.SHAKINESS:
                return $scope.getQualityByShakiness(id);
            case $scope.modes.AGGREGATED:
                return $scope.getQualityByAggregated(id);
            }
        };
        
        $scope.getQualityByShakiness = function (id) {
            var average;
            var threshold = 0.1;
            var sum = 0.0;
            var sampleSize = 5;
            var currentStream = Socket.stream[id];
            var parameter = currentStream.Acceleration.force;
            if(parameter.length % sampleSize === 0){
                for (var i = parameter.length - 1; i >= parameter.length - sampleSize; i--){
                    sum += parameter[i];
                }
                average = sum / sampleSize;
                
                $scope.quality[id] = 100 * Math.pow(2, (- Math.abs(average) / threshold));
            } else if(parameter.length < sampleSize)
                $scope.quality[id] = 0.0;
            return $scope.quality[id];
        };

        $scope.getQualityByAggregated = function (id) {
            var currentStream = Socket.stream[id];
            try {
                var parameter = currentStream.Snapshot.aggregatedQuality;
                $scope.quality = parameter[parameter.length - 1];
            } catch (e) {
                $scope.quality = 0.0;
            }
            return $scope.quality;
        };

        $scope.setQuality = function (quality) {
            
            // TODO make this dynamic
            if(quality === "SHAKINESS"){
                $scope.mode = $scope.modes.SHAKINESS;
                $scope.qsShakinessClass = "active";
                $scope.qsAggregatedClass = "";
            } else {
                $scope.mode = $scope.modes.AGGREGATED;
                $scope.qsShakinessClass = "";
                $scope.qsAggregatedClass = "active";
            }
                
        }

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
                
            }
            return img;
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
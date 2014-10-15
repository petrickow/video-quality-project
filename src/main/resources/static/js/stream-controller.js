app.controller('StreamController', ['Socket',
    function (Socket) {
        "use strict";
        this.modes = {
            SHAKINESS: 0
        }
    
        this.ids = [];
        this.hidden = {};
        this.mode = this.modes.SHAKINESS;
        this.quality = {};
        this.latitude = {};
        this.longitude = {};
        this.speed = {};
        this.accuracy = {};
        this.altitude = {};
        this.force = {};
        this.azimuth = {};
        this.pitch = {};
        this.roll = {};
        this.averageAzimuth = {};
        this.averagePitch = {};
        this.averageRoll = {};
    
        this.getStreams = function () {
            this.ids = Object.keys(Socket.stream);
            return this.ids;
        };
    
        this.isHidden = function (id) {
            var hide = false;
            if (false)
                hide = true;
            return hide;
        };
    
        this.getQuality = function (id) {
            switch (this.mode) {
                    case this.modes.SHAKINESS:
                        return this.getQualityByShakiness(id);
            }
        }
        
        this.getQualityByShakiness = function (id) {
            this.quality = 100 * Math.pow(2, (- Math.abs(this.force[id]) / 10));
            return this.quality;
        };

        this.getLatitude = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location;
                var currentValue = parameter.data[parameter.index];
                this.latitude[id] = currentValue.latitude;
            } catch (e) {
            }
            return this.latitude[id];
        };
    
        this.getLongitude = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location;
                var currentValue = parameter.data[parameter.index];
                this.longitude[id] = currentValue.longitude;
            } catch (e) {
            }
            return this.longitude[id];
        };
        
        this.getSpeed = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location;
                var currentValue = parameter.data[parameter.index];
                this.speed[id] = currentValue.speed;
            } catch (e) {
            }
            return this.speed[id];
        };
        
        this.getAccuracy = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location;
                var currentValue = parameter.data[parameter.index];
                this.accuracy[id] = currentValue.accuracy;
            } catch (e) {
            }
            return this.accuracy[id];
        };
        
        this.getAltitude = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location;
                var currentValue = parameter.data[parameter.index];
                this.altitude[id] = currentValue.altitude;
            } catch (e) {
            }
            return this.accuracy[id];
        };
        
        this.getForce = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Acceleration;
                var currentValue = parameter.data[parameter.index];
                this.force[id] = currentValue.force;
            } catch (e) {
            }
            return this.force[id];
        };
        
        this.getAzimuth = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation;
                var currentValue = parameter.data[parameter.index];
                this.azimuth[id] = currentValue.azimuth;
            } catch (e) {
            }
            return this.azimuth[id];
        };
        
        this.getPitch = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation;
                var currentValue = parameter.data[parameter.index];
                this.pitch[id] = currentValue.pitch;
            } catch (e) {
            }
            return this.pitch[id];
        };
        
        this.getRoll = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation;
                var currentValue = parameter.data[parameter.index];
                this.roll[id] = currentValue.roll;
            } catch (e) {
            }
            return this.roll[id];
        };
        
        // TODO Calculate all Values at once to improve performance
        this.getAverageAzimuth = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation;
                var sum = 0.0;
                for (var i = 0; i < parameter.data.length - 1; i++){
                    sum += parseFloat(parameter.data[i].azimuth);
                }
                this.averageAzimuth[id] = sum / (parameter.data.length -1);
            } catch (e) {
            }
            return this.averageAzimuth[id];
        };
        
        this.getAveragePitch = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation;
                var sum = 0.0;
                for (var i = 0; i < parameter.data.length - 1; i++){
                    sum += parseFloat(parameter.data[i].pitch);
                }
                this.averagePitch[id] = sum / (parameter.data.length -1);
            } catch (e) {
            }
            return this.averagePitch[id];
        };
        
        this.getAverageRoll = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation;
                var sum = 0.0;
                for(var i = 0; i < parameter.data.length - 1; i++){
                    sum += parseFloat(parameter.data[i].roll);
                }
                this.averageRoll[id] = sum / (parameter.data.length -1);
            } catch (e) {
            }
            return this.averageRoll[id];
        };
    }]);
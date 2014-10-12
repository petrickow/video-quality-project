app.controller('StreamController', [
    'Socket',
    function (Socket) {
        "use strict";
        this.message = "No data received!";
        this.latitude = "No data received!";
        this.longitude = "No data received!";
        this.speed = "No data received!";
        this.accuracy = "No data received!";
        this.altitude = "No data received!";
        this.ids = [];
        
        this.getStreams = function () {
            this.ids = Object.keys(Socket.stream);
            return this.ids;
        };

        this.getLatitude = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location;
                var currentValue = parameter.data[parameter.index - 1];
                this.latitude = currentValue.latitude;
            } catch (e) {
            }
            return this.latitude;
        };
        
        this.getLongitude = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location;
                var currentValue = parameter.data[parameter.index - 1];
                this.longitude = currentValue.longitude;
            } catch (e) {
            }
            return this.longitude;
        };
        
        this.getSpeed = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location;
                var currentValue = parameter.data[parameter.index - 1];
                this.speed = currentValue.speed;
            } catch (e) {
            }
            return this.speed;
        };
        
        this.getAccuracy = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location;
                var currentValue = parameter.data[parameter.index - 1];
                this.accuracy = currentValue.accuracy;
            } catch (e) {
            }
            return this.accuracy;
        };
        
        this.getAltitude = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Location;
                var currentValue = parameter.data[parameter.index - 1];
                this.altitude = currentValue.altitude;
            } catch (e) {
            }
            return this.accuracy;
        };
        
        this.getForce = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Acceleration;
                var currentValue = parameter.data[parameter.index - 1];
                this.force = currentValue.force;
            } catch (e) {
            }
            return this.force;
        };
        
        this.getAzimuth = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation;
                var currentValue = parameter.data[parameter.index - 1];
                this.azimuth = currentValue.azimuth;
            } catch (e) {
            }
            return this.azimuth;
        };
        
        this.getPitch = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation;
                var currentValue = parameter.data[parameter.index - 1];
                this.pitch = currentValue.pitch;
            } catch (e) {
            }
            return this.pitch;
        };
        
        this.getRoll = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var parameter = currentStream.Rotation;
                var currentValue = parameter.data[parameter.index - 1];
                this.roll = currentValue.roll;
            } catch (e) {
            }
            return this.roll;
        };
    }]);

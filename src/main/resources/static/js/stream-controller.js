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
                var currentValue = currentStream.location.data[currentStream.index - 1];
                this.latitude = currentValue.latitude;
            } catch (e) {
            }
            return this.latitude;
        };
        
        this.getLongitude = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var currentValue = currentStream.location.data[currentStream.index - 1];
                this.longitude = currentValue.longitude;
            } catch (e) {
            }
            return this.longitude;
        };
        
        this.getSpeed = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var currentValue = currentStream.location.data[currentStream.index - 1];
                this.speed = currentValue.speed;
            } catch (e) {
            }
            return this.speed;
        };
        
        this.getAccuracy = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var currentValue = currentStream.location.data[currentStream.index - 1];
                this.accuracy = currentValue.accuracy;
            } catch (e) {
            }
            return this.accuracy;
        };
        
        this.getAltitude = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var currentValue = currentStream.location.data[currentStream.index - 1];
                this.altitude = currentValue.altitude;
            } catch (e) {
            }
            return this.accuracy;
        };
    }]);

app.controller('StreamController', [
    'Socket',
    function (Socket) {
        "use strict";
        this.message = "No data received!";
        this.latitude = "No data received!";
        this.longitude = "No data received!";
        this.speed = "No data received!";
        this.accuracy = "No data received!";
        this.ids = [];
        
        this.getStreams = function () {
            this.ids = Object.keys(Socket.stream);
            return this.ids;
        }

        this.getLatitude = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var currentValue = currentStream.data[currentStream.index - 1];
                this.latitude = currentValue.lat;
            } catch (e) {
            }
            return this.latitude;
        };
        
        this.getLongitude = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var currentValue = currentStream.data[currentStream.index - 1];
                this.longitude = currentValue.lon;
            } catch (e) {
            }
            return this.longitude;
        };
        
        this.getSpeed = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var currentValue = currentStream.data[currentStream.index - 1];
                this.speed = currentValue.speed;
            } catch (e) {
            }
            return this.speed;
        };
        
        this.getAccuracy = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var currentValue = currentStream.data[currentStream.index - 1];
                this.accuracy = currentValue.acc;
            } catch (e) {
            }
            return this.accuracy;
        };
    }]);

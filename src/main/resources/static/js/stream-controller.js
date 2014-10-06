app.controller('StreamController', [
    'Socket',
    function (Socket) {
        "use strict";
        this.message = "No data received!";
        this.latitude = "No data received!";
        this.longitude = "No data received!";
        this.speed = "No data received!";
        this.accuracy = "No data received!";

        this.getLatitude = function () {
            this.latitude = Socket.messages.lat;
            return this.latitude;
        };
        
        this.getLongitude = function () {
            this.longitude = Socket.messages.lon;
            return this.longitude;
        };
        
        this.getSpeed = function () {
            this.speed = Socket.messages.speed;
            return this.speed;
        };
        
        this.getAccuracy = function () {
            this.accuracy = Socket.messages.acc;
            return this.accuracy;
        };
    }]);
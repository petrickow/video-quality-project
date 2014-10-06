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
            try {
                this.latitude = Socket.data[Socket.index - 1].lat;
            } catch (e) {
                console.log("Initializing Accuracy at Index: " + Socket.index);
            }
            return this.latitude;
        };
        
        this.getLongitude = function () {
            try {
                this.longitude = Socket.data[0].lon;
            } catch (e) {
                console.log("Initializing Accuracy at Index: " + Socket.index);
            }
            return this.longitude;
        };
        
        this.getSpeed = function () {
            try {
                this.speed = Socket.data[Socket.index - 1].speed;
            } catch (e) {
                console.log("Initializing Speed at Index: " + Socket.index);
            }
            return this.speed;
        };
        
        this.getAccuracy = function () {
            try {
                this.accuracy = Socket.data[Socket.index - 1].acc;
            } catch (e) {
                console.log("Initializing Accuracy at Index: " + Socket.index);
            }
            return this.accuracy;
        };
    }]);
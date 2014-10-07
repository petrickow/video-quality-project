app.controller('StreamController', [
    'Socket',
    function (Socket) {
        "use strict";
        this.message = "No data received!";
        this.latitude = "No data received!";
        this.longitude = "No data received!";
        this.speed = "No data received!";
        this.accuracy = "No data received!";

        this.getLatitude = function (id) {
            try {
//                var elem = null;
//                for(var id in Socket.stream)
//                    if(id == "1")
//                        elem = Socket.stream[id]
                var currentStream = Socket.stream[id];
                var currentValue = currentStream.data[currentStream.index - 1];
                this.latitude = currentValue.lat;
            } catch (e) {
                console.log("Initializing Latitude");
            }
            return this.latitude;
        };
        
        this.getLongitude = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var currentValue = currentStream.data[currentStream.index - 1];
                this.longitude = currentValue.lon;
            } catch (e) {
                console.log("Initializing Longitude");
            }
            return this.longitude;
        };
        
        this.getSpeed = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var currentValue = currentStream.data[currentStream.index - 1];
                this.speed = currentValue.speed;
            } catch (e) {
                //console.log("Initializing Speed of Stream 1 at Index: " + currentStream.index);
            }
            return this.speed;
        };
        
        this.getAccuracy = function (id) {
            try {
                var currentStream = Socket.stream[id];
                var currentValue = currentStream.data[currentStream.index - 1];
                this.accuracy = currentValue.acc;
            } catch (e) {
                //console.log("Initializing Accuracy of Stream 1 at Index: " + currentStream.index);
            }
            return this.accuracy;
        };
    }]);

var app =  angular.module('directives', []);
app.directive("videoStream", ['Socket', function (Socket) {
    "use strict";
    return {
        restrict: 'E',
        templateUrl: "template-video-stream.html",
        replace: true,
        controller: function () {
        //alert("Testdata: "+ this.data.getElementsByTagName('rtept')[0].getAttribute('lat'));
            this.message = "No data received!";
            this.updateMessage = function () {
                this.message = 
                    "Latitude: " + Socket.messages["lat"] + "\ " + 
                    "Longitude: " + Socket.messages["lon"] + "\ " +
                    "Speed: " + Socket.messages["speed"]  + "\ " +
                    "Accuracy: " + Socket.messages["acc"];
                return this.message;
            }
        },
        controllerAs: "streamData"
    };
//});
}]);
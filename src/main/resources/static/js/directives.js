var app =  angular.module('directives', []);
app.directive("videoStream", ['Socket', function (Socket) {
    "use strict";
    return {
        restrict: 'E',
        templateUrl: "template-video-stream.html",
        controller: function () {
        //alert("Testdata: "+ this.data.getElementsByTagName('rtept')[0].getAttribute('lat'));
            this.message = "No data received!";
            this.updateMessage = function () {
                this.message = Socket.messages;
                return this.message;
            }
        },
        controllerAs: "streamData"
    };
//});
}]);
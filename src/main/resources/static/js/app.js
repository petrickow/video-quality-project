var app = angular.module('video-quality-manager', ['directives']);

app.factory('Socket', [ '$rootScope', function ($rootScope) {
    "use strict";
    var Service = {};
    Service.messages = "";
    
    var ws_url = "ws://localhost:8080/subscribeToMetadata";
    var ws = new WebSocket(ws_url);
    ws.onopen = function () {
        // Web Socket is connected, send data using send()
        ws.send("register me!");
        console.log("connection established...");
    };
    ws.onmessage = function (event) {
        $rootScope.$apply(function () {
            Service.messages = event.data; //.push(event.data);
            console.log(event);
            //console.log(event.data);
            console.log(Service.messages);
        });
    };
    ws.onclose = function () {
        // websocket is closed.
        console.log("Connection is closed...");
    };
    
    return Service;
}]);
                   
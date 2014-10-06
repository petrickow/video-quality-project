var app = angular.module('video-quality-manager', []);

app.factory('Socket', [ '$rootScope', function ($rootScope) {
    "use strict";
    var Service = {};
    Service.messages = "";
    var ws_url = "ws://localhost:8080/subscribeToMetadata";
    var ws = new WebSocket(ws_url);
    var parser = new DOMParser();
    var data, input = "";
    ws.onopen = function () {
        // Web Socket is connected, send data using send()
        ws.send("register me!");
        console.log("connection established...");
    };
    ws.onmessage = function (event) {
        
         $rootScope.$apply(function () { 
             try{
             input = parser.parseFromString(event.data, "text/xml");
             data = input.getElementsByTagName('rtept')[0];
             Service.messages = {}; //.push(event.data);
             Service.messages.lat = data.getAttribute('id');
             Service.messages.lat = data.getAttribute('lat');
             Service.messages.lon = data.getAttribute('lon');
             Service.messages.speed = data.getAttribute('speed');
             Service.messages.acc = data.getAttribute('acc');
             console.log(event);
             console.log(Service.messages);
             } catch (e if e instanceof TypeError){
            console.log("Waiting for data...");
        }
         });
        
    };
    ws.onclose = function () {
        // websocket is closed.
        console.log("Connection is closed...");
    };
    
    return Service;
}]);
                   
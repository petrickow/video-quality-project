var app = angular.module('video-quality-manager', []);

app.factory('Socket', [ '$rootScope', function ($rootScope) {
    "use strict";
    var maxCachedItems = 1000;
    var Service = {};
    Service.data = [];
    Service.index = 0;
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
                var message = {};
                message.id = data.getAttribute('id');
                message.lat = data.getAttribute('lat');
                message.lon = data.getAttribute('lon');
                message.speed = data.getAttribute('speed');
                message.acc = data.getAttribute('acc');
                //prevents from running out of memory
                if(Service.index > maxCachedItems){
                    Service.index = 0;
                }
                Service.data[Service.index] = message;
                Service.index = Service.index + 1;
                console.log(event);
                console.log(Service.index);
                console.log(Service.data[Service.data.length - 1]);
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
                   
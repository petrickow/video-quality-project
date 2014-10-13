var app = angular.module('video-quality-manager', [ 'google-maps'.ns()]);

app.factory('Socket', [ '$rootScope', function ($rootScope) {
	"use strict";
	var Service = {};
	Service.stream = {};
    Service.maxCachedItems = 1000;
	var ws_url = "ws://localhost:8080/subscribeToMetadata";
	var ws = new WebSocket(ws_url);
	var data, input = "";
	ws.onopen = function () {
		// Web Socket is connected, send data using send()
		ws.send("register me!");
		console.log("connection request sent...");
	};
	ws.onmessage = function (event) {
		
		var recvJson = angular.fromJson(event.data);
		if (recvJson.response === "accepted") {
			console.log("Historical data will be inserted in this json object");
			// make call to appropriate function
		} else {
            $rootScope.$apply(function () {
                
                if (typeof Service.stream[recvJson[0].id] === "undefined") {
                    Service.stream[recvJson[0].id] = {};
                }

                for (var i in recvJson){
                    var item = recvJson[i];
                    // console.log(item);
                    if (typeof Service.stream[item.id][item["name"]] === "undefined") {
                        Service.stream[item.id][item.name] = {};
                        Service.stream[item.id][item.name].data = [];
                        Service.stream[item.id][item.name].index = 0;
                    }
                

                    var currentStream;

                    currentStream = Service.stream[item.id][item.name];

                    //prevents from running out of memory
                    if (currentStream.index > Service.maxCachedItems) {
                        currentStream.index = 0;
                    }

                    currentStream.data[currentStream.index++] = item;

                    }
            });       
        }

    };
	ws.onclose = function() {
		// websocket is closed.
		console.log("Connection is closed...");
	};

	return Service;
} ]);
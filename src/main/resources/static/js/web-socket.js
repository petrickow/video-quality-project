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
			// console.log(recvJson);
            $rootScope.$apply(function () {
                // console.log(recvJson);
                if (typeof Service.stream[recvJson[0].id] === "undefined") {
                    Service.stream[recvJson[0].id] = {};
                }

                for (var i in recvJson){
                    var item = recvJson[i];
                    //console.log(item);
                    if (typeof Service.stream[item.id][item["name"]] === "undefined") {
                        Service.stream[item.id][item.name] = {};
                        for (var j in item){
                            Service.stream[item.id][item.name][j] = [];
                        }
                    }

                    var currentStream;

                    currentStream = Service.stream[item.id][item.name];

                    for (var j in item){

                        //prevents from running out of memory
                        if (currentStream[j].length > Service.maxCachedItems) {
                            currentStream[j].shift();
                        }
                        currentStream[j].push(item[j]);
                    }
                }
            });       
        }

    };
	ws.onclose = function() {
		// websocket is closed.
		console.log("Connection is closed...");
	};

	return Service;
}]);
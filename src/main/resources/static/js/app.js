var app = angular.module('video-quality-manager', ['ngMap']);

app.factory('Socket', [ '$rootScope', function ($rootScope) {
    "use strict";
    var maxCachedItems = 1000;
    var Service = {};
    Service.stream = {};
    var ws_url = "ws://localhost:8080/subscribeToMetadata";
    var ws = new WebSocket(ws_url);
    var parser = new DOMParser();
    var data, input = "";
    ws.onopen = function () {
        // Web Socket is connected, send data using send()
        ws.send("register me!");
        // console.log("connection established...");
    };
    ws.onmessage = function (event) {
        var jsonData = JSON.parse(event.data);
        //console.log(jsonData);
        $rootScope.$apply(function () {
            
            var item = jsonData.logItem;
            
            if (typeof Service.stream[item.id] === "undefined") {
                Service.stream[item.id] = {};
            }
            
            if (typeof Service.stream[item.id][item.name] === "undefined") {
                Service.stream[item.id][item.name] = {};
                Service.stream[item.id][item.name].data = [];
                Service.stream[item.id][item.name].index = 0;
            }
                                   
            var currentStream;
                                   
            currentStream = Service.stream[item.id][item.name];
            
            //prevents from running out of memory
            if (currentStream.index > maxCachedItems) {
                currentStream.index = 0;
            }
            
            currentStream.data[currentStream.index++] = item;
            
        });
        /*
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
                
                if(typeof Service.stream[message.id] == "undefined") {
                    Service.stream[message.id] = {};
                    Service.stream[message.id].data = [];
                    Service.stream[message.id].index = 0;
                }
                
                var currentStream = Service.stream[message.id];
                
                //prevents from running out of memory
                if(currentStream.index > maxCachedItems){
                    currentStream.index = 0;
                }
                currentStream.data[currentStream.index++] = message;
                //console.log(event);
                // TODO enable TypeCheck
                } catch (e){ 
                // } catch (e if e instanceof TypeError){
                    //console.log("Waiting for data...");
                }
         });
        */
    };
    ws.onclose = function () {
        // websocket is closed.
        //console.log("Connection is closed...");
    };
    
    return Service;
}]);

app.controller('mapController', 
 function($scope, $http, $interval) {
  var map;
  $scope.$on('mapInitialized', function(e, evtMap) {
    map = evtMap;
  });

  $scope.dynMarkers = [];
  for (var i = 0; i < 8; i++) {
    $scope.dynMarkers[i] = new google.maps.Marker({
      title: "Marker: " + i
    })
  }

  $scope.GenerateMapMarkers = function() {
    var d = new Date(); //To show marker location changes over time
    $scope.date = d.toLocaleString();

    var numMarkers = Math.floor(Math.random() * 4) + 4; //between 4 to 8 markers
    for (i = 0; i < numMarkers; i++) {
      var lat = 49.4900000 + (Math.random() / 100); 
      var lng = 8.4800300 + (Math.random() / 100);

      var loc = new google.maps.LatLng(lat, lng);
      $scope.dynMarkers[i].setPosition(loc);
      $scope.dynMarkers[i].setMap(map);
    }
  };

  $interval($scope.GenerateMapMarkers, 2000);
});
                   
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
                        Service.stream[item.id][item.name].index = -1;
                    }
                

                    var currentStream;

                    currentStream = Service.stream[item.id][item.name];

                    //prevents from running out of memory
                    if (currentStream.index >= Service.maxCachedItems) {
                        currentStream.index = -1;
                    }

                    currentStream.data[++currentStream.index] = item;

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

app.directive('linearChart', function($parse, $window){
   return{
      restrict:'EA',
      template:"<svg width='200' height='200'></svg>",
       link: function(scope, elem, attrs){
           var exp = $parse(attrs.chartData);

           var salesDataToPlot=exp(scope);
           var padding = 20;
           var pathClass="path";
           var xScale, yScale, xAxisGen, yAxisGen, lineFun;

           var d3 = $window.d3;
           var rawSvg=elem.find('svg');
           var svg = d3.select(rawSvg[0]);

           scope.$watchCollection(exp, function(newVal, oldVal){
               salesDataToPlot=newVal;
               redrawLineChart();
           });

           function setChartParameters(){

               xScale = d3.scale.linear()
                   .domain([salesDataToPlot[0].hour, salesDataToPlot[salesDataToPlot.length-1].hour])
                   .range([padding + 5, rawSvg.attr("width") - padding]);

               yScale = d3.scale.linear()
                   .domain([0, d3.max(salesDataToPlot, function (d) {
                       return d.sales;
                   })])
                   .range([rawSvg.attr("height") - padding, 0]);

               xAxisGen = d3.svg.axis()
                   .scale(xScale)
                   .orient("bottom")
                   .ticks(salesDataToPlot.length - 1);

               yAxisGen = d3.svg.axis()
                   .scale(yScale)
                   .orient("left")
                   .ticks(5);

               lineFun = d3.svg.line()
                   .x(function (d) {
                       return xScale(d.hour);
                   })
                   .y(function (d) {
                       return yScale(d.sales);
                   })
                   .interpolate("basis");
           }
         
         function drawLineChart() {

               setChartParameters();

               svg.append("svg:g")
                   .attr("class", "x axis")
                   .attr("transform", "translate(0,180)")
                   .call(xAxisGen);

               svg.append("svg:g")
                   .attr("class", "y axis")
                   .attr("transform", "translate(20,0)")
                   .call(yAxisGen);

               svg.append("svg:path")
                   .attr({
                       d: lineFun(salesDataToPlot),
                       "stroke": "blue",
                       "stroke-width": 2,
                       "fill": "none",
                       "class": pathClass
                   });
           }

           function redrawLineChart() {

               setChartParameters();

               svg.selectAll("g.y.axis").call(yAxisGen);

               svg.selectAll("g.x.axis").call(xAxisGen);

               svg.selectAll("."+pathClass)
                   .attr({
                       d: lineFun(salesDataToPlot)
                   });
           }

           drawLineChart();
        },
        controller: function($scope, $interval, Socket){
          $scope.ids = [];
          $scope.salesData=[
              {hour: 1,sales: 54},
              {hour: 2,sales: 66},
              {hour: 3,sales: 77},
              {hour: 4,sales: 70},
              {hour: 5,sales: 60},
              {hour: 6,sales: 63},
              {hour: 7,sales: 55},
              {hour: 8,sales: 47},
              {hour: 9,sales: 55},
              {hour: 10,sales: 30}
          ];

          $interval(function(){
              var hour=$scope.salesData.length+1;
              var sales= Math.round(Math.random() * 100);
              $scope.salesData.push({hour: hour, sales:sales});
          }, 1000, 10);
        },
        controllerAs: 'sales'
   };
});
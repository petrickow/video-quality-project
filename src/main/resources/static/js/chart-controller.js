app.controller('ChartController', ['$scope', 'Socket',  
    function ($scope, Socket) {
    "use strict";

    $scope.qly = [];

    $scope.highchartsNG = {
        options: {
            chart: {
                type: 'line',
                animation: Highcharts.svg // don't animate in old IE
            }
        },
        title: {
            text: 'Stream history'
        },
        xAxis: {
            // type: 'datetime',
            tickPixelInterval: 150,
            text: 'Time-line'
        },
        yAxis: {
            title: {
                text: 'Value'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        series: [
            {
                name: 'Quality',
                data: []
            } 
        ],
        size: {
           width: 500,
           height: 300
        },
             
        loading: false
    };

    $scope.getHighchartsNG = function (id) {
        // try {
        //     console.log("Get Stream: " + Socket);
        //     for (var i in Socket.stream){
        //         console.log(i);
        //     }
        //     var ids = Object.keys(Socket.stream);
        //     console.log("IDs: " + ids + " : " + ids[0]);
        //     var tmp = Socket.stream[ids[0]].Acceleration.data[Socket.stream[ids[0]].Acceleration.index].force;
        //     $scope.highchartsNG.series[0].data.push(tmp);
        // } catch (e) {
        //     console.log("Get Chart: " + e);
        // }
        try {
            
            switch ($scope.getChart) {
            case 0:
                $scope.highchartsNG.series[0].data = Socket.stream[id].Acceleration.force;
                break;
            case 1:
                $scope.highchartsNG.series[0].data = Socket.stream[id].Brightness.lux;
                break;
            case 2:
                // TODO: pushing quality causes errors in the console and array history is not cleared anymore when switching
                $scope.qly.push($scope.getQuality(id));
                $scope.highchartsNG.series[0].data = $scope.qly;
                break;
            default:                
                $scope.qly.push($scope.getQuality(id));
                $scope.highchartsNG.series[0].data = $scope.qly;

            }
           
        } catch (e) {
            console.log("Get Chart: " + e);
        }
        return $scope.highchartsNG;
    };

    $scope.getShChart = function () {
        if ($scope.highchartsNG.series[0].data.length=1) {
            $scope.highchartsNG.series.splice(0,1);
            $scope.highchartsNG.series.push({
                name: 'Shakiness',
                data: []
            })
        }
        // if($scope.highchartsNG.series.length>1){
        //     $scope.highchartsNG.series.splice(0,1);
        // } 
        // else if($scope.highchartsNG.series[1].data.length!=0){
        //     $scope.highchartsNG.series.splice(1,1);
        // }

        $scope.getChart = 0;
    }; 

    $scope.getBrChart = function () {
        if ($scope.highchartsNG.series[0].data.length=1) {
            $scope.highchartsNG.series.splice(0,1);
            $scope.highchartsNG.series.push({
                name: 'Brightness',
                data: []
            })
        }

        $scope.getChart = 1;
    }; 

    $scope.getQuChart = function () {
        if ($scope.highchartsNG.series[0].data.length=1) {
            $scope.highchartsNG.series.splice(0,1);
            $scope.highchartsNG.series.push({
                name: 'Quality',
                data: []
            })
        }
        
        $scope.getChart = 2;
    }; 

}]);
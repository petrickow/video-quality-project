app.controller('ChartController', ['$scope', 'Socket',  function ($scope, Socket) {
    "use strict";
    $scope.highchartsNG = {
        options: {
            chart: {
                type: 'line'
            }
        },
        series: [{
            data: []
        }],
        size: {
           width: 400,
           height: 300
        },
             
        loading: false
    };



    $scope.getHighchartsNG = function () {
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
            var ids = Object.keys(Socket.stream);
            $scope.highchartsNG.series[0].data = Socket.stream[ids[0]].Acceleration.force;
        } catch (e) {
            console.log("Get Chart: " + e);
        }
        return $scope.highchartsNG;
    };

}]);
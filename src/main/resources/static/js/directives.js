var app =  angular.module('directives', []);
app.directive("videoStream", function () {
    "use strict";
    return {
        restrict: 'E',
        templateUrl: "template-video-stream.html"
    };
});
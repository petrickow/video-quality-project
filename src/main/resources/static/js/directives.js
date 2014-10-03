var app =  angular.module('directives', []);
app.directive("videoStream", function() {
    return {
      restrict: 'E',
      templateUrl: "../templates/template-video-stream.html"
    };
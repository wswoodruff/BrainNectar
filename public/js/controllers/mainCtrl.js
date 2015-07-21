var $ = require("../../bower_components/jquery/dist/jquery.js");

module.exports = function($scope, $state) {
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();
        console.log("main loaded");
    })
}

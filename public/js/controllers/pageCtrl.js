/*
    Handles refreshes in the browser by reading and parsing the url.
*/

var url = require("url");

module.exports = function($scope, $state) {
    $scope.$on('$viewContentLoaded', function(event, viewConfig) {
        event.stopPropagation();

        var urlHash = url.parse(String(window.location)).hash
        var urlPath = urlHash.slice(2);
        
        if(urlPath == "") {
            $state.transitionTo("main.home");
        } else {
            $state.transitionTo("main." + urlPath);
        }
    })
}

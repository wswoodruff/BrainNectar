
module.exports = function($scope) {
    $scope.$on('$ionicView.loaded', function(event) {
        // custom fadeIn animation setup
        DOMJustLoaded = true;
        DOMLoaded = true;
        $(".home-view").css({
            display: "none"
        });
    });

    $scope.$on('$ionicView.beforeEnter', function(event) {
        if(DOMLoaded && !DOMJustLoaded) {
            $(".home-view").css({
                display: "none"
            });
        }
    })

    $scope.$on('$ionicView.enter', function(event) {
        if(DOMLoaded == true) {
            $(".home-view").fadeIn(400);
        }
        DOMJustLoaded = false;
    });

    $scope.$on('$ionicView.beforeLeave', function(event) {
        $(".home-view").fadeOut(400);
    })
}

module.exports = angular.module('brainNectar', ['app.controllers', 'app.services', 'ui.router', 'ui.bootstrap'])

.run(function() {
    
})

.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
    .state('main', {
        url: '/',
        views: {
            '': {
                templateUrl: 'partials/main.html',
                controller: 'MainCtrl'
            },
            'header@main': {
                templateUrl: 'partials/header.html',
                controller: 'HeaderCtrl'
            },
            'sidebar@main': {
                templateUrl: 'partials/sidebar.html',
                controller: 'SidebarCtrl'
            },
            'page@main': {
                templateUrl: 'partials/page.html',
                controller: "PageCtrl"
            },
            'footer@main': {
                templateUrl: 'partials/footer.html',
                controller: 'FooterCtrl'
            }
        }
    })

    .state('main.home', {
        url: '/home',
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
    })

    .state('main.shop', {
        url:'/shop',
        templateUrl: 'partials/shop.html',
        controller: 'ShopCtrl'
    })

    .state('main.cart', {
        url:'/cart',
        templateUrl: 'partials/cart.html',
        controller: 'CartCtrl'
    })
    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
});




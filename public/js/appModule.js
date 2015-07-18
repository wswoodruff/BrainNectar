module.exports = angular.module('brainNectar', ['app.controllers', 'app.services', 'ui.router', 'ui.bootstrap'])

.run(function() {
    
})

.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
    .state('main', {
        url: '/',
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
    })

    .state('main.content', {
        templateUrl: 'partials/mainContent.html',
        controller: 'MainContentCtrl'
    })

    .state('main.sidebar', {
        templateUrl: 'partials/sidebar.html',
        controller: 'SidebarCtrl'
    })

    .state('main.content.home', {
        url: '/home',
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
});

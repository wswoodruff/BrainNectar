module.exports = angular.module('brainNectar', ['app.controllers', 'app.services', 'ui.router', 'ui.bootstrap'])

.run(function() {
    
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('master', {
      url: "",
      templateUrl: 'partials/master.html',
      controller: 'MasterCtrl'
    })

    .state('home', {
      url: "/home",
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
  
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
  });

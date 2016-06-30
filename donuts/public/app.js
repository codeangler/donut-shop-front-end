(function(){
  angular.module('donutApi', ['ui.router', 'donutsCtrlModule'])
    .config(routerConfig)

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'] // 12.4
    function routerConfig($stateProvider, $urlRouterProvider){
      // 13
      $stateProvider
        .state('home', {
          url:'/',
          templateUrl: 'partials/home.html', // future home of controller  # 22
           controller: 'allDonutsCtrl as donutsCtrl' // from donut_controllers.js line 3, name of controller
        })

      $urlRouterProvider.otherwise('/')
    }

}())
(function(){
  angular.module('donutApi', ['ui.router', 'donutsCtrlModule', 'donutFactoryModule'])
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
        .state('create-donut', {
          url: '/create-donut',
          templateUrl: 'partials/donut_form.html',
          controller: 'createDonutsCtrl as donutCtrl'
        })
        .state('update-donut',{
          url:'/update-donut/:id',
          templateUrl: 'partials/donut_form.html',
          controller: 'updateDonutsCtrl as donutCtrl'
        })

      $urlRouterProvider.otherwise('/')
    }

}())
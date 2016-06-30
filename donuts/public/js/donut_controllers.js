(function(){
  angular.module('donutsCtrlModule', [])  // modularize seperate module to attach to app
    .controller('allDonutsCtrl', allDonutsCtrl)

    function allDonutsCtrl(){
      var donutCtrl = this;

      // future factory injection
      donutCtrl.title = "The Donut Shop"
    }
}())
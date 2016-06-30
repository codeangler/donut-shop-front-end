(function () {
  angular.module('donutFactoryModule', [])
    .factory('donutFactory', donutFactory) // error @ 30 forgot the name of the factory prior to function call!!

    donutFactory.$inject = ['$http']

    function donutFactory($http){
      var factoryObject = {}

      factoryObject.allDonuts = function(){
        return $http.get('/api/v0/donuts') // look with  server.js to match the "api/v#/ dbname" trying to head 
      }

       factoryObject.single = function(id){
        return $http.get('api/v0/donuts/' + id)
      }

        factoryObject.create = function(donuts){
        return $http.post('/api/v0/donuts' , donuts) // check again server.js  trying to head 
      }

        factoryObject.update = function(donuts){
        return $http.post('/api/v0/donuts/' + donut._id , donuts) // check again server.js  trying to head 
      }

      factoryObject.destroy = function(id){
        return $http.get('api/v0/donuts/' + id)

      }
     



      return factoryObject // 27
    }
}())
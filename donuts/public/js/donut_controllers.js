(function(){
  angular.module('donutsCtrlModule', [])  // modularize seperate module to attach to app
    .controller('allDonutsCtrl', allDonutsCtrl)
    .controller ('createDonutsCtrl', createDonutsCtrl)//35
    .controller ('updateDonutsCtrl', updateDonutsCtrl)

    allDonutsCtrl.$inject = ['donutFactory'] // 30 

    function allDonutsCtrl(donutFactory){
      var donutCtrl = this;

      donutCtrl.title = "The Donut Shop"

      // Factory passed as argument calls factory function allDonuts() which is a HTTP GET request
      donutFactory.allDonuts()  // 30.2
        .then(function(response){
          console.log("we are inside the controller all donuts caught reponse from server served by factory.")
          donutCtrl.donuts = response.data
        })
    }

    createDonutsCtrl.$inject = ['donutFactory', '$state']  //  36

    function createDonutsCtrl(donutFactory, $state){
      var donutCtrl = this;
      donutCtrl.title = "create a dream donut"
      donutCtrl.create = true; // 55
      
      donutCtrl.createDonut = function(){ // 42  // removed argument as it wasn't necessary upon testing. and ocmparing to Tony's
        console.log('working')
        donutFactory.create(donutCtrl.newDonut)
          .then(function(response){
            console.log('New Donut response', response)
            // routing the #47
            $state.go('home')
          })
      }
    }

    updateDonutsCtrl.$inject = ['donutFactory', '$state', '$stateParams']  //  49

    function updateDonutsCtrl(donutFactory, $state, $stateParams){
      var donutCtrl = this;

      donutCtrl.title='Update donut'
      donutCtrl.update = true;

      // need another factory call to get the params   49
      donutFactory.single($stateParams.id)
        .then(function(response){
          donutCtrl.currentDonut = response.data
        })
        
        // this controller method .updateDonut 
        donutCtrl.updateDonut = function(){
           donutFactory.update(donutCtrl.currentDonut)
            .then(function(response){
            console.log('Updated donut', response) // another call to factory
            })
        }
      
        donutCtrl.updateDonut = function() {
          donutFactory.update(donutCtrl.currentDonut)
            .then(function(response) {
              console.log("Updated donut", response)
              $state.go('home')
            })
        }
        // 9089080   destroy add in 
        donutCtrl.destroy = function(id){ // call the destroy function from factory, access http DELETE reqeuest
          donutFactory.destory(id)
            .then(function(response){
              console.log("Donute Destroyed")
              $state.go('home')
            })
        }
      }  
}())
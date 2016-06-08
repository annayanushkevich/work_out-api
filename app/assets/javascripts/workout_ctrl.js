(function () {
   "use strict";
   angular.module("app").controller("workoutCtrl", function($scope, $http) {
 
   $scope.setup = function() {
    $http.get('/api/v1/workouts.json').then(function(response) {
       $scope.workouts = response.data;
     });
   }
 
   $scope.addWorkout = function(exercise, time, calories_burned) {
     var workout = {
      exercise: exercise,
      time: time,
      calories_burned:calories_burned
      }
     $http.post('api/v1/workouts.json', workout).then(function(response) {
       $scope.workouts.push(response.data);
       }, function(error) {
        $scope.errors = error.data.errors;
     });
   }

   $scope.deleteWorkout = function(workout) {
    $http.delete('api/v1/workouts/' + workout.id + '.json').then(function(response) {
    var index = $scope.workouts.indexOf(workout);
      $scope.workouts.splice(index, 1);
    });
  }

    $scope.toggleOrder = function(attribute) {
      if(attribute != $scope.orderAttribute) {
        $scope.descending = false;
      } else {
        $scope.descending= !$scope.descending;
      }
      $scope.orderAttribute = attribute;
      }
      

   window.$scope = $scope;
   });
   
  })();

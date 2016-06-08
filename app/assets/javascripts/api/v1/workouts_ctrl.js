(function (){
"use strict";

angular.module("app").controller("workOutCtrl", function($scope,$http) {
$scope.setup = function() {
  $http.get("http://localhost:3000/api/v1/workouts.json").then(function(response) {
    $scope.workouts = response.data;
  });
}

$scope.addExercise = function(exercise, time, calories_burned) {
  var exercise = { exercise: exercise,time: time, calories_burned:calories_burned}
    $http.post('api/v1/exercises.json',exersise).then(function(response) {
      $scope.exercises.push(exercise);
      });
    }
    window.$scope = $scope;

  });
  })();

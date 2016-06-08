angular.module("app").directive('workout', function(){
  return{
    restrict: 'E',
    templateUrl: 'exercise-table.html'
  }
});
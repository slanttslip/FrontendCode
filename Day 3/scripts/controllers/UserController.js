/**
 * Created by Adrian.Calancea on 6/27/16.
 */
hrApp.controller('UserController', ['$scope','UserServices','$location', function($scope,UserServices,$location){

    $scope.save = function() {


//        TODO #13 refactor your calculations using MathService
    }
    $scope.back = function() {
        $location.url('/');

    }

    $scope.reset = function() {
        $scope.user="";

    }

    $scope.save = function() {
        $scope.save=UserServices.Save($scope.user);

    }

}]);

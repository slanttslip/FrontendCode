/**
 * Created by Adrian.Calancea on 6/28/16.
 */
hrApp.controller('FormsController',['$scope',function ($scope) {

    $scope.Submit=function () {
       if($scope.myForm.$valid) alert("este Valid");
        else alert("Nu este Valid");

    }
}]);
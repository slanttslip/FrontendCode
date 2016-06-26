/**
 * Created by Adrian.Calancea on 6/24/16.
 */

firstag.controller("DescriptionController",function($scope){


$scope.title = 'Am facut si eu ceva FRUMOS';
$scope.childtemplate = 'templates/childscope.html';
    $scope.descriptionShow=false;

   $scope.toggleDescriptionShow=function () {

       $scope.descriptionShow=!$scope.descriptionShow;

   };


$scope.resetFirstVariable = function() {
    $scope.firstVariable = undefined;
};
$scope.setFirstVariable = function(val) {
    $scope.firstVariable = val;
}

});

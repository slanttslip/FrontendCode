hrApp.controller('MathController', ['$scope','MathService', function($scope,MathService){

    $scope.calculate = function() {
        $scope.op1=MathService.add(parseInt($scope.a),parseInt($scope.b));
        $scope.op2=MathService.substract(parseInt($scope.a),parseInt($scope.b));
        $scope.op3=MathService.multiply(parseInt($scope.a),parseInt($scope.b));
        $scope.op4=MathService.divide(parseInt($scope.a),parseInt($scope.b));

//        TODO #13 refactor your calculations using MathService
    }

}]);

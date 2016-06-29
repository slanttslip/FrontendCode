hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location','commonResourcesFactoryBackup',
    function($scope, $http, $routeParams, $location,commonResourcesFactoryBackup) {

        $scope.employee = {};

        $http.get(commonResourcesFactoryBackup.findOneEmployeeUrl+$routeParams.employeeid)
            .success(function(data, status, headers, config) {
                $scope.employee = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
            });

        // TODO #HR6 get employee by id



        $scope.back = function() {
            $location.url('/employeeslist');

        }

    }]);
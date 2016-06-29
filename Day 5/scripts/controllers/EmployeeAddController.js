hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup','EmployeeService','jobsService','DepartamentsService',
    function($scope, $http, $location, CommonResourcesFactoryBackup,EmployeeService,jobsService,DepartamentsService) {
        $scope.employee = {};

        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1
        EmployeeService.findByAll()
            .then(function (response) {
                $scope.managers=response.data;
            }, function (error) {
alert(error);
            })

        jobsService.findByAllJobs()
            .then(function (response) {
                $scope.jobs=response.data;
            }, function (error) {
                alert(error);
            })
        DepartamentsService.findByAllDepartaments()
            .then(function (response) {
                $scope.departaments=response.data;
            }, function (error) {
                alert(error);
            })

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**c
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);
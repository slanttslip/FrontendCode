hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup','EmployeeService','jobsService','DepartamentsService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup,EmployeeService,jobsService,DepartamentsService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };
        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });
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


        

        $http({url: CommonResourcesFactoryBackup.findAllEmployeesUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.employees = data;
            });

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);
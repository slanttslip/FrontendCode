/**
 * Created by Adrian.Calancea on 6/29/16.
 */
hrApp.controller('jobEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup','jobsService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup,jobsService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.job = {};
        };

        jobsService.findByAllJobs()
            .then(function (response) {
                $scope.jobs=response.data;
            }, function (error) {
                alert(error);
            });
        jobsService.findById($routeParams.jobId)
            .then(function (res) {
                $scope.job = res.data;
            }, function (err) {
                console.log("Error at job/findOne: " + err);
            });

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactoryBackup.editJobUrl, method: 'PUT', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);
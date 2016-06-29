/**
 * Created by Adrian.Calancea on 6/29/16.
 */
hrApp.controller('jobAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup','jobsService',
    function($scope, $http, $location, CommonResourcesFactoryBackup,jobsService) {
        $scope.job = {};

        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1


        jobsService.findByAllJobs()
            .then(function (response) {
                $scope.jobs=response.data;
            }, function (error) {
                alert(error);
            });


        /**
         * Reset form
         */
        $scope.reset = function () {
            this.job = {};
        };

        /**c
         * Persist an Job
         * @param addJob - Job to be persisted
         */
        $scope.create = function (addjob) {
            $http({url: CommonResourcesFactoryBackup.addJobUrl, method: 'POST', data: addjob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
    }]);
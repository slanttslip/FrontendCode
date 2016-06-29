/**
 * Created by Adrian.Calancea on 6/29/16.
 */
hrApp.controller('jobsListController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup','jobsService',
    function ($scope, $http, $location, CommonResourcesFactoryBackup,jobsService) {

        $scope.job = [];

        jobsService.findByAllJobs()
            .then(function (response) {
                $scope.Jobs=response.data;
            }, function (error) {
                alert(error);
            });
        $scope.reload=function(){
            jobsService.findByAllJobs()
                .then(function (response) {
                    $scope.Jobs=response.data;
                }, function (error) {
                    alert(error);
                });

        }


        $scope.viewJob = function (jobId) {
            $location.url('/jobView/' + jobId);
        };

        $scope.editJob = function(jobId) {
            $location.url('/jobEdit/' + jobId);
        };



        $scope.deleteJob = function(jobId) {
            $http({url: CommonResourcesFactoryBackup.deleteJobUrl+"/"+jobId, method: 'DELETE'})
                .success(function () {
$scope.reload();
                })
            .error(function (err) {
                return alert("Nu poti sterge nimic de pe Server");

            });
        };



    }]);
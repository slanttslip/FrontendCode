/**
 * Created by Adrian.Calancea on 6/29/16.
 */
hrApp.controller('jobViewController', ['$scope', '$http', '$routeParams', '$location', 'jobsService',
    function ($scope, $http, $routeParams, $location, jobsService) {

        /*
         $scope.employee = {
         "id": 100,
         "firstName": "Steven",
         "lastName": "King",
         "email": "SKING",
         "phoneNumber": "515.123.4567",
         "hireDate": "1987-06-17",
         "jobId": 1,
         "salary": 24000.00,
         "commissionPct": null,
         "managerId": null,
         "departmentId": 90
         };
         */

        // Handle a promise
        jobsService.findById($routeParams.jobId)
            .then(function (res) {
                $scope.job = res.data;
            }, function (err) {
                console.log("Error at Job/findOne: " + err);
            });

        $scope.back = function () {
            $location.url('/jobsList');
        }
    }]);
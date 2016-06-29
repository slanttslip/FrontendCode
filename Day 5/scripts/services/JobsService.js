/**
 * Created by Adrian.Calancea on 6/29/16.
 */

hrApp.service('jobsService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {

            findByAllJobs: function () {
                return $http.get(CommonResourcesFactoryBackup.findAllJobsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return alert(err);

                    });

            }

        }
    }]
);
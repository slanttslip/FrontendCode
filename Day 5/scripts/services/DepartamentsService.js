/**
 * Created by Adrian.Calancea on 6/29/16.
 */
hrApp.service('DepartamentsService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {

            findByAllDepartaments: function () {
                return $http.get(CommonResourcesFactoryBackup.findAllDepartmentsUrl)
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
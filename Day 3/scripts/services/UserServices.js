/**
 * Created by Adrian.Calancea on 6/27/16.
 */
var userList=[];
hrApp.service('UserServices', function () {
        return {
            Save: function (a) {
                userList=a;
            }
        }
    }
);
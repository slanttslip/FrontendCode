/**
 * Created by Adrian.Calancea on 6/28/16.
 */
hrApp.controller('ColorsController',['$scope',function ($scope) {
    $scope.colors = [
        {
            "text" : "muted",
            "class": "text-muted",
	      "type" : "strong"
},
    {
        "text" : "primary",
        "class": "text-primary",
        "type" : "strong"
    },
    {
        "text" : "success",
        "class": "text-success",
	      "type" : "strong"
    },
    {
        "text" : "info",
        "class": "text-info",
	      "type" : "boring"
    },
    {
        "text" : "warning",
        "class": "text-warning",
        "type" : "boring"
    },
    {
        "text" : "danger",
        "class": "text-danger",
        "type" : "boring"
    }
    ];
    $scope.myColor = $scope.colors[2];

    $scope.change=function () {
        $scope.var1=$scope.myColor2.class;
        console.log($scope.var1);

    };
    
   
}]);
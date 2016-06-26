/**
 * Created by Adrian.Calancea on 6/26/16.
 */
firstag.controller('MenuController',function ($scope) {
    $scope.Employeesoptions=[
        {
            label:"List Employees",
            url: "employees.html"
        },
        {
            label:"Add Employee",
            url: "../views/employees.html"
        },
        {
            label:"Delete Last Employee",
            url: "../views/employees.html"
        }
    ];
    });
/**
 * Created by Adrian.Calancea on 6/26/16.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '1902',
        salary: 1
    },
    {
        firstName: 'John',
        lastName: 'Gerard',
        phone: '1234',
        salary: 4
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '9921',
        salary: 2
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0000',
        salary: 3
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '8756',
        salary: 1
    }
];

firstag.controller('Emp',function ($scope) {
    $scope.EmployeesList=employeesList;
});
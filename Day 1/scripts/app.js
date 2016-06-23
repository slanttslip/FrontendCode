/**
 * Created by Adrian.Calancea on 6/23/16.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];
function showList() {
    var myTable = '<table border="1" class="table"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>VIEW</th><th>DELETE</th></tr>';
    for(var i in employeesList) {
        myTable += '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td><td><button onclick=View_element_slectat('+i+')>VIEW</button></td><td><button onclick=sterge_element_selectat('+i+')>DELETE</button></tr>';
    }
    myTable+='<tr><td>';
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}
function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;

    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
}


function TotalSalary() {
    var suma=0;
    for(var i in employeesList) {
suma+=employeesList[i].salary;
document.getElementById("salariu").innerHTML=suma;
    }
    
}

function sterge() {
   employeesList.pop();
    showList();

}

function sterge_element_selectat(a) {
    employeesList.splice(a,a+1);
    showList();
}
function View_element_slectat(a) {

    window.alert('"'+employeesList[a].firstName+'"');
}

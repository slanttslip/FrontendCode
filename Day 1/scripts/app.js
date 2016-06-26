/**
 * Created by Adrian.Calancea on 6/23/16.
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
function showList() {
    var myTable = '<table border="1" class="table"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>VIEW</th><th>DELETE</th></tr>';
    for(var i in employeesList) {
        myTable += '<tr id="'+i+'"><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td><td><button onclick=View_element_slectat('+i+')>VIEW</button></td><td><button onclick=sterge_element_selectat('+i+')>DELETE</button></tr>';
    }
    myTable+='<tr><td>'+Cel_mai_repetat_first_name()+'</td><td>'+numarul_de_nume_unice()+'</td><td>'+primele_5_cifre_ce_se_repeta_cel_mai_des()+'</td><td>'+Average()+'</td></tr>';
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


function TotalSalary() {<!-- Asta este utilizat pentru afisare de la click pe buton-->
    var suma=0;
    for(var i in employeesList) {
suma+=employeesList[i].salary;}
document.getElementById("salariu").innerHTML=suma;

}

function Total_Salary() {<!-- Asta este utilizat pentru functia de AVERAGE-->
    var suma=0;
    for(var i in employeesList) {
        suma+=employeesList[i].salary;
    }
return suma;
}

function sterge() {
   employeesList.pop();
    showList();


}

function sterge_element_selectat(a) {
    employeesList.splice(a,1);
    showList();

}
function View_element_slectat(a) {

    window.alert('"'+employeesList[a].firstName+'"');
}
function Average(){
   var x=employeesList.length;
    return Total_Salary()/x;
}
function Cel_mai_repetat_first_name(){

    var n=employeesList.length;
    if(n>0){
var count=[];
    var i,j;
    var k;
    var numele_repetat;

    for (var i in employeesList) {k=0;
        for (var j in employeesList){
if(employeesList[i].firstName==employeesList[j].firstName)k++;}
    count[i]=k;}

    var max = 0;
    var i_max;
    for (var c in count) {
        if(count[c]>max){max =count[c]; i_max=c;}

    }
    numele_repetat=employeesList[i_max].firstName;
}
    else numele_repetat=" ";
    return numele_repetat;
}

function numarul_de_nume_unice(){
    var count=[];
    var n=employeesList.length;
    var i,j;
    var k;
    for(i=0;i<n;i++) {k=0;
        for(j=0;j<n;j++){
            if(employeesList[i].lastName==employeesList[j].lastName)k++;}
        count[i]=k;}

    var max = 0;
    var i_max=0;
    for (var c in count) {
        if(count[c]==1){i_max++;}

    }
    return i_max;
}



function primele_5_cifre_ce_se_repeta_cel_mai_des(){
    var clon=[];
    var clon1=[];
    var count=[];
    var cinci=[];

    var i,j;
    var k;

    for (var i in employeesList) {
clon+=employeesList[i].phone;
    }

    var n1=clon.length;
    if(n1>0) {
        clon1 = clon.split("");
        clon1.sort();
        var n = clon1.length;
        for (var i = 0; i < n; i++) {
            k = 0;
            for (var j = i; j < n; j++) {
                if (clon1[i] == clon1[j] && clon1[i] != clon1[i - 1])k++;
            }
            count[i] = k;
        }

        var max = 0;
        var max_i;
        for (var j = 0; j < 5; j++) {
            max_i = 0;
            max = 0;
            for (var i = 0; i < n; i++) {
                if (count[i] > max) {
                    max = count[i];
                    max_i = i;
                }
            }
            cinci.push(clon1[max_i]);
            count.splice(max_i, 1);
            clon1.splice(max_i, 1);

        }

    cinci.toString();
    return  cinci; }
else return " ";}

function SORT(a) {
    if(a==1) {

        employeesList.sort(function (a, b) {
            var x=a.firstName.toLowerCase();
                var y=b.firstName.toLowerCase();
            if(x<y) return -1;
            else if(x>y) return 1;
            else return 0;

        });


    }
    if(a==2) {

        employeesList.sort(function (a, b) {
            var x=a.lastName.toLowerCase();
            var y=b.lastName.toLowerCase();
            if(x<y) return -1;
            else if(x>y) return 1;
            else return 0;

        });


    }
    if(a==3) {

        employeesList.sort(function (a, b) {
            var x=a.phone;
            var y=b.phone;
            if(x<y) return -1;
            else if(x>y) return 1;
            else return 0;

        });


    }
    if(a==4) {

    employeesList.sort(function (a, b) {
        return a.salary - b.salary;
    });


    }

    showList();


}
//Aici facem al 1-a metoda de filtrare
function FILTER(a) {
    var dublicat=employeesList.slice(0);
var detaiat=[];
var k=0;
    for(var j=0;j<dublicat.length;j++) {
        for (var i in dublicat) {
            if (dublicat[i].firstName.toString() != a.toString() && dublicat[i].lastName.toString() != a.toString() && dublicat[i].phone.toString() != a.toString() && dublicat[i].salary.toString() != a.toString()) {
                dublicat.splice(i, 1);
j=0; break;
            }

        }
    }

    var myTable = '<table border="1" class="table"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>VIEW</th><th>DELETE</th></tr>';
    for(var i in dublicat) {
        myTable += '<tr id="'+i+'"><td>'+dublicat[i].firstName+'</td><td>'+dublicat[i].lastName+'</td><td>'+dublicat[i].phone+'</td><td>'+dublicat[i].salary+'</td><td><button onclick=View_element_slectat('+i+')>VIEW</button></td><td><button onclick=sterge_element_selectat('+i+')>DELETE</button></tr>';
    }
    myTable+='<tr><td>'+Cel_mai_repetat_first_name()+'</td><td>'+numarul_de_nume_unice()+'</td><td>'+primele_5_cifre_ce_se_repeta_cel_mai_des()+'</td><td>'+Average()+'</td></tr>';
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
    }


//Aici facem al 2-a metoda de filtare
function FILTER2(a) {

        for (var i in employeesList) {
            if (employeesList[i].firstName.toString() != a.toString() && employeesList[i].lastName.toString() != a.toString() && employeesList[i].phone.toString() != a.toString() && employeesList[i].salary.toString() != a.toString()) {
             document.getElementById(i).style.display="none";
            }

}}
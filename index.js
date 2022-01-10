const Employee = require('./lib/Employee');
const person = new Employee;
 person.getName()
    .then(person.getId)




// const inquirer = require('inquirer');








// const getInfo = function() {
//     return inquirer.
//     prompt([
//         {
//             input: 'text', 
//             name:'name', 
//             message: 'What is the employee name',
//         },
//         {
//             input: 'text', 
//             name:'id', 
//             message: 'What is the employee id',
//         },
//         {
//             input: 'text', 
//             name:'email', 
//             message: 'What is the employee email',
//         }
// ]);

// }

// getInfo()
//     .then(data => {
//         employee.name = data.name;
//         employee.id =data.id;
//         employee.email = data.email
//         console.log(employee.name)
//     })

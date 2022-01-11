const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const personelArray = [];

const getGeneralInfo = function(role = "Employee") {
   inquirer
      .prompt([
         {
            type:'text', 
            message:`What is the ${role}'s name?`, 
            name: 'name'
         },
         {
            type:'text', 
            message:`What is the ${role}'s id?`, 
            name: 'id'
         },
         {
            type:'text', 
            message:`What is the ${role}'s email?`, 
            name: 'email'
         }
      ])
      .then(data => {
         if (personelArray.length === 0) {
            let manager = new Manager;
            manager = data;
            inquirer.prompt ({
               type:'text', 
               message: `What is the manager's office number?`, 
               name:'officeNumber'
            })
            .then(result => {
               manager.officeNumber = result;
               personelArray.push(manager);
            })
         } else if (role === "Engineer") {
            let engineer = new Engineer;
            engineer = data;
            inquirer.prompt ({
               type:'text', 
               message: `What is the engineer's github username?`, 
               name:'github'
            })
            .then(result => {
               engineer.github = result;
               personelArray.push(engineer);
            })
         } else if (role === 'Intern') {
            let intern = new Intern;
            intern = data;
            inquirer.prompt ({
               type:'text', 
               message: `What is the intern's school name?`, 
               name:'school'
            })
            .then(result => {
               intern.school = result;
               personelArray.push(intern);
            })
         } else {
            let employee = new Employee;
            employee = data;
            personelArray.push(employee)
         }
         inquirer.prompt(
            {
               type:'list',
               name: 'choice', 
               message: `Would you like to add an intern or an Engineer?`,
               choices: ['Intern', 'Engineer', 'None']
         })
         .then(({choice}) => getGeneralInfo(choice)) 
      })
}

getGeneralInfo()











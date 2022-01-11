const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const personelArray = [];

const getGeneralInfo = function(role = "Manager") {
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
      console.log(role)
      if (role === 'Manager') {
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
            chooseNext();
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
            chooseNext();
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
            chooseNext();
         })
      } else {
         let employee = new Employee;
         employee = data;
         personelArray.push(employee)
         chooseNext();
      }
   })
}

function chooseNext () {
   inquirer
      .prompt({
         type:'confirm',
         name: 'confirmAnother',
         message: `Would you like to add another employee to your team?`
      })
      .then (({confirmAnother}) => {
         if (confirmAnother) {
            inquirer.
               prompt({
                  type:'list',
                  name: 'choice', 
                  message: `Would you like to add an intern or an Engineer or another employee?`,
                  choices: ['Intern', 'Engineer', 'Neither']
               })
               .then(({choice}) => {
                  console.log(choice)
                  if(choice === 'Neither') {
                     getGeneralInfo('Employee');
                  } else {
                     getGeneralInfo(choice);
                  }
               })
         } else {
            return console.log(personelArray);
         }
      })
}
  




getGeneralInfo()
   // .then(console.log(personelArray))












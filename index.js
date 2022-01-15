const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const generatePage = require('./src/generate-html');
const {writeFile, copyFile} = require('./src/write-file.js');
const inquirer = require('inquirer');
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
      let {name, id, email} = data;
      if (role === 'Manager') {
         let manager = new Manager(name, id, email);
         manager.getRole();
         inquirer.prompt ({
            type:'text', 
            message: `What is the manager's office number?`, 
            name:'officeNumber'
         })
         .then(({officeNumber}) => {
            manager.officeNumber = officeNumber;
            personelArray.push(manager);
            chooseNext();
         })
      } else if (role === "Engineer") {
         let engineer = new Engineer(name, id, email );
         engineer.getRole();
         inquirer.prompt ({
            type:'text', 
            message: `What is the engineer's github username?`, 
            name:'github'
         })
         .then(({github}) => {
            engineer.github = github;
            personelArray.push(engineer);
            chooseNext();
         })
      } else if (role === 'Intern') {
         let intern = new Intern(name, id, email);
         intern.getRole();
         inquirer.prompt ({
            type:'text', 
            message: `What is the intern's school name?`, 
            name:'school'
         })
         .then(({school}) => {
            intern.school = school;
            personelArray.push(intern);
            chooseNext();
         })
      } else {
         let employee = new Employee (name, id, email);
         employee.getRole();
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
                  if(choice === 'Neither') {
                     getGeneralInfo('Employee');
                  } else {
                     getGeneralInfo(choice);
                  }
               })
         } else {
             let page = generatePage(personelArray);
             writeFile(page)
               .then(({message}) => {
                  console.log(message);
                  return copyFile();
               })
               .then(({message}) => console.log(message))
         }
      })
}
   

getGeneralInfo()












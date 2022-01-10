const inquirer = require("inquirer");

class Employee {
    constructor(role = 'employee'){
        this.name = "",
        this.id = "",
        this.email = "",
        this.role = role
    }
    
    getName(role = 'employee') {
        inquirer
        .prompt({
          type: 'text',
          name: 'name',
          message: `what is the ${role}'s name`
        })
        .then(({ name }) => {
           return this.name = name;
        })
    }

    getId(role = 'employee') {
        inquirer
        .prompt({
          type: 'text',
          name: 'id',
          message: `what is the ${role}'s id?`
        })
        .then(({ id }) => {
           return this.id = id
        }); 
    }

    getEmail(role = 'employee') {
        inquirer
        .prompt({
          type: 'text',
          name: 'email',
          message: `what is the ${role}'s email?`
        })
        .then(({ email }) => {
           return this.email = email
        });
    }

    getRole() {
        return this.role = "Employee";
    }
}


module.exports = Employee;

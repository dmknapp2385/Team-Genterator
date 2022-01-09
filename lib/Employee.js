const inquirer = require("inquirer");

class Employee {
    constructor(){
        this.name = "";
        this.id = "";
        this.email = "";
    }
    
    getName() {
        inquirer
        .prompt({
          type: 'text',
          name: 'name',
          message: "What is the Employee's name?"
        })
        .then(({ name }) => {
          this.name = name;
        })
    }

    getId() {
        inquirer
        .prompt({
          type: 'text',
          name: 'id',
          message: "What is the Employee's ID?"
        })
        .then(({ id }) => {
          this.id = id;
        }); 
    }

    getEmail() {
        inquirer
        .prompt({
          type: 'text',
          name: 'email',
          message: "What is the Employee's name?"
        })
        .then(({ email }) => {
          this.email = email;
        });
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;

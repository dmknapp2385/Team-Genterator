const { prompt } = require("inquirer");
const inquirer = require("inquirer");

class Employee {
    constructor() {
        this.name = "";
        this.id = "";
        this.email = "";
    }
    
    getName() {
        inquirer
            .prompt({
                type: 'text', 
                message:`What is the employee's name?`, 
                name: 'name', 
            })
            .then(({name}) => {
                return this.name = name;
            })
    }

    getId() {
        inquirer
            .prompt({
                type: 'text', 
                message:`What is the employee's id?`, 
                name: 'id', 
            })
            .then(({id}) => {
                return this.id = id;
            })
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role = "Employee";
    }
}

module.exports = Employee;

const { prompt } = require("inquirer");
const inquirer = require("inquirer");

class Employee {
    constructor() {
        this.name = "";
        this.id = "";
        this.email = "";
    }
    
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role = "Employee";
    }
}

module.exports = Employee;

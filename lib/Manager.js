const Employee = require('./Employee');

class Manager extends Employee {
    constructor() {
        super();
        this.officeNumber = '';
    }

    getRole() {
        return this.role = "Manager"
    }
}

manager = new Manager;
manager.getRole();
console.log(manager.role)

module.exports = Manager;
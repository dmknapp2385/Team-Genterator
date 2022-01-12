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


module.exports = Manager;
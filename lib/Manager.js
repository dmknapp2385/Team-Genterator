const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.officeNumber = '';
    }

    getRole() {
        return this.role = "Manager"
    }
}


module.exports = Manager;
const Employee = require('./Employee');

class Manager extends Employee {
    constructor() {
        super("Manager");
        this.propery = '';
    }
}

module.exports = Manager;
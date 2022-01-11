const Employee = require('./Employee');

class Intern extends Employee {
    constructor() {
        super("Intern");
        this.propery = '';
    }
}

module.exports = Intern;
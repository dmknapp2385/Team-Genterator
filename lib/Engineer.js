const Employee = require('./Employee');

class Engineer extends Employee {
    constructor() {
        super("Engineer");
        this.propery = '';
    }
}

module.exports = Engineer;
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name,id,email) {
        super(name, id, email);
        this.school = '';
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role = "Intern"
    }
}

module.exports = Intern;
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.github = '';
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return this.role = "Engineer";
    }
}

module.exports = Engineer;
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor() {
        super();
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
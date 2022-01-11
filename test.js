class Employee {
    constructor() {
        this.name = "";
        this.id = "";
        this.email = "";
    }
    
    getName() {
        return this.name;
    }
}

let myObj = {
    name: 'Elle',
    id: '30',
    email: "something"
}

let me = new Employee

console.log(me)

me = myObj

console.log(me)
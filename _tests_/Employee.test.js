const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');


test( 'employee object created', () => {
    const employee = new Employee ('dave', '2353', 'email');
    expect(employee.name).toEqual('dave');
    expect(employee.id).toEqual('2353');
    expect(employee.email).toEqual('email');
    expect(employee.getName()).toEqual('dave')
    expect(employee.getId()).toEqual('2353')
    expect(employee.getEmail()).toEqual('email');
    expect(employee.getRole()).toEqual("Employee");
});
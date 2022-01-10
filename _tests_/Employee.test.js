const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee.js');


test('employee object created', () => {
    const employee = new Employee();
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
    expect(employee.getName()).toEqual(expect.any(String))
    expect(employee.getId()).toEqual(expect.any(String))
    expect(employee.getEmail()).toEqual(expect.any(String))
    expect(employee.getRole()).toEqual(expect.any(String))
});

const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

console.log(new Employee);

test('employee object created', () => {
    const employee = new Employee;
    expect(employee.name).toBe('John');
    expect(employee.id).toBe(2354);
    expect(employee.email).toBe("jdoe@gmail.com");
});
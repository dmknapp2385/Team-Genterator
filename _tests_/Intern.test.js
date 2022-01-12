const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern.js');


test('intern object created', () => {
    const intern = new Intern('dave', '2353', 'email');
    expect(intern.name).toEqual('dave');
    expect(intern.id).toEqual('2353');
    expect(intern.email).toEqual('email');
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getName()).toEqual('dave')
    expect(intern.getId()).toEqual('2353')
    expect(intern.getEmail()).toEqual('email');
    expect(intern.getRole()).toEqual("Intern");
});
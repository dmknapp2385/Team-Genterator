const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern.js');


test('intern object created', () => {
    const intern = new Intern();
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.getName()).toEqual(expect.any(String))
    expect(intern.getId()).toEqual(expect.any(String))
    expect(intern.getEmail()).toEqual(expect.any(String))
    expect(intern.getRole()).toEqual("Intern")
});
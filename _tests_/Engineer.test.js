const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer.js');


test('engineer object created', () => {
    const engineer = new Engineer();
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.getName()).toEqual(expect.any(String))
    expect(engineer.getId()).toEqual(expect.any(String))
    expect(engineer.getEmail()).toEqual(expect.any(String))
    expect(engineer.getRole()).toEqual("Engineer")
});

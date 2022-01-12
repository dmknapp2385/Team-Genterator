const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer.js');


test('engineer object created', () => {
    const engineer = new Engineer('dave', '2353', 'email');
    expect(engineer.name).toEqual('dave');
    expect(engineer.id).toEqual('2353');
    expect(engineer.email).toEqual('email');
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getName()).toEqual('dave')
    expect(engineer.getId()).toEqual('2353')
    expect(engineer.getEmail()).toEqual('email');
    expect(engineer.getRole()).toEqual("Engineer");
});
const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager.js');


test('manager object created', () => {
    const manager = new Manager('dave', '2353', 'email');
    expect(manager.name).toEqual('dave');
    expect(manager.id).toEqual('2353');
    expect(manager.email).toEqual('email');
    expect(manager.officeNumber).toEqual(expect.any(String));
    expect(manager.getName()).toEqual('dave')
    expect(manager.getId()).toEqual('2353')
    expect(manager.getEmail()).toEqual('email');
    expect(manager.getRole()).toEqual("Manager");
});
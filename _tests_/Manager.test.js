const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager.js');


test('manager object created', () => {
    const manager = new Manager();
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.getName()).toEqual(expect.any(String))
    expect(manager.getId()).toEqual(expect.any(String))
    expect(manager.getEmail()).toEqual(expect.any(String))
    expect(manager.getRole()).toEqual("Manager")
});
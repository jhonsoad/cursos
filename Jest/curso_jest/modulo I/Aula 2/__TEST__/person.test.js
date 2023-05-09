const Person = require('../person');

var paulo = new Person("Paulo Gilberto da Silva", "paulogilberto@gmail.com", new Date(1980, 5, 12))

var objTest = new Person("Paulo Gilberto da Silva", "paulogilberto@gmail.com", new Date(1980, 5, 12))

test("should check if the properties of paulo equal the properties of object test", () => {
    expect(paulo).toEqual(objTest);
})

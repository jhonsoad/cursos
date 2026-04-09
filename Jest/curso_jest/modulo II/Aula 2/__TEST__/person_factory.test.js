const {Client, Employee} = require("../person")
const PersonFactory = require('../person_factory');

var factory = new PersonFactory()

describe("Factory of Persons", ()=>{
    test("passed a string with the client value, it should return a new client object", ()=> {
        expect(factory.getPerson("Client")).toBeInstanceOf(Client)
    })
    test("passed a string with the employee value, it should return a new employee object", ()=> {
        expect(factory.getPerson("Employee")).toBeInstanceOf(Employee)
    })
})
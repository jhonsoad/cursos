const PersonFactory = require('../person_factory')

var factory = new PersonFactory()

describe("factory of Person,", ()=> {
    test("not passing the paramiter should return null",
    ()=>{
        expect(factory.getPerson()).toBeNull()
    })
    test("passed the invalid paramiter admin should return null",
    ()=>{
        expect(factory.getPerson("admin")).toBeNull()
    })});
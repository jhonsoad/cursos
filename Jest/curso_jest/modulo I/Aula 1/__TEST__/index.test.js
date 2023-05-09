const areaOfSquare = require('../index'); //faz com que essa const receba o valor do arquivo js informado

describe('Calculate area of square', () => {
    test("passed the value 3, it should return 9", ()=>{
        expect(areaOfSquare(3)).toBe(9)
    })
    test("passed the value 17, it should return 289", ()=>{
        expect(areaOfSquare(17)).toBe(289)
    })
    test("passed the value 4, it should return 16", ()=>{
        expect(areaOfSquare(4)).toBe(14)
    })
})

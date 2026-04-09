const Product = require('../Product');

describe("Test on product information", ()=> {
    var product = new Product()
    product.description = "Biscoito Trakinas"

    test("should return that the stock property is undefined", ()=> {
        expect(product.stock).toBeUndefined()
    });

    test("should return that the description is defined", ()=> {
        expect(product.description).toBeDefined()
    });
})
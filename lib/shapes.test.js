// create a variable of all the shapes and use require to import the shape classes and defines it as a test suite
// create 3 tests (circle, square, triangle)
// each test should have a function and a callback function > arrange step (const) > act step (const) > assert step (expect)

const { Circle, Square, Triangle } = require("./shapes")

describe('Circle', () => {
    test('makes sure the the circle renders properly', () => {
        const testShape = new Circle();
        var testColor = ('purple')
        testShape.setColor(testColor);
        expect(testShape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" stroke="black" stroke-width="3" fill="${testColor}" />`);
    });
});


describe('Square', () => {
    test('makes sure the the square renders properly', () => {
        const testShape = new Square();
        var testColor = ('red')
        testShape.setColor(testColor);
        expect(testShape.render()).toEqual(`<rect  x="50" height="200" width="200" fill="${testColor}"/>`);
    });
});


describe('Triangle', () => {
    test('makes sure the the triangle renders properly', () => {
        const testShape = new Triangle();
        var testColor = ('white')
        testShape.setColor(testColor);
        expect(testShape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${testColor}" />`);
    });
});

module.exports = { Circle, Square, Triangle }
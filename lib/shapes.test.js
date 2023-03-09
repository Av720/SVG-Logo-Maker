// create a variable of all the shapes and use require to import the shape classes and defines it as a test suite
// create 3 tests (circle, square, triangle)
// each test should have a function and a callback function > arrange step (const) > act step (const) > assert step (expect)

const { Circle, Square, Triangle } = require("./shapes")

describe('Circle', () => {
    test('makes sure the the circle renders properly', () => {
        const testShape = new Circle();
        var testColor = ('purple')
        testShape.setColor(testColor);
        expect(testShape.render()).toEqual(`<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${testColor}" />`);
    });
});


describe('Square', () => {
    test('makes sure the the square renders properly', () => {
        const testShape = new Square();
        var testColor = ('red')
        testShape.setColor(testColor);
        expect(testShape.render()).toEqual(`<rect width="200" height="200" fill="${testColor}"/>`);
    });
});


describe('Triangle', () => {
    test('makes sure the the triangle renders properly', () => {
        const testShape = new Triangle();
        var testColor = ('white')
        testShape.setColor(testColor);
        expect(testShape.render()).toEqual(`<polygon points="200,10 250,190 160,210" fill="${testColor}" />`);
    });
});

module.exports = { Circle, Square, Triangle }
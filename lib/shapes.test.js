// create a variable of all the shapes and use require to import the shape classes and defines it as a test suite
// create 3 tests (circle, square, triangle)
// each test should have a function and a callback function > arrange step (const) > act step (const) > assert step (expect)

const { Circle, Square, Triangle } = require("./shapes")

describe('Circle', () => {
    test('should render svg for a green circle', () => {

        //arrange
        const createdSvg = '<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="green" />'
        
        //act 
        const shape = new Circle();
        shape.setColor('green');
        const finishSvg = circle.render();

        //assert
        expect(finishSvg).toEqual(createdSvg);
    });
});


describe('Square', () => {
    test('should render svg for a green circle', () => {

        //arrange
        var createdSvg = '<rect x="50" height="200" width="200"'

        //act 
        const shape = new Circle();
        shape.setColor('green');
        const finishSvg = circle.render();

        //assert
        expect(finishSvg).toEqual(createdSvg);
    });
});



describe('Triangle', () => {
    test('should render svg for a green circle', () => {

        //arrange
        var createdSvg = '<polygon height="100%" width="100%" points="0,200 300,200 150,0"'

        //act 
        const shape = new Circle();
        shape.setColor('green');
        const finishSvg = circle.render();

        //assert
        expect(finishSvg).toEqual(createdSvg);
    });
});

module.exports = { Circle, Square, Triangle }
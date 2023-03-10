// create a variable for the filesystem  and use require
// create a varibale for inquirer and use require
//create a variable for the shapes
// create a class for the SVG file

// const mainFile = require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require("inquirer");
const { Square, Triangle, Circle } = require("./lib/shapes");
const fs = require("fs");
const { writeFileSync } = require("fs");

class Svg {
    constructor() {
        this.text = "";
        this.shape = "";
    }

    async render() {
        return `<svg  width="300" height="200"> 
      ${this.shape}
      ${this.text}
      </svg>`;
    }

    setText(text, color) {
        this.text = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShape(shape) {
        this.shape = shape.render();
    }
}

// create 4 questions for the user prompt
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter a text up to (3) characters:",
    },
    {
        type: "input",
        name: "txt-color",
        message: "Enter a text color for your logo: ",
    },
    {
        type: "input",
        name: "shape-color",
        message: "Enter a shape color for your logo:  ",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape for your logo: ",
        choices: ["Circle", "Square", "Triangle"],
    },
];

function writeToFile(fileName, data) {
    // console.log(fileName)
    // console.log(data)
    writeFileSync(fileName, data);
}

async function init() {
    console.log("Starting init");
    var mainstring = "";
    const svgFile = "logo.svg";

    // Prompt the user for answers
    const userAnswers = await inquirer.prompt(questions);

    //   console.log(userAnswers);

    // Beginning of if and else statement

    // create a variable to store the users text input
    //   const userTextInput = "";
    //     const textColorInput = "";
    //     const shapeInput = "";
    //     const shapeColor = "";


    var userTextInput = "";

    // this if else statement will validate the user input for characters size
    if (userAnswers.text.length > 0 && userAnswers.text.length < 4) {

        userTextInput = userAnswers.text;

        console.log(userTextInput);

    } else {
        console.log("Please try again and enter up to 3 characters only! ");

        return;
    }
    // console.log(userTextInput) // this will log the users text input 

    // create a variable to store the users text color input
    var textColorInput = userAnswers["txt-color"];
    console.log(textColorInput);

    //create a varibale for the shape type input 
    var userShapeType = userAnswers["shape"]
    console.log(userShapeType);

    // create a variable for the shape color input 
    var userShapeColor = userAnswers["shape-color"]
    console.log(userShapeColor)

    //if and else statement for the user shape type 
    let mainShape;

    if (userShapeType === "Square") {
        mainShape = new Square();
    } else if (userShapeType === "Circle") {
        mainShape = new Circle();
    } else if (userShapeType === "Triangle") {
        mainShape = new Triangle();
    } else {

    }

    mainShape.setColor(userShapeColor)

    //adding shape to the svg class
    var svg = new Svg();

    svg.setText(userTextInput, textColorInput);
    svg.setShape(mainShape)
    mainstring = await svg.render()
    console.log(mainstring)

    console.log(mainstring.toString())

    writeToFile(svgFile, mainstring.toString())

}

// Function call to initialize app
init();
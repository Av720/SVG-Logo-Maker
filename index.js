// create a variable for the filesystem  and use require
// create a varibale for inquirer and use require
//create a variable for the shapes
// create a class for the SVG file

const mainFile = require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require('inquirer');
const { Square, Triangle, Circle } = require("./lib/shapes");
const fs = require('fs')
// const { writeFile } = require("fs").promises

class Svg {
  constructor() {
    this.text = "";
    this.shape = "";
  }
  render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" </svg>`
    }

    setText(text, color) {
        this.text = `<text x="200" y="200" font-size="40" text-anchor="middle" fill="${color}">${text}</text>`
}

    setShape(shape) { 
        this.shape = shape.render()
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
        name: "color",
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

    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success! you have generated a logo!");
    });
}

async function init() {

        console.log("Starting init");
        const mainstring = "";
        const svgFile = "logo.svg";

        // Prompt the user for answers
        const userAnswers = await inquirer.prompt(questions);

console.log(userAnswers);

    
    }
    

// Function call to initialize app
init();
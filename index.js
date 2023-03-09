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
  render() {
    return `<svg  width="300" height="200"> 
      ${this.shape}
      ${this.text}
      </svg>`;
  }

  setText(text, color) {
    this.text = `<text x="200" y="200" font-size="40" text-anchor="middle" fill="${color}">${text}</text>`;
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
  writeFileSync(fileName, data);
}

async function init() {
  console.log("Starting init");
  const mainstring = "";
  const svgFile = "logo.svg";

  // Prompt the user for answers
  const userAnswers = await inquirer.prompt(questions);

  console.log(userAnswers);

  // if and else statement
  // if shape pick > text color, shape color, insert

  // text if and else statement
// create a variable to store the users text input 
    
  const userTextInput = "";

  if (userAnswers.text.length > 0 && userAnswers.text.length < 4) {
    userTextInput = userAnswers.text;
  } else {
    console.log("Please try again and enter up to 3 characters only! ");
  }

  return;
}

// Function call to initialize app
init();

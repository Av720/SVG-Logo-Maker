// create a variable for the filesystem  and use require
// create a varibale for inquirer and use require
//create a variable for the shapes
// create a class for the SVG file

const mainFile = require();
const inquirer = require("inquirer");
const { Square, Triangle, Circle } = require("./lib/shapes");

class Svg {
  constructor() {
    this.text = "";
    this.shape = "";
  }
  render() {
    return ``
    }
    
// 




}

const questions = [
    {
        type: "input",
        name: "text",
        message: ":",
    },
    {
        type: "input",
        name: "text-color",
        message: ":",
    },
    {
        type: "input",
        name: "shape",
        message: ":",
    },
    {
        type: "list",
        name: "shape",
        message: "",
        choices: ["Circle", "Square", "Triangle"],
    },
];
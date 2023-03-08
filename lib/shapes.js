// create a class called "Shape" > define it
// create 3 classes (1. Circle)(2. Square)(3. Triangle) > each class will have to be rendered and the return will consist of the styling of the shape ex. (height 100%, width 100%  > and color will be set by the user input)
// export the module (module.exports = {shapes})

class shape {

    constructor() {
    this.color= ''
}

    setColor(color) {
        this.color = (color);

    }

}

class Circle extends shape {
    render() {
        return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}" />`
    }
}



class Square extends shape {
    render() {
        return `<rect width="200" height="200" fill="${this.color}"/>`
    }
}



class Triangle extends shape {
    render() {
        return `<polygon points="200,10 250,190 160,210" fill="${this.color}" />`
    }
}

module.exports = {Circle, Square, Triangle}


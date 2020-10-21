'use strict'

// class: template
// object: instance of a class

// 1. class declarations 
class person{
    constructor(name, age) { //constructor 생성자
        // fields
        this.name = name; 
        this.age = age;
    }
    speak() {
        // methods
        console.log(`${this.name}: hello`);
    }
}

const ellie = new person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter setter

class User { 
    constructor(firstName, lastName, age){ //constructor 생성자
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        this._age = value;
        // if(value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('steve', 'Job', -1);
console.log(user1.age);

// 3. Fields(public , private)
class Experiment{
    publicField=2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4.static properties and methods
class Article { 
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1); // object
const article2 = new Article(2); // object
console.log(Article.publisher); //static - class 자체에 붙어있어서 사용가능
Article.printPublisher();

// 5. Inheritance
class Shape{
    constructor(width, height , color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() { 
        console.log(`drawing ${this.color} color!`);
    }

    getArea() { 
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw() { 
        super.draw();  //부모의 draw 메서드도 출력
        console.log('ㅅ');
    }
    getArea(){
        return (this.width * this.height) / 2;
    }

    toString() { 
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. class checking : instanceof
console.log(rectangle instanceof Rectangle); //t
console.log(triangle instanceof Rectangle); //f 
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); //t
console.log(triangle instanceof Object); //t  Object에 ctrl+클릭
console.log(triangle.toString());
"use strict";
let id = 10;
console.log(id);
let restaurant = "Pizza Express";
console.log(restaurant);
let ids = [1, 2, 3, 4, 5];
console.log(ids);
let arr = [1, "John", true];
//tuple have more than one data type
let person = [1, "John", true];
//union
let pid = 22;
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Down);
//objects
const user = {
    id: 1,
    name: "John"
};
//type assertion
let cid = 1;
let customerId = cid;
// customerId = true; this will throw an error
customerId = 10;
//functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
log(10);
log("Hello");
//then use it like this
const user1 = {
    id: 1,
    name: "John"
};
//classes
class Person {
    //constructor will run when the class is instantiated
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const john = new Person(1, "John"); //going to run the constructor when instantiated
console.log(john.register());
console.log(john);
//class extends
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Bob', 'developer');
console.log(emp.name);
console.log(emp.register());

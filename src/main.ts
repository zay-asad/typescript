let id: number = 10;
console.log(id);

let restaurant: string = "Pizza Express";
console.log(restaurant);

let ids: number[] = [1, 2, 3, 4, 5];
console.log(ids);

let arr: any[] = [1, "John", true];


//tuple have more than one data type
let person: [number, string, boolean] = [1, "John", true];

//union
let pid: string | number = 22;

//enum
enum Direction1 {
    Up = 1,
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction1.Up);
console.log(Direction1.Down);


//objects
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: "John"
}

//type assertion
let cid: any = 1;
let customerId = cid as number; 
// customerId = true; this will throw an error
customerId = 10;


//functions
function addNum(x: number, y: number): number {
    return x + y;
}

console.log(addNum(1, 2));


function log(message: string | number): void {
    console.log(message);
}

log(10);
log("Hello");

//interfaces
interface PersonInterface {
    id: number,
    name: string
    age?: number //optional property so it won't throw an error
    register?(): string;
}

//then use it like this
const user1: PersonInterface = {
    id: 1,
    name: "John"
}

//classes
class Person implements PersonInterface {
    id: number;
    name: string;

    //constructor will run when the class is instantiated
    constructor(id: number, name: string) {
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


//subclasses
class Employee extends Person {
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(3,'Bob', 'plumber');
console.log(emp.name);
console.log(emp.register())

//generics - reusable components
function getArray<T>(items: T[]) : T[]{
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['John', 'Tom']);

// numArray.push('hello'); //this will throw an error
numArray.push(30); //this will work because it's a number
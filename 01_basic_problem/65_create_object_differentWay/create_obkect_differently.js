// Q: Write a #JavaScript Program to Create Objects in Different Ways.

function createObjectDifferently(name,age,work){
  return {
    name:name,
    age:age,
    work:work
  }
}

class Employee{
    constructor(name,age,work){
        this.name = name;
        this.age = age;
        this.work = work;
    }

    describe(){
        return `Name: ${this.name}, Age: ${this.age}, Work: ${this.work}`;
    }
}

const proto = {
    greet:function(){
        console.log(`hello my name is ${this.name}`);
    }
}

const objCreate = Object.create(proto)
objCreate.name = "John Doe"
objCreate.age = 13
objCreate.work = "dj"

console.log(objCreate);
objCreate.greet()

const objConstructor = new Object()
objConstructor.name = "suraj"
objConstructor.age = 40
objConstructor.work = "joker"

console.log(objConstructor);

const emp1 = new Employee("john",30,"engineer")
const obj1Res = createObjectDifferently("manoj",43,"ranger")



console.log(emp1);
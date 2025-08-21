// object 
// person : name , age , sex , major , skill[] , coding() , isSingle

const person = {
    name  : "Mason Json", // string
    age   : 28, // number
    sex   : "male",
    major : "Back-end developer",
    skill : ['php','laravel','express.js','nodejs','flask'], // array
    coding(){
        console.log("Coding time . . .") // method
    },
    isSingle : true // boolean
}

console.log(`Name   : ${person.name}`); // object.key
console.log(`Age    : ${person.age}`);
console.log(`Sex    : ${person.sex}`);
console.log(`Major  : ${person.major}`);
console.log(`Skill  : ${person.skill[2]}`); // array[0]
console.log(person.coding());
console.log(`Single : ${person.isSingle}`);

// practice : create object Phone{name , model , color , size[] , gaming() , isIOS , price}
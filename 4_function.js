// none return type function with no parameter

const myName = "Hong Somonor";

function Greeting() {
  console.log(`Welcome Mr.${myName}`);
}
Greeting();

// return type function with parameter

function Sum(num1, num2) {
  sum = num1 + num2;
  return sum;
}
console.log(Sum(4, 20));

// arrow function

Hello = () => {
    console.log("Hello Brother");
};
Hello()

// Multi = (a,b) => {
//     return a + b;
// }
Multi = (a,b) => a + b;
console.log(`A + B : ${Multi(2,3)}`);

test = r =>  r + 10;
console.log(`R : ${test(10)}`);

// Practice : create return type function with parameter for + , - , * and / 
// use arrow function
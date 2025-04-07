
console.warn(`this is a warning`);
console.error(`this is an error`);

const pi=3.14;
console.log(`pi is ${pi}`);

let a=10;
console.log(a);

let isValid=false;
let fullName="John Doe";
let salary=40000;

let num1=2
num1+=3
console.log(num1)

console.log(num1++)
console.log(++num1)

let flag1=true
let flag2=false

console.log((flag1!=flag2) || (2==3))
console.log((flag1!=flag2) && (2==3))

if(5>3){
    console.log("5 is greater than 3")
}
    else if(5<3){
        console.log("5 is less than 3")
    }
        else {
            console.log("5 is equal to 3")
        }
    
let sum=0
for(let i=1;i<=10;i++){
    sum+=i
}
console.log(sum)

let student={
    name:"hari",
    age:20,
    hobby:"reading",

}
console.log(student.name)


function greet () {
    alert("Hello World")
}
greet()

function add(a,b){
    return a+b
}
let result=add(5,10)
console.log(result)

//arrow function
let diff=(a,b)=>{
    return a-b
}
let output=diff(10,5)
console.log(output)

//arrays
const season=['winter','spring','summer','rainy']
console.log(season[3])

for(let i=0;i<3;i++){
    console.log(season[i])
}
season.forEach((item) => console.log(item))

let numbers=[10,20,30,40,50]
let doubleNumbers=numbers.map((item) => item*2)
console.log(doubleNumbers)
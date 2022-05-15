console.log("Your code goes here!");

function add(n1:number, n2:number, showResult:boolean,phrase:string) {

    const result=n1+n2;
    if (showResult) { 
        console.log(phrase+n1 + n2);
        console.log(phrase+result);
        // if we add a string with numbers, then everything will be concatenated
     }
    return n1 + n2;
}
const printResult = true;
const resultPhrase="Result is: ";
console.log(add(1, 2.5, printResult,resultPhrase));


// Objects
// const person:{
//     name:string;
//     age:number
// }
const person:{
    name:string, 
    age: number,
    hobbies:string[],
    role:[number,string]}={
    // this is a ts notation of a specialised object type {}==object
    name:"Deepak Verma",
    age:30,
    hobbies:["Gaming","Coding","Reading"],
    role: [2, "Gamer"],
    // role is of type tuple
};

// person.role.push("Admin"); it is an exception coz ts can't identify this error.
// person.role[1]=10; this doesn't work coz 10 is a number
// above in two cases ts didn't verified that the role is of type tuple and it should store only two elements
let activity:string[];

// let activity:any[];
// "any" is a type that can be anything
activity=["Gaming","Coding","Reading"];
console.log(person);
console.log(person.name);
console.log(person.hobbies[1]);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
};
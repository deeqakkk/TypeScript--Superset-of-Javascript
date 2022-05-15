console.log("Your code goes here!");
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + n1 + n2);
        console.log(phrase + result);
        // if we add a string with numbers, then everything will be concatenated
    }
    return n1 + n2;
}
var printResult = true;
var resultPhrase = "Result is: ";
console.log(add(1, 2.5, printResult, resultPhrase));
// Objects
// const person:{
//     name:string;
//     age:number
// }
var person = {
    // this is a ts notation of a specialised object type {}==object
    name: "Deepak Verma",
    age: 30,
    hobbies: ["Gaming", "Coding", "Reading"],
    role: [2, "Gamer"]
};
// person.role.push("Admin"); it is an exception coz ts can't identify this error.
// person.role[1]=10; this doesn't work coz 10 is a number
// above in two cases ts didn't verified that the role is of type tuple and it should store only two elements
var activity;
// let activity:any[];
// "any" is a type that can be anything
activity = ["Gaming", "Coding", "Reading"];
console.log(person);
console.log(person.name);
console.log(person.hobbies[1]);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// UNION TYPES
// let count:number|boolean;
function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAGes = combine(30, 26);
console.log(combinedAGes);
var combinedNames = combine("Deepak", "Verma");
console.log(combinedNames);

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
var person = {
    name: "Deepak Verma",
    age: 30
};
console.log(person);
console.log(person.nickname);

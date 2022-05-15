var button = document.querySelector('button');
var input1 = document.getElementById("num1");
// here we told ts that num1 will be available for sure and that it will be of type HTMLInputElement
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});

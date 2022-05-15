
const button = document.querySelector('button');
const input1 = document.getElementById("num1")! as HTMLInputElement;
// here we told ts that num1 will be available for sure and that it will be of type HTMLInputElement
const input2 = document.getElementById("num2")! as HTMLInputElement;
function add(num1: number, num2: number) {
    return num1 + num2;
}

button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
})



const button7 = document.getElementById("button1");
const button8 = document.getElementById("button2");
const button9 = document.getElementById("button3");
const buttonDiv = document.getElementById("button4");
const button4 = document.getElementById("button5");
const button5 = document.getElementById("button6");
const button6 = document.getElementById("button7");
const buttonMult = document.getElementById("button8");
const button1 = document.getElementById("button9");
const button2 = document.getElementById("button10");
const button3 = document.getElementById("button11");
const buttonSub = document.getElementById("button12");
const button0 = document.getElementById("button13");
const buttonDec = document.getElementById("button14");
const buttonAdd = document.getElementById("button15");
const buttonEquals = document.getElementById("button16");

const textSpace = document.getElementById("text-area");
const resetButton = document.getElementById("reset-button");

let currentString = "";
let currentValue = 0;
let currentValues = [];

resetButton.addEventListener("click", () => {
    currentString = "";
    textSpace.innerText = "";
});

button7.addEventListener("click", () => {
    currentString += "7";
    currentValues.push(7);
    textSpace.innerText = currentString;
});

button8.addEventListener("click", () => {
    currentString += "8";
    currentValues.push(8);
    textSpace.innerText = currentString;
});

button9.addEventListener("click", () => {
    currentString += "9";
    currentValues.push(9);
    textSpace.innerText = currentString;
});

buttonDiv.addEventListener("click", () => {
    currentString += "/";
    currentValues.push('/');
    textSpace.innerText = currentString;
});

button4.addEventListener("click", () => {
    currentString += "4";
    currentValues.push(4);
    textSpace.innerText = currentString;
});

button5.addEventListener("click", () => {
    currentString += "5";
    currentValues.push(5);
    textSpace.innerText = currentString;
});

button6.addEventListener("click", () => {
    currentString += "6";
    currentValues.push(6);
    textSpace.innerText = currentString;
});

buttonMult.addEventListener("click", () => {
    currentString += "*";
    currentValues.push('*');
    textSpace.innerText = currentString;
});

button1.addEventListener("click", () => {
    currentString += "1";
    currentValues.push(1);
    textSpace.innerText = currentString;
});

button2.addEventListener("click", () => {
    currentString += "2";
    currentValues.push(2);
    textSpace.innerText = currentString;
});

button3.addEventListener("click", () => {
    currentString += "3";
    currentValues.push(3);
    textSpace.innerText = currentString;
});

buttonSub.addEventListener("click", () => {
    currentString += "-";
    currentValues.push('-');
    textSpace.innerText = currentString;
});

button0.addEventListener("click", () => {
    currentString += "0";
    currentValues.push(0);
    textSpace.innerText = currentString;
});

buttonDec.addEventListener("click", () => {
    currentString += ".";
    currentValues.push('.');
    textSpace.innerText = currentString;
});

buttonAdd.addEventListener("click", () => {
    currentString += "+";
    currentValues.push('+');
    textSpace.innerText = currentString;
});

buttonEquals.addEventListener("click", () => {
    
    currentString = "result";
    textSpace.innerText = "result";
});


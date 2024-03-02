const numDisplayWrapper = document.querySelector(".countDisplay");
const numCounterDisplay = document.querySelector(".counter");
const addButton = document.querySelector(".add");
const subButton = document.querySelector(".subtract");
const numField = document.querySelector(".numInput");

let counter = 0;

addButton.addEventListener("click", function(){
  if (isNaN(document.querySelector(".numInput").value)) {
    numCounterDisplay.textContent = " Error: please enter number"
    console.log(numCounterDisplay);
    return;


  } else {
    let number = document.querySelector(".numInput").value;
    makeNum = Number(number);
    newNum = makeNum + counter;
    counter = newNum;
    numCounterDisplay.textContent = Number(counter);
    console.log(counter);
    turnRed();
  }
});

subButton.addEventListener("click", function(){
  if(isNaN(document.querySelector(".numInput").value)) {
    numCounterDisplay.textContent = "Error: please enter number ";
    console.log(numCounterDisplay);
    returnl
  } else {
  let number = document.querySelector(".numInput").value;
  makeNum = Number(number);
  newNum = counter - makeNum;
  counter = newNum;
  numCounterDisplay.textContent = Number(counter);
  turnRed();
  }
});

let turnRed = () => {
  if(counter < 0){
    console.log(numCounterDisplay);
    numCounterDisplay.style.color = "red";
  } else if (counter => 0) {
    numCounterDisplay.style.color = "black";
  }
};

let checkNum = () => {
  let number = document.querySelector(".numInput").value;
  if(Number.isInteger(number) === false) {
    let warningDiv = document.createElement("div");
    warningDiv.classList.add("notaNum");
    warningDiv.textContent = "this is not a number";
    numDisplayWrapper.after(warningDiv);
  }
};
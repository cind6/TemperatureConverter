"use strict";

// find the HTML elements
const celsiusField = document.getElementById("celsius");
const fahrenheitField = document.getElementById("fahrenheit");
const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");

const answer = document.getElementById("answerField");


window.onload = init;

   function init(){
       convertBtn.onclick = onConvertBtnClicked;
       resetBtn.onclick = onResetBtnClicked; 
   }

   function onConvertBtnClicked(){
    console.log("clicked");
    // extract the values from the number 1 
    const fahrenheit = Number(fahrenheitField.value);
  
    // solve the numbers together and store the result
    const celsius = (fahrenheit - 32) * 5/9;
  
    // display the result in the answer field
    celsiusField.value = celsius.toFixed(3);
  }


function onResetBtnClicked() {
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celsius").value = "";
}

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
  const celsius = Number(celsiusField.value);

  // solve the numbers together and store the result
  const fahrenheit = celsius * (9/5) + 32;

  // display the result in the answer field
  fahrenheitField.value = fahrenheit;
}


function onResetBtnClicked() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
}

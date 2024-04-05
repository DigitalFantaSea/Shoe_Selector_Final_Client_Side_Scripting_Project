"use strict";
/*    Final Project
      Filename: script.js
      Date: 5/3/23
*/

// Selection lists in the web form
let brand = document.getElementById("brand");
let shoeStyle = document.getElementById("shoeStyle");
let shoe = document.getElementById("shoe");

// Option elements within the selection lists
let brandOptions = document.querySelectorAll("select#brand option");
let styleOptions = document.querySelectorAll("select#shoeStyle option");
let shoeOptions = document.querySelectorAll("select#shoe option");

// The number of options within each selection list
let brands = brandOptions.length;
let styles = styleOptions.length;
let shoes = shoeOptions.length;

// Form button to generate the text of the selected shoes
let selectShoe = document.getElementById("selectShoe");

// Paragraph containing the text of the selected shoe
let shoeSelected = document.getElementById("shoeSelected");


// Event handler to modify the content of the shoeStyle selection list
// when the brand selection list changes
brand.onchange = function() {
   let brandIndex = brand.selectedIndex;
   let brandCategory = brand.options[brandIndex].text;
   
   if (brandIndex === 0) {
      showAll(shoeStyle);
   } else {
      filterSelect(shoeStyle, brandCategory);
   }  
}

// Event handler to modify the content of the shoes selection list
// when the style selection list changes
shoeStyle.onchange = function() {
   let shoeStyleIndex = shoeStyle.selectedIndex;
   let shoeStyleCategory = shoeStyle.options[shoeStyleIndex].text;
   
   if (shoeStyleIndex === 0) {
      showAll(shoe);
   } else {
      filterSelect(shoe, shoeStyleCategory);
   }     
}

//Don't touch above code

//Create 2 functions (Step 3)

//Create showAll() function, with the parameter selectList (represent ONE of the selection lists in the webform) (Step 4)
function showAll(selectList){
   //Initialize options variable that refers to the collection of option elements within selectList (Step 4.1)
   let options = selectList.options;
   //Initialize optionLength variable to be the length of the options node list. (Step 4.2)
   let optionLength = options.length;
   //For loop that iterates through the items in the options node list. (Step 4.3)
   for(let i = 0; i < optionLength; i++){
      //For each item in the collection
      //Change the value of the style.display property to "block" in order to display the option within the selection list. (Step 4.3)
      options[i].style.display = "block";

      //Test if made it
      //console.log("Made it to showAll option #" + i);
   }
}

//Create filterSelect function with 2 parameters. selectList and category (Step 5)
//selectList = one of the selection lists in the web form
//category = determine which options within the selection list will be displayed on the web page (Step 5)
function filterSelect(selectList, category){
   //Initialize options variable that references the collection of option elements within selectList (Step 5.1)
   let options = selectList.options;
   //Initialize optionLength equal to the length of the options node list (Step 5.2)
   let optionLength = options.length;
   //For loop that iterates through the items in the options node list. (Step 5.3)
   for(let i = 0; i < optionLength; i++){
      //For each item in the options collection
      //Insert an if else statement 
      //If className property of the option equals the category variable. (Step 5.3)
      if(options[i].className == category){
         //Set the style.display property of the item to "block" (Step 5.3)
         options[i].style.display = "block";
      //otherwise
      }else{
         //Set the style.display property to "none" (to hide the option) (Step 5.3)
         options[i].style.display = "none";
      }
   }
}

//Create an onclick event handler for the selectShoe button, to run an anonmyous function when clicked. (Step 6)
selectShoe.onclick = function(){
   //Insert a command that writes the text "brand - shoe style - shoes" to the shoeSelected paragraph.
   //Where brand, shoe style, and shoes are the text values of the selected options from the three selections list.
   //(Use text property of the selected option from each selection list to return the text of the option.) (Step 6)
   shoeSelected.innerHTML = brand.options[brand.selectedIndex].text + " - " + shoeStyle.options[shoeStyle.selectedIndex].text + " - " + shoe.options[shoe.selectedIndex].text;

   //Test if made it this far
   //console.log("selectShoe button clicked");
}
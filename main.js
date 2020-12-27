//Create variables targetting the relevant DOM elements here 👇
var letsCookButton = document.querySelector('.lets-cook-button');
var selectSideButton = document.querySelector('#selectSide');
var selectMainsButton = document.querySelector('#selectMainDish');
var selectDessertButton = document.querySelector('#selectDessert');
var selectEntireMealButton = document.querySelector('#selectEntireMeal');
var showRandomRecommendation = document.querySelector('.recommended-meal-text');
var cookPotBox = document.querySelector('.cookpot-box');

// Add your event listeners here :point_👇
letsCookButton.addEventListener('click', displaySideMainsDessert);
selectSideButton.addEventListener('click', setChoice);
selectMainsButton.addEventListener('click', setChoice);
selectDessertButton.addEventListener('click', setChoice);
selectEntireMealButton.addEventListener('click', setChoice);

// Create your event handlers and other functions here :point_down:👇
function setChoice() {
  if (selectSideButton.checked) {
      return `${sideList[randomSideIndex()]}!`;
  } else if (selectMainsButton.checked) {
      return `${mainsList[randomMainsIndex()]}!`;
  } else if (selectDessertButton.checked) {
      return `${dessertList[randomDessertIndex()]}!`;
  } else if (selectEntireMealButton.checked) {
      return `${mainsList[randomMainsIndex()]} with a
      side of ${sideList[randomSideIndex()]} and
      ${dessertList[randomDessertIndex()]} for dessert`;
  } else {
      return "Select Meal Choice!"
  };
};
function displaySideMainsDessert() {
   if (setChoice() === "Select Meal Choice!") {
      cookPotBox.innerHTML = 
        `
        <p class="should-make-title-text">You should make:</p>
        <div class="meal-box">
          <p class="select-meal-text">${setChoice()}</p>
        </div>
        `;
  } else if (selectEntireMealButton.checked) {
      cookPotBox.innerHTML = 
        `
        <p class="should-make-title-text">You should make:</p>
        <div class="meal-box">
          <p class="entire-meal-text">${setChoice()}</p>
        </div>
        `; 
  } else {
      cookPotBox.innerHTML = 
        `
        <p class="should-make-title-text">You should make:</p>
        <div class="meal-box">
          <p class="recommended-meal-text">${setChoice()}</p>
        </div>
        `; 
  }; 
};
function randomSideIndex() {
  return Math.floor(Math.random() * sideList.length);
};
function randomMainsIndex() {
  return Math.floor(Math.random() * mainsList.length);
};
function randomDessertIndex() {
  return Math.floor(Math.random() * dessertList.length);
};

//refactor clear button?
/* <div class="button"> 
<button class="clear-recommend-button">CLEAR</button> 
</div> */

// var clearButton = document.querySelector('.clear-recommend-button');
// clearButton.addEventListener('click', clickClear);
// function clickClear() {
//   console.log('yes');
// }

// Add variables here :point_down:👇
var sideList = [
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"
];
var mainsList = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen, Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"
];
var dessertList = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
];

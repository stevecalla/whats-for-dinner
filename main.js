//Create variables targetting the relevant DOM elements here 👇
var letsCookButton = document.querySelector('.lets-cook-button');
var selectSideButton = document.querySelector('#selectSide');
var selectMainsButton = document.querySelector('#selectMainDish');
var selectDessertButton = document.querySelector('#selectDessert');
var selectEntireMealButton = document.querySelector('#selectEntireMeal');
var showRandomRecommendation = document.querySelector('.recommended-meal-text');
var cookPotBox = document.querySelector('.cookpot-box');
var clearButton = document.querySelector('.clear-recommend-button');

// Add your event listeners here :point_👇
letsCookButton.addEventListener('click', displaySideMainsDessert);
selectSideButton.addEventListener('click', setChoice);
selectMainsButton.addEventListener('click', setChoice);
selectDessertButton.addEventListener('click', setChoice);
selectEntireMealButton.addEventListener('click', setChoice);
clearButton.addEventListener('click', clickClear);

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
     document.querySelector('.cookpot-image').style.display = 'none';
     document.querySelector('.meal-box').style.display = 'flex';
     showRandomRecommendation.innerText = setChoice();
     showRandomRecommendation.classList.add('select-meal-text');
     showRandomRecommendation.classList.remove('recommended-meal-text');
     showRandomRecommendation.classList.remove('entire-meal-text');
 } else if (selectEntireMealButton.checked) {  
     document.querySelector('.cookpot-image').style.display = 'none';
     document.querySelector('.meal-box').style.display = 'flex';
     showRandomRecommendation.innerText = setChoice();
     showRandomRecommendation.classList.remove('select-meal-text');
     showRandomRecommendation.classList.remove('recommended-meal-text');
     showRandomRecommendation.classList.add('entire-meal-text');
 } else {  
     document.querySelector('.cookpot-image').style.display = 'none';
     document.querySelector('.meal-box').style.display = 'flex';
     showRandomRecommendation.innerText = setChoice();
     showRandomRecommendation.classList.remove('select-meal-text');
     showRandomRecommendation.classList.remove('entire-meal-text');
     showRandomRecommendation.classList.add('recommended-meal-text');
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
function clickClear() {
  document.querySelector('.cookpot-image').style.display = 'flex';
  document.querySelector('.meal-box').style.display = 'none';  
  selectSideButton.checked = false;
  selectMainsButton.checked = false;
  selectDessertButton.checked = false;
  selectEntireMealButton.checked = false;
}

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

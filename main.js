//Create variables targetting the relevant DOM elements here 👇
var letsCookButton = document.querySelector('.lets-cook-button');
var selectSideButton = document.querySelector('#selectSide');
var selectMainsButton = document.querySelector('#selectMainDish');
var selectDessertButton = document.querySelector('#selectDessert');
var selectEntireMealButton = document.querySelector('#selectEntireMeal');
var showRandomRecommendation = document.querySelector('.recommended-meal-text');
var clearRecommendButton = document.querySelector('.clear-recommend-button');

// Add your event listeners here :point_👇
letsCookButton.addEventListener('click', displaySideMainsDessert);
selectSideButton.addEventListener('click', setChoice);
selectMainsButton.addEventListener('click', setChoice);
selectDessertButton.addEventListener('click', setChoice);
selectEntireMealButton.addEventListener('click', setChoice);
clearRecommendButton.addEventListener('click', displayCookingPot);

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
  event.preventDefault();
  if (setChoice() === "Select Meal Choice!") {
    setSelectRadioButtonMessageStyle();
    showRandomRecommendation.innerText = setChoice();
  } else if (selectEntireMealButton.checked) {
    setMainsStyle();
    showRandomRecommendation.innerText = setChoice();
  } else {
    setSideMainDessertStyle();
    showRandomRecommendation.innerText = setChoice();
  };
  hideCookingPot();
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
function setSelectRadioButtonMessageStyle() {
  document.querySelector('.recommended-meal-text').style.fontSize = '40px';
  document.querySelector('.recommended-meal-text').style.color = 'red';
  document.querySelector('.recommended-meal-text').style.animationName = 'blinker';
  document.querySelector('.recommended-meal-text').style.animationDuration = '1.5s';
  document.querySelector('.recommended-meal-text').style.animationTimingFunction = 'linear';
  document.querySelector('.recommended-meal-text').style.animationIterationCount = 'infinite';
};
function setMainsStyle() {
  document.querySelector('.recommended-meal-text').style.fontSize = '24px';
  document.querySelector('.recommended-meal-text').style.color = 'black';
  document.querySelector('.recommended-meal-text').style.animationName = 'none';
};
function setSideMainDessertStyle() {
  document.querySelector('.recommended-meal-text').style.fontSize = '40px';
  document.querySelector('.recommended-meal-text').style.color = 'black';
  document.querySelector('.recommended-meal-text').style.animationName = 'none';
};
function hideCookingPot() {
  document.querySelector('.cookpot-box').style.display = 'none';
  document.querySelector('.recommend-meal-box').style.display = 'flex';
};
function displayCookingPot() {
  event.preventDefault();
  document.querySelector('.cookpot-box').style.display = 'flex';
  document.querySelector('.recommend-meal-box').style.display = 'none';
};

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

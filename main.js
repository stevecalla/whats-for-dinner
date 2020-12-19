//Create variables targetting the relevant DOM elements here 👇
var letsCookButton = document.querySelector('.lets-cook-button');
var selectSideButton = document.querySelector('#selectSide');
var selectMainsButton = document.querySelector('#selectMainDish');
var selectDessertButton = document.querySelector('#selectDessert');
var selectEntireMealButton = document.querySelector('#selectEntireMeal');
var showRandomRecommendation = document.querySelector('.recommended-meal');
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
    return `${sideList[randomSide()]}!`;
  } else if (selectMainsButton.checked) {
    return `${mainsList[randomSide()]}!`;
  } else if (selectDessertButton.checked) {
    return `${dessertList[randomSide()]}!`;
  } else if (selectEntireMealButton.checked) {
    return `${mainsList[randomSide()]} with a side of
    ${sideList[randomSide()]} and ${dessertList[randomSide()]} for dessert`;
  } else {
    return "Select Meal Choice!"
  };
};

function displaySideMainsDessert() {
  event.preventDefault();
  if (setChoice() === "Select Meal Choice!") {
    document.querySelector('.recommended-meal').style.fontSize = '40px';
    document.querySelector('.recommended-meal').style.color = 'red';
    showRandomRecommendation.innerText = setChoice();
  } else if (selectEntireMealButton.checked) {
    document.querySelector('.recommended-meal').style.fontSize = '24px';
    document.querySelector('.recommended-meal').style.color = 'black';
    showRandomRecommendation.innerText = setChoice();
  } else {
    document.querySelector('.recommended-meal').style.fontSize = '40px';
    document.querySelector('.recommended-meal').style.color = 'black';
    showRandomRecommendation.innerText = setChoice();
  };  ;
  hideCookingPot();
};

function randomSide() {
  return Math.floor(Math.random() * sideList.length);
};
function hideCookingPot() {
  document.querySelector('.img-overlay-box').style.display = 'none';
  document.querySelector('.img-overlay-box2').style.display = 'inline';
};
function displayCookingPot() {
    event.preventDefault();
    document.querySelector('.img-overlay-box').style.display = 'inline';
    document.querySelector('.img-overlay-box2').style.display = 'none';
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

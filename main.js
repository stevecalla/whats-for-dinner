//Create variables targetting the relevant DOM elements here 👇
var letsCookButton = document.querySelector('.lets-cook-button');
var showRandomRecommendation = document.querySelector('.recommendedMeal');
var selectSideRadioButton = document.querySelector('#selectSide');
var selectMainRadioButton = document.querySelector('#selectMainDish');
var selectDessertRadioButton = document.querySelector('#selectDessert');
var selectEntireMealRadioButton = document.querySelector('#selectEntireMeal');

// Add your event listeners here :point_👇
letsCookButton.addEventListener('click', randomSideMainDessert);
selectSideRadioButton.addEventListener('click', setChoice);
selectMainRadioButton.addEventListener('click', setChoice);
selectDessertRadioButton.addEventListener('click', setChoice);
selectEntireMealRadioButton.addEventListener('click', setChoice);
console.log('a = ', selectSideRadioButton.value);
console.log('b = ', selectMainRadioButton.value);

// Create your event handlers and other functions here :point_down:👇
function setChoice() {
  console.log('c = ', selectSideRadioButton.value);
  console.log('d = ', selectMainRadioButton.value);
  if (selectMainRadioButton.value === "mainChoice") {
    console.log("main");
  } else {
    console.log("side");
  };
  return selectSideRadioButton.value
};

function randomSideMainDessert() {
  event.preventDefault();
  showRandomRecommendation.innerText = sideList[randomSide()];
  hideCookingPot();
  displayMealChoice();
};

function randomSide() {
  return Math.floor(Math.random() * sideList.length);
};

function hideCookingPot() {
  document.querySelector('.img-overlay-box').style.display = 'none';
};

function displayMealChoice() {
  document.querySelector('.img-overlay-box2').style.display = 'inline';
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

// Mains
// Spaghetti and Meatballs
// Pineapple Chicken
// Shakshuka
// Thai Yellow Curry
// Bibimbap
// Chicken Parmesean
// Butternut Squash Soup
// BBQ Chicken Burgers
// Ramen
// Empanadas
// Chicken Fried Rice
// Sheet Pan Fajitas
// Margarita Pizza
//
// Desserts
// Apple Pie
// Lemon Meringue Pie
// Black Forest Cake
// Banana Bread
// Peach Cobbler
// Cheesecake
// Funfetti Cake
// Baklava
// Flan
// Macarons
// Macaroons
// Chocolate Cupcakes
// Pavlova
// Pumpkin Pie
// Key Lime Pie
// Tart Tatin
// Croissants
// Eclairs

// function randomeEntireMeal() {
//   event.preventDefault();
//   showRandomRecommendation.innerText = `${sideList[randomSide()]} with a side of ${sideList[randomSide()]} and ${sideList[randomSide()]} for dessert`;
// };

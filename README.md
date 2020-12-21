## Overview - What's For Dinner README.md

What’s for dinner? The ultimate question. The What's for dinner app allows a user to randomly generate recipe ideas for a side, main course, dessert or the entire email.

The site is accessible at [here](https://stevecalla.github.io/romcom/). All the project requirements can be found [here](https://frontend.turing.io/projects/module-1/dinner.html).

## Website Preview
![Small GIF (400x192)](https://user-images.githubusercontent.com/72281855/102734411-fb492a00-42fc-11eb-8ba5-35b0dc610f6d.gif)

## Functionality

* Current: User can generate a random side, main, dessert course or an entire 3 course meal.
  * Build Out Comp
  * Entire Meal Functionality
  * Error Handling and Clear Button
* Under Development: TBD
* Known Issues/Bugs: TBD
  * Issue #1 - sizing of left panel not identical creating shifting effect.
  * Issue #2 - not pixel perfect
  * Issue #3 - refactor using innerhtml to reduce box replace method to make pot disappear
  * Issue #4 - refactor HTML and CSS to reduce duplicate elements/properties
  * Issue #5 - page is not responsive
  * Issue #6 -
* Future Enhancements:
  * Login Page
  * User can favorite a recipe
  * User can delete a recipe
  * User never sees a repeated recipe
  * All recipes interface
  * Intermediate CSS
  * Local Storage

## Iterations

ITERATION 0: Build Out Comp
<img width="1367" alt="1 Home Page Screenshot" src="https://user-images.githubusercontent.com/72281855/102733884-ace75b80-42fb-11eb-9972-7bfa6faf3115.png">

ITERATION 1: MVP - Generate random side, main or dessert course
* When a user selects a dish option, then clicks the “Let’s Cook!” button...
* ...the user sees a random dish from the list of possible dishes for that category...
* ...when the dish name appears, the cookpot icon disappears
<img width="1367" alt="2 Dinner Screenshot" src="https://user-images.githubusercontent.com/72281855/102733889-b1ac0f80-42fb-11eb-8004-f96514729109.png">

ITERATION 2: Entire Meal Functionality
* When the user selects the “Entire Meal” option, then clicks the “Let’s Cook!” button...
* ...the user sees a message with a side, main and dessert option from the lists of possible dishes for all categories
* ... When the meal items appear, the cookpot icon disappears
<img width="1371" alt="3 Entire Meal Screenshot" src="https://user-images.githubusercontent.com/72281855/102733895-b5d82d00-42fb-11eb-9760-74b064597689.png">

ITERATION 3: Error Handling and Clear Button
* Clear Button: The user can click a clear button, which clears the page of any message. User should only be able to click the clear button if a food is visible. When the clear button is clicked and the food is removed, the image of the cookpot should re-appear.
* Let's Cook Button: If the user selects the "Let's Cook" button for a recipe prior to selecting a course (side, main, dessert, entire meal) radio button, the cooking pot will be replaced by a message to select a course. (Note: I considered the following options... disable or hide the "Let's Cook" buttor or display a message. I oped for the later).
<img width="1365" alt="4 Error Message Screenshot" src="https://user-images.githubusercontent.com/72281855/102733906-ba044a80-42fb-11eb-9622-c8b89e660192.png">

## Built With

1. HTML
2. CSS
3. JavaScript  
4. GitHub (website hosting and source code management)

## Contributors

* Steve Calla
* Amazingly Available for Questions & Guidance: Rachel Buchta.

## Various Links
* Project Description: https://frontend.turing.io/projects/module-1/dinner.html
* Project Original GitHub Repo: https://github.com/turingschool-examples/whats-for-dinner
* Team GitHub Repo: https://github.com/stevecalla/whats-for-dinner
* GitHub Hosted URL: https://stevecalla.github.io/whats-for-dinner/

/**
 * Author: Leslie Khattarchebli
 * Date: 6/8/2025
 * File Name: Modules
 * Description: Assignment 2
*/
"use strict";
// Define the createRecipe function
function createRecipe(ingredients) {
  const recipe = getRecipe(); // to call createRecipe function
  return `Recipe created with ingredients: ${ingredients.join("ingredient1, ingredient2")}`;
}

  console.log(createRecipe(["ingredient1", "ingredient2"])); 
  // Output: "Recipe created with ingredients1 and 2"

// Define the setTimer function
function setTimer(minutes) {
  return `Timer set for ${minutes} minutes.`;
}
console.log(setTimer(20)); 
// Output: "Timer set for 20 minutes."

// Define the quit function
function quit() {
    return "Program exited.";
}

console.log(quit());
// Output: "Program exited."

// TODO: Export the functions
recipeModule.exports = add;

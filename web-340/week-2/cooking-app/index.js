/**
 * Author: Leslie Khattarchebli
 * Date: 6/8/2025
 * File Name: Modules
 * Description: Assignment 2
*/

// Import custom modules
const recipeModule = require("./recipeModule");
const timerModule = require("./timerModule");

// Demonstrate module functionality
console.log(recipeModule.createRecipe(["ingredient1", "ingredient2"]));
console.log(timerModule.setTimer(20));

// TODO: Implement your CLI program here

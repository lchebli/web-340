/**
 * Author: Leslie Khattarchebli
 * Date: 6/29/25
 * File Name: Assignment 5
 * Description: Chapter 5 Assignment
 */
"use strict";

function bakePie(pieType, ingredients) {
  // Your code here

  const essentials = ['flour', 'sugar', 'butter'];

  // Check for missing essential ingredients
  const missing = essentials.filter(item => !ingredients.includes(item));

  if (missing.length > 0) {
    console.warn(`Missing essential ingredient(s): ${missing.join(', ')}`);
    process.exit(1); // Exit with error code
  }

  return `Success! A delicious ${type} pie has been baked.`;
}

module.exports = { bakePie };
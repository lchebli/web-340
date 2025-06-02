/**
 * Author: Leslie Khattarchebli
 * Date: 5/31/2025
 * File Name: weight-converter
 * Description: A simple weight converter
*/

"use strict";

// TODO: Implement the weight conversion logic here

// Function to convert pounds to kilograms
function poundsToKilograms(pounds) {
  const conversionRate = 0.453592; // 1 pound = 0.453592 kilograms
  return pounds * conversionRate;
}

// Example usage
const pounds = 150; // Replace with your value
const kilograms = poundsToKilograms(pounds);
console.log(`${pounds} pounds is approximately ${kilograms.toFixed(2)} kilograms.`);

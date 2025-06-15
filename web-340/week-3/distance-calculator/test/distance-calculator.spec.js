"use strict";
const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

//function to test 
function testFunctionDescription() {
  it("should throw an error for non-number inputs", function() {
    assert.throws(() => calculateDistance("Earth", 1), /Inputs must be numbers./);
});
};


// Call your test functions here

function testFunctionDescription() {

  function testJupiterToMercury() {
  try {
  // Average distances from the Sun in AU
  const distanceFromSunJupiter = 5.2; // Jupiter
  const distanceFromSunMercury = 0.39; // Mercury
  assert.strictEqual(calculateDistance('5.2', '0.39'), expectedValue);
  return true;
  } 
  catch (error) {
  console.error(`Failed testEarthToMars: ${error.message}`);
  return false;
  }
  };

  function testEarthToSun() {
    try {
  // Define the distance from Earth to the Sun in AU
  const distanceFromEarthToSunAU = 1; // 1 AU is the distance

  // Simulate a calculation or retrieval
  if (distanceFromEarthToSunAU === undefined) {
    throw new Error("Distance data is unavailable.");
  }

  console.log(`The distance from Earth to the Sun is approximately ${distanceFromEarthToSunAU} AU.`);
} catch (error) {
  console.error("An error occurred:", error.message);
}
  }

try {
  // Average distances in AU
  const distances = {
    sunToUranus: 19.8, // Sun to Uranus
    sunToMars: 1.52,   // Sun to Mars
  };
  assert.strictEqual(calculateDistance('19.8', '1.52'), expectedValue);
  return true;
  } 
  catch (error) {
  console.error(`Failed testEarthToMars: ${error.message}`);
  return false;
  }
  };

// Calculate the distance between Uranus and Mars
const uranusToMars = Math.abs(distances.sunToUranus - distances.sunToMars);

function calculateDistance(planet1AU, planet2AU) {
    return Math.abs(planet1AU - planet2AU);
}

module.exports = calculateDistance;

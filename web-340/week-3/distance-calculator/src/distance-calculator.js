"use strict";
function calculateDistance(planet1AU, planet2AU) {
  if (typeof planet1AU !== "number" || typeof planet2AU !== "number") {
      throw new Error("Inputs must be numbers.");
  }
  return Math.abs(planet1AU - planet2AU);

}

module.exports = calculateDistance;
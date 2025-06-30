/**
 * Author: Leslie Khattarchebli
 * Date: 6/29/2025
 * File Name: Assignment 5
 * Description: Chapter 5 Assignment
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here

const assert = require('assert');
const { spawnSync } = require('child_process');
const path = require('path');
const bakePie = require('../pie.js');

// Test 1: Success when all essential ingredients are present
(function testSuccess() {
  const message = bakePie("apple", ["apples", "flour", "sugar", "butter"]);
  assert.strictEqual(
    message,
    "Success! A delicious pie has been baked."
  );
  console.log("Test 1 Passed: Successful pie bake");
})();

// Test 2: if 'flour' is missing
(function testMissingFlour() {
  const result = spawnSync('node', [path.join(__dirname, 'run-bake.js'), 'apple', 'sugar,butter'], {
    encoding: 'utf-8'
  });
  assert.strictEqual(result.status, 1);
  assert.ok(result.stderr.includes('Missing essential ingredient(s): flour'));
  console.log("Test 2 Passed: Exits with missing 'flour'");
})();

// Test 3: if multiple essentials are missing
(function testMultipleMissing() {
  const result = spawnSync('node', [path.join(__dirname, 'run-bake.js'), 'blueberry', 'blueberries'], {
    encoding: 'utf-8'
  });
  assert.strictEqual(result.status, 1);
  assert.ok(result.stderr.includes('Missing essential ingredient(s): flour, sugar, butter'));
  console.log("Test 3 Passed: Exits with multiple missing ingredients");
})();

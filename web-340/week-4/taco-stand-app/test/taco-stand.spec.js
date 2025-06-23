/**
 * Author: Leslie Khattarchebli
 * Date: 6/22/2025
 * File Name: week-4
 * Description:
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/tacoStand");
const tacoStand = new TacoStandEmitter();

// TODO: Write tests for the TacoStandEmitter methods

import { TacoStandEmitter } from './TacoStandEmitter.js';
import assert from 'assert';

function testFunctionDescription() {
try {
  tacoStand.on('serve', customer => {
    assert.strictEqual(customer, 'Leslie');
    console.log('✅ serveCustomer() test passed.');
  });
  tacoStand.serveCustomer('Leslie');
} catch (err) {
  console.error('❌ serveCustomer() test failed:', err.message);
}
}

function testFunctionDescription() {
try {
  tacoStand.on('prepare', (taco) => {
    assert.strictEqual(taco, 'beef');
    console.log('✅ prepareTaco() test passed.');
  });

  tacoStand.prepareTaco('beef');
} catch (error) {
  console.error('❌ prepareTaco() test failed:', error.message);
}
}

function testFunctionDescription() {
try {
  tacoStand.on('rush', (rush) => {
    assert.strictEqual(rush, 'lunch rush');
    console.log('✅ handleRush() test passed.');
  });

  tacoStand.handleRush('lunch rush');
} catch (error) {
  console.error('❌ handleRush() test failed:', error.message);
}
}

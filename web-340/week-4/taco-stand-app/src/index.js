/**
 * Author: Leslie Khattarchebli
 ** Date: 6/22/2025
 * File Name:
 * Description:
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./tacoStand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the tacoStand object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

const tacoStand = new TacoStandEmitter();

// Set up event listeners
tacoStand.on('serve', (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});
tacoStand.on('prepare', (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});
tacoStand.on('rush', (rushTime) => {
  console.log(`Taco Stand handles rush: ${rushTime}`);
});

  // TODO: Handle the commands
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);

// Trigger the appropriate method
switch (command) {
  case 'serve':
    tacoStand.serveCustomer("serve John");
    break;
  case 'prepare':
    tacoStand.prepareTaco("prepare beef");
    break;
  case 'rush':
    tacoStand.handleRush("rush lunch");
    break;
  default:
    console.log('❌ Unknown command. Try "serve", "prepare", or "rush".');
}
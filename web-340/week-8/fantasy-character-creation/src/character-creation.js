"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:


function createCharacter(character, callback) {
  // TODO: Implement this function
}
  const fs = require('fs');
const path = require('path');

function createCharacter(character, callback) {
  const filePath = path.join(__dirname, `${character.name}.json`);
  const data = JSON.stringify(character, null, 2); // Pretty print!

  fs.writeFile(filePath, data, 'utf8', (err) => {
    if (err) {
      return callback(new Error('Failed to write character to file'));
    }

    callback(null, character);
  });
}

module.exports = { createCharacter };


function getCharacters(callback) {
  // TODO: Implement this function
  
  const dirPath = path.join(__dirname, 'characters');

  fs.readdir(dirPath, (err, files) => {
    if (err) return callback(new Error('Failed to read characters directory'));

    const characters = [];

    let pending = files.length;
    if (pending === 0) return callback(null, characters);

    files.forEach(file => {
      const filePath = path.join(dirPath, file);

      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return callback(new Error(`Failed to read file: ${file}`));

        try {
          characters.push(JSON.parse(data));
        } catch (parseErr) {
          return callback(new Error(`Invalid JSON in file: ${file}`));
        }

        pending--;
        if (pending === 0) callback(null, characters);
      });
    });
  });
}

module.exports = { getCharacters };

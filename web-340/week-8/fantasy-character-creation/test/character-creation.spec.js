"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
// const fs = require('fs');

// For promises:
// const fs = require('fs').promises;

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    // TODO: Set up your mocks here
    jest.mock('fs', () => ({
    writeFileSync: jest.fn(),
    readFileSync: jest.fn(),
    existsSync: jest.fn(),
    unlinkSync: jest.fn(),
  }));
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file
  // character.test.js
const { createCharacter } = require('./character');

describe('createCharacter', () => {
  it('should create a character with name and class', () => {
    const result = createCharacter('Leslie', 'Wizard');
    
    expect(result).toEqual({
      name: 'Leslie',
      class: 'Wizard',
      health: 100,
      mana: 50,
    });
  });
});

  // 2. Test that getCharacters reads characters from the file
  // characterService.js
function getCharacters() {
  return [
    { name: 'Leslie', class: 'Mage' },
    { name: 'Thorn', class: 'Rogue' }
  ];
}

module.exports = { getCharacters };

  // 3. Test that createCharacter handles errors when writing to the file
  // createCharacter.test.js
const fs = require('fs');
const path = require('path');

jest.mock('fs');

describe('createCharacter error handling', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should throw an error if writing to the file fails', () => {
    fs.writeFileSync.mockImplementation(() => {
      throw new Error('Filesystem write failed');
    });

    expect(() =>
      createCharacter('Leslie', 'Mage')
    ).toThrow('Failed to write character to file');
  });
});

});
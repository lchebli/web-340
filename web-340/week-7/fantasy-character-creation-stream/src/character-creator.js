const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
    this._characterQueue = [];
  }
}

  _write(chunk, encoding, callback) 
    // TODO: Implement your _write method here
    try {
      const character = JSON.parse(chunk.toString());
      this._characterQueue.push(character);
      callback(); // Successfully queued
    } catch (err) {
      callback(new Error('Invalid character format. Please use valid JSON.'));
    }
  

  _read(size)
    // TODO: Implement your _read method here
    if (this._characterQueue.length > 0) {
      const { class: role, gender, funFact } = this._characterQueue.shift();

      const description = `
🧝‍♂️ Character Created!
• Class: ${role}
• Gender: ${gender}
• Fun Fact: ${funFact}
`.trim();
  
  this.push(description + '\n');
    }
    else {
      this.push(null); // No more characters to read
    }
  

module.exports = CharacterCreator;
const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator'), () => {
  let characterCreator;
}
  beforeEach(() => {
    characterCreator = new CharacterCreator();
  

  test("should process data correctly when written to", (done) => {
    // TODO: Write your test here
  const CharacterCreator = require('./CharacterCreator');
  const creator = new CharacterCreator();

  creator.write(JSON.stringify({
    class: "Warrior",
    gender: "Male",
    funFact: "Sleeps in armor"
  }));

  creator.on('data', (chunk) => {
    const output = chunk.toString();
    expect(output).toMatch(/Class: Warrior/);
    expect(output).toMatch(/Gender: Male/);
    expect(output).toMatch(/Fun Fact: Sleeps in armor/);
    done();
  });

  });

  test("should emit 'error' when invalid data when nothing is inputted", (done) => {
    // TODO: Write your test here
  const creator = new CharacterCreator();

  creator.on('error', (err) => {
    expect(err).toBeInstanceOf(Error);
    expect(err.message).toMatch(/Invalid character format/);
    done();
  });

  creator.write(""); // Writing invalid input
});

  });

  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    test('CharacterCreator transforms character data into formatted output', (done) => {
  const creator = new CharacterCreator();

  const character = {
    class: "Mage",
    gender: "Other",
    funFact: "Can levitate snacks"
  };

  creator.write(JSON.stringify(character));

  creator.on('data', (chunk) => {
    const output = chunk.toString();
    expect(output).toContain("🔹 Character Created 🔹");
    expect(output).toContain(`• Class: ${character.class}`);
    expect(output).toContain(`• Gender: ${character.gender}`);
    expect(output).toContain(`• Fun Fact: ${character.funFact}`);
    done();
  });
});

  });
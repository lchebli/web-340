const http = require('http');
const server = require('../src/server');
const request = require('supertest');

"scripts"; {
  "start"; "node src/server.js",
  "test"; "jest"
}

//unit tests

  test('POST /create-character creates a new character', async () => {
    const response = await request(server)
      .post('/create-character?class=Rogue&gender=Female&funFact=Loves%20shiny%20things');
    
    expect(response.statusCode).toBe(200);
    expect(response.text).toMatch(/character created/i);
  });

  test('POST /confirm-character confirms character creation', async () => {
    const response = await request(server).post('/confirm-character');

    expect(response.statusCode).toBe(200);
    expect(response.text).toMatch(/confirmed/i);
  });

  test('GET /view-character returns the created character', async () => {
    const response = await request(server).get('/view-character');

    expect(response.statusCode).toBe(200);
    const character = JSON.parse(response.text);

    expect(character).toHaveProperty('class', 'Rogue');
    expect(character).toHaveProperty('gender', 'Female');
    expect(character).toHaveProperty('funFact', 'Loves shiny things');
  });

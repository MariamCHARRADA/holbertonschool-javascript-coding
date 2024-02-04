#!/usr/bin/node

const request = require("request");

const apiUrl = process.argv[2];

request.get(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const films = JSON.parse(body).results;
    const characterUrl = "https://swapi-api.hbtn.io/api/people/18/";
    let count = 0;
    for (const film of films) {
      const characters = film.characters;
      for (const character of characters) {
        if (character === characterUrl) {
          count++;
        }
      }
    }
    console.log(count);
  }
});

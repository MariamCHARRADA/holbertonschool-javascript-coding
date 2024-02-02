#!/usr/bin/node

const request = require('request');

request.get(process.argv[2],
    function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            const films = JSON.parse(body).results;
            console.log(films.filter((film) => film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')).length);
        }
    }
)
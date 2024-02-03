#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl,
    function (error, response, body) {
        if (error) {
            console.error(error);
        } else {
            try {
                const films = JSON.parse(body);
                const characterUrl = 'https://swapi-api.hbtn.io/api/people/18/';

                const count = films.results.reduce((acc, film) => {
                    if (film.characters.includes(characterUrl)) {
                        return acc + 1;
                    } else {
                        return acc;
                    }
                }, 0);

                console.log(count);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
            }
        }
    }
);

#!/usr/bin/node

const request = require('request');

request.get(
    'https://swapi-api.hbtn.io/api/people/18',
    function (error, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(JSON.parse(body).films.length);
        }
    }
)

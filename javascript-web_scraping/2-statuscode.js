#!/usr/bin/node

const http = require('http');

http.get(process.argv[2], (res) => {
  console.log('code:', res.statusCode);
});

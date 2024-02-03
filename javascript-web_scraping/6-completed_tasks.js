#!/usr/bin/node

const request = require('request');
request(process.argv[2], (error, response, body) => {
    if (error) {
        console.log(error);
    } else {
        const tasks = JSON.parse(body);
        const completedTasksByUser = {};

        for (const task of tasks) {
            if (task.completed) {
                if (completedTasksByUser[task.userId]) {
                    completedTasksByUser[task.userId]++;
                } else {
                    completedTasksByUser[task.userId] = 1;
                }
            }
        }

        console.log(completedTasksByUser);
    }
});



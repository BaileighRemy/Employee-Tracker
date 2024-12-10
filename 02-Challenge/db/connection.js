const { Client } = require('pg');

const db = new Client({
    host: "localhost",
    user: "postgres",
    password: "Jarlaxle1!", 
    database: 'employeetracker', 
    port: 5432,
});

db.connect(err => {
    if (err) {
        console.log("Connection error");     
    } else {
        console.log("Connected to the Employee Tracking database.");
    }
})

module.exports = db;
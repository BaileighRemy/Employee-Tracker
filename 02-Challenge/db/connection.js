const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "Jarlaxle1!",
    database: 'employeetracker',
    port: 5432,
});


const initializeDatabase = async () => {
    const schemaPath = path.join(__dirname, 'schema.sql');
    const seedsPath = path.join(__dirname, 'seeds.sql');

    try {
        const schema = await fs.promises.readFile(schemaPath, 'utf8');
        await pool.query(schema);
        console.log("Database schema created.");

        const seeds = await fs.promises.readFile(seedsPath, 'utf8');
        await pool.query(seeds);
        console.log("Database seeded.");
    } catch (err) {
        console.error("Error initializing database", err);
    } 
};

pool.connect()
    .then(() => {
        console.log("Connected to the Employee Tracking database.");
        initializeDatabase();
    })
    .catch(err => {
        console.error("Connection error", err);
    });

module.exports = pool; // Export the pool for use in other modules

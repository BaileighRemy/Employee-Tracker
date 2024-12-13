const pool = require("../db/connection");

class Department {
    constructor(id, name) {
        (this.id =id), 
        (this.name = name);
    }
    async getAll() {
        const sql = `SELECT * FROM department`;
        const result = await pool.query(sql); 
        return result.rows;
}

async addDepartment() {
    const sql = `INSERT INTO department (name) VALUES ($1) RETURNING *`;
    const result = await pool.query(sql, [this.name]);
    return result.rows[0];
}
}

module.exports = Department;
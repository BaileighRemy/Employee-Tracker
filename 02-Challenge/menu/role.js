const db = require("../db/connection");

class Role {
    constructor(id, title, salary, department_id) {
        (this.id =id), 
        (this.title = title),
        (this.salary = salary),
        (this.department_id = department_id)
    }
    async getAll() {
        const sql = `SELECT * FROM role`;
        const result = await db.query(sql); 
        return result.rows;
}

async addRole() {
    const sql = `INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)`
    const result = await db.query(sql, [this.title, this.salary, this.department_id]);
    return result.rows[0];
}
}

module.exports = Role;
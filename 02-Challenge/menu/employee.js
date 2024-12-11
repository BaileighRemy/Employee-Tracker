const db = require("../db/connection");

class Employee {
    constructor(id, first_name, last_name, role_id, manager_id) {
        (this.id = id), 
        (this.first_name = first_name),
        (this.last_name = last_name),
        (this.role_id = role_id),
        (this.manager_id = manager_id)
    }
   async getAll() {
        const sql = `SELECT * FROM role`;
        const result = await db.query(sql); 
        return result.rows;
    
}

async addEmployee() {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING id`;
    const result = await db.query(sql,[this.first_name, this.last_name, this.role_id, this.manager_id])
    return result.rows[0];
    
}

async getEmployeeById() {
    const sql = `SELECT * FROM employee WHERE id = '${this.id}'`;
    const result = await db.query(sql); 
    return result.rows;
}

async updateEmployee() {
    const sql = `UPDATE employee SET role_id = $1 WHERE id = $2`;
    const result = await db.query(sql); 
    return result.rows;
}
}

module.exports = Employee;
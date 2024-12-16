const pool = require("../db/connection");

class Employee {
    constructor(id, first_name, last_name, role_id, manager_id) {
        (this.id = id), 
        (this.first_name = first_name),
        (this.last_name = last_name),
        (this.role_id = role_id),
        (this.manager_id = manager_id)
    }
   async getAll() {
        const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, manager.first_name AS manager_first, manager.last_name AS manager_last FROM employee JOIN role ON employee.role_id = role.id LEFT JOIN employee AS manager ON employee.manager_id = manager.id`;
        const result = await pool.query(sql); 
        return result.rows;
    
}

async addEmployee() {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING id`;
    const result = await pool.query(sql,[this.first_name, this.last_name, this.role_id, this.manager_id])
    return result.rows[0];
    
}

async getEmployeeById() {
    const sql = `SELECT * FROM employee WHERE id = '${this.id}'`;
    const result = await pool.query(sql); 
    return result.rows;
}

async updateEmployee(empID, roleID) {
    const sql = `UPDATE employee SET role_id = $1 WHERE id = $2`;
    const result = await pool.query(sql, [roleID, empID]); 
    return result.rows;
}
}

module.exports = Employee;
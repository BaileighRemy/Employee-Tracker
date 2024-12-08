const db = require("../db/connection");

class Employee {
    constructor(id, first_name, last_name, role_id, manager_id) {
        (this.id = id), 
        (this.first_name = first_name),
        (this.last_name = last_name),
        (this.role_id = role_id),
        (this.manager_id = manager_id)
    }
    getAll() {
        const sql = `SELECT * FROM role`;
        return db
        .promise()
        .query(sql)
        .then(([rows]) => {
        return rows;
    });
}

addEmployee() {
    const sql = `INSERT INTO role (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`
    return db.promise().query(sql, [this.first_name, this.last_name, this.role_id, this.manager_id]);
}
}

module.exports = Employee;
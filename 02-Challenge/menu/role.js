const db = require("../db/connection");

class Role {
    constructor(id, title, salary, department_id) {
        (this.id =id), 
        (this.title = title),
        (this.salary = salary),
        (this.department_id = department_id)
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

addRole() {
    const sql = `INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)`
    return db.promise().query(sql, [this.title, this.salary, this.department_id]);
}
}

module.exports = Role;
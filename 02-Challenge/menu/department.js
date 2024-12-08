const db = require("../db/connection");

class Department {
    constructor(id, name) {
        (this.id =id), 
        (this.name = name);
    }
    getAll() {
        const sql = `SELECT * FROM department`;
        return db
        .promise()
        .query(sql)
        .then(([rows]) => {
        return rows;
    });
}

addDepartment() {
    const sql = `INSERT INTO department (name) VALUES ($1)`
    return db.promise().query(sql, [this.name]);
}
}

module.exports = Department;
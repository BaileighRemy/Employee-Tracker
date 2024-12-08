DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE 
    department (
        id INTEGER AUTO_INCREMENT SERIAL PRIMARY KEY,
        name VARCHAR(30) UNIQUE NOT NULL
    );

CREATE TABLE
    role (
        id AUTO_INCREMENT SERIAL PRIMARY KEY,
        title VARCHAR(30) UNIQUE NOT NULL,
        salary DECIMAL NOT NULL,
        department_id: INTEGER NOT NULL
    );

CREATE TABLE 
    employee (
        id AUTO_INCREMENT SERIAL PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL, 
        role_id INTEGER NOT NULL,
        manager_id INTEGER,
    )
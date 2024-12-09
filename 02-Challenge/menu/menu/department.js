const Department = require("../department");
const inquirer = require("inquirer");
const menu = require ("./mainmenu");

function viewDepartmentsMenu() {
    let department = new Department();
    department
    .getAll()
    .then((rows) => {
        console.log('All Departments:');
        console.table(rows);
    })
    .then(() => {
        menu.mainMenu();
    })
}

function addDepartmentMenu() {
    inquirer
    .prompt([
        {
            type: "text",
            name: newDepartmentName,
            message: "What is the name of the new department?",
            validate: (departmentname) => {
                if (!departmentname) {
                    console.log("Please enter a department name");
                }
                return true;
            },
        },
    ])
    .then(({ newDepartmentName }) => {
        const department = new department(null, newDepartmentName);
        department.addDepartment();
        console.clear();
        viewDepartmentsMenu();
        console.table("Added department \n");
    });
}

module.exports = { viewDepartmentsMenu, addDepartmentMenu };
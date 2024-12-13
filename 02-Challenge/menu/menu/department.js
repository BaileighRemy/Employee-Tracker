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
            type: "input",
            name: "newDepartmentName",
            message: "What is the name of the new department?",
            validate: (departmentname) => {
                if (!departmentname) {
                    console.log("Please enter a department name");
                    return false;
                }
                return true;
            },
        },
    ])
    .then(({ newDepartmentName }) => {
        const department = new Department(null, newDepartmentName);
        return department.addDepartment();
    })
    .then(() => {
        console.clear();
        console.log("Added department \n"); 
        viewDepartmentsMenu();
    })
    .catch((error) => {
        console.error("Error adding department:", error);
    });
}
module.exports = { viewDepartmentsMenu, addDepartmentMenu }
const inquirer = require('inquirer');
const { viewDepartmentsMenu, addDepartmentMenu } = require("./department");
const { viewAllRoles, addRole } = require("./role");

function mainMenu() {
    console.log("Employee Tracker Main Menu");
    inquirer
    .prompt([
        {
            type: "list",
            name: "select",
            message: "Please select one of the options below", 
            choices: [
                "View All Employees",
                "Add Employee",
                "Update Employee Role",
                "View All Roles",
                "Add Role",
                "View All Departments",
                "Add Department",
                "Quit"
            ],
            default: "View All Employees", 
        },
    ])
    .then(({select}) => {
        switch (select) {
            case "View All Employees":
                viewEmployeeMenu();
                break;
            case "Add Employee":
                addEmployeeMenu();
                break;
            case "Update Employee Role":
                addEmployeeMenu();
                break;
             case "View All Roles":
                viewAllRoles();
                break;
            case "Add Role":
                addRole();
                break;
            case "View All Departments":
                viewDepartmentsMenu();
                break;
            case "Add Department":
                addDepartmentMenu();
                break;
            case "Quit":
                console.clear();
                break;
        }
    })
}

exports.mainMenu = mainMenu;
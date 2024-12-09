const inquirer = require("inquirer");

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
        }
        switch (select) {
            case "Add Employee":
            addEmployeeMenu();
            break;
        }
        switch (select) {
            case "Update Employee Role":
            addEmployeeMenu();
            break;
        }
        switch (select) {
            case "Add Role":
            addEmployeeMenu();
            break;
        }
        switch (select) {
            case "View All Departments":
            viewDepartmentsMenu();
            break;
        }
        switch (select) {
            case "Add Department":
            addDepartmentMenu();
            break;
        }
        switch (select) {
            case "Quit":
            console.clear();
            break;
        }
    })
}
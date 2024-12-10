const Role = require("../role");
const Employee = require("../employee");
const inquirer = require("inquirer");
const menu = require("./mainmenu");
const Department = require("../department");

function viewAllRoles() {
    const role = new Role();
    role
    .getAll()
    .then((rows) => {
        console.log("All Roles");
        console.table(rows);
    })
    .then(() => menu.mainMenu());
}

function addRole() {
    const department = new Department();
    department.getAll().then((dpts) => {
        inquirer
        .prompt([
            {
                type: "text",
                name: "newRoleName",
                message: "What is the name of this new role?",
                validate: (rolename) => {
                    if (!rolename) {
                        console.log("Please enter a name for this role");
                    }
                    return true; 
                },
                
            },
        {
            type: "text",
            name: "roleSalary",
          message: "How much does this role make per year?",
          validate: (salary) => {
            if (!salary) {
              console.log("Please enter a yearly salary for this role!");
            }
            return true;
        },
    },
    {
        type: "list",
        name: "newRoleDepartment",
        message: "What department is this role in?",
        choices: dpts.map((d) => {
            return `${d.id}--${d.departmentName}`;
        }),
    },
        ])
        .then(({ newRoleName, roleSalary, newRoleDepartment }) => {
            let truncatedId = newRoleDpt.charAt()
            const role = new Role(null, newRoleName, roleSalary, truncatedId);
            role.addRole();
            console.clear();
            viewAllRolesMenu();
            console.table("Added role \n");
    })
});
}

module.exports = { viewAllRoles, addRole };
const Role = require("../role");
const Employee = require("../employee");
const inquirer = require("inquirer");
const menu = require("./mainmenu");

function viewAllEmployees() {
  const emp = new Employee();
  emp
    .getAll()
    .then((rows) => {
      console.log("All Employees")
      console.table(rows);
    })
    .then(() => menu.mainMenu());
}


function addEmployee() {
  console.clear();
  const role = new Role();
  const mgr = new Employee();
  role.getAll().then((roles) => {
    mgr.getAll().then((mgrs) => {
      let allManagers = mgrs.map((m) => {
        return `${m.id} - ${m.first_name} ${m.last_name}`;
      });
      allManagers.push("None");
      inquirer
        .prompt([
          {
            type: "text",
            name: "firstname",
            message: "Enter first name.",
            validate: (name) => {
              if (!name) {
                console.log("Please enter a first name for this employee!");
              }
              return true;
            },
          },
          {
            type: "text",
            name: "lastname",
            message: "Enter last name.",
            validate: (name) => {
              if (!name) {
                console.log("Please enter a last name for this employee!");
              }
              return true;
            },
          },
          {
            type: "list",
            name: "roleid",
            message: "What is the new employee's role?",
            choices: roles.map((r) => {
              return `${r.id} - ${r.title}`;
            }),
          },
          {
            type: "list",
            name: "manid",
            message: "Who is the new employee's manager?",
            choices: allManagers,
          },
        ])
        .then(({ firstname, lastname, roleid, manid }) => {
          let truncRoleId = roleid.split(" ");
          let truncManId = manid.split(" ");
          const emp = new Employee(
            null,
            firstname,
            lastname,
            truncRoleId[0],
            truncManId[0]
          );
          emp.addEmployee();
          console.clear();
          viewAllEmployees();
          console.table("Added employee \n");
        });
    });
  });
}

function updateEmployeeRole() {
  console.clear();
  let role = new Role();
  role.getAll().then((roles) => {
    let emp = new Employee();
    emp.getAll().then((emps) => {
      inquirer
        .prompt([
          {
            type: "list",
            name: "emp",
            message: "Which employee's role do you want to update?",
            choices: emps.map((e) => {
              return `${e.id} - ${e.first_name} ${e.last_name}`;
            }),
          },
          {
            type: "list",
            name: "roleselect",
            message: "Which role do you want to assign the selected employee?",
            choices: roles.map((r) => {
              return `${r.id} - ${r.title}`;
            }),
          },
        ])
        .then(({ emp, roleselect }) => {
          let eid = emp.split(" ");
          let rid = roleselect.split(" ");
          let selectedEmp = new Employee(eid[0]);
          selectedEmp.getEmployeeById().then((sEmp) => {
            sEmp = sEmp[0];
            let employee = new Employee(
              sEmp.id,
              sEmp.first_name,
              sEmp.last_name,
              rid[0],
              sEmp.mgr_id
            );

            console.log(emp, roleselect)
            const empID = emp.split(' - ')[0];
            const roleID = roleselect.split(' - ')[0]
            employee.updateEmployee(empID, roleID).then(() => {
              console.log(`
              
              Update was successful!`);
              viewAllEmployees();
            });
          });
        });
    });
  });
}

module.exports = {
  viewAllEmployees,
  addEmployee,
  updateEmployeeRole,
};
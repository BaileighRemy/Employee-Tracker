INSERT INTO department (name)
VALUES
    ('Human Resources')
    ('Information Technology')
    ('Marketing')

INSERT INTO role (title, salary, department_id)
VALUES 
    ('HR Manager', '70000', 1)
    ('Game Engineer', '90000', 2)
    ('Graphic Designer', '85000', 2)
    ('Marketing Specialist', '60000', 3)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
('Legolas', 'Greenleaf', 2, 1)
('Samwise', 'Gamgee' 1, NULL)
('Frodo', 'Baggins', 3, 1)
('Arwen', 'Undomiel', 2, 1)
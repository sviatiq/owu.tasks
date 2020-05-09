INSERT INTO department (idDepartment, DepartmentCity, CountOfWorkers)
VALUES ('1', 'Kyiv', '12'),
       ('2', 'Lviv', '15'),
       ('3', 'Rivne', '8'),
       ('4', 'Kyiv', '16'),
       ('5', 'Lviv', '10');

INSERT INTO client (idClient, FirstName, LastName, Education, Passport, City, Age, Department_idDepartment)
VALUES ('1', 'Roman', 'Beregulak', 'high', 'KC249584', 'Lviv', '25', '2'),
       ('2', 'Mariya', 'Pehnyk', 'high', 'KC350156', 'Stryi', '29', '2'),
       ('3', 'Olena', 'Fedychkanych', 'middle', 'KC850145', 'Krasne', '19', '1'),
       ('4', 'Igor', 'Petriv', 'technic', 'KC853952', 'Kyiv', '21', '4'),
       ('5', 'Volodymyr', 'Gryniv', 'high', 'KC849153', 'Skvyra', '35', '4'),
       ('6', 'Oleg', 'Fedyshyn', 'high', 'KC012412', 'Lviv', '42', '5'),
       ('7', 'Taras', 'Sobko', 'middle', 'KC249504', 'Rivne', '20', '3'),
       ('8', 'Viktor', 'Spas', 'technic', 'KC823412', 'Kyiv', '22', '2'),
       ('9', 'Julia', 'Mokina', 'technic', 'KC908295', 'Kyiv', '21', '1'),
       ('10', 'Oksana', 'Indusiva', 'high', 'KC723532', 'Sambir', '32', '1');


INSERT INTO application (`idApplication`, `Sum`, `CreditState`, `Currency`, `Client_idClient`)
VALUES ('1', '4000', 'Returned', 'Dollar', '1'),
       ('2', '5000', 'Not returned', 'Dollar', '4'),
       ('3', '7500', 'Returned', 'Euro', '6'),
       ('4', '3200', 'Not returned', 'Gryvnia', '2'),
       ('5', '3700', 'Returned', 'Gryvnia', '3'),
       ('6', '4100', 'Returned', 'Dollar', '1'),
       ('7', '15100', 'Not returned', 'Gryvnia', '9'),
       ('8', '25600', 'Not returned', 'Dollar', '10'),
       ('9', '12300', 'Not returned', 'Gryvnia', '8'),
       ('10', '9700', 'Returned', 'Dollar', '5'),
       ('11', '9000', 'Not returned', 'Gryvnia', '7'),
       ('12', '8100', 'Not returned', 'Dollar', '3'),
       ('13', '4400', 'Not returned', 'Euro', '8'),
       ('14', '2700', 'Returned', 'Dollar', '10'),
       ('15', '6600', 'Not returned', 'Euro', '3');
CREATE SCHEMA IF NOT EXISTS bank DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE bank;

DROP TABLE IF EXISTS application;
DROP TABLE IF EXISTS client;
DROP TABLE IF EXISTS department;

CREATE TABLE IF NOT EXISTS department
(
    idDepartment   INT         NOT NULL,
    DepartmentCity VARCHAR(45) NULL,
    CountOfWorkers INT         NULL,
    PRIMARY KEY (idDepartment)
);

CREATE TABLE IF NOT EXISTS client
(
    idClient                INTEGER     NOT NULL,
    FirstName               VARCHAR(45) NULL,
    LastName                VARCHAR(45) NULL,
    Education               VARCHAR(45) NULL,
    Passport                VARCHAR(45) NULL,
    City                    VARCHAR(45) NULL,
    Age                     VARCHAR(45) NULL,
    Department_idDepartment INTEGER     NOT NULL,
    PRIMARY KEY (idClient),
    FOREIGN KEY (Department_idDepartment) REFERENCES department (idDepartment)
);


CREATE TABLE IF NOT EXISTS application
(
    idApplication   INT         NOT NULL,
    Sum             INT         NULL,
    CreditState     VARCHAR(45) NULL,
    Currency        VARCHAR(45) NULL,
    Client_idClient INT         NOT NULL,
    PRIMARY KEY (idApplication),
    FOREIGN KEY (Client_idClient) REFERENCES bank.client (idClient)
);
CREATE DATABASE SubTask;
USE SubTask;

DROP TABLE IF EXISTS Client;
DROP TABLE IF EXISTS Car;
CREATE TABLE Client
(
    id      INTEGER AUTO_INCREMENT PRIMARY KEY,
    name    VARCHAR(20) NOT NULL,
    surname VARCHAR(20) NOT NULL,
    age     INTEGER,
    email   VARCHAR(30),
    phone   VARCHAR(20),
    sex     CHAR(10)
);

CREATE TABLE Car
(
    id           INTEGER AUTO_INCREMENT PRIMARY KEY ,
    model        VARCHAR(20) NOT NULL,
    horse_power  INTEGER     NOT NULL,
    year         INTEGER,
    manufacturer VARCHAR(30),
    type         VARCHAR(50),
    capacity     DOUBLE(6,2)
);



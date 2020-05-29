CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id INT (10)
    AUTO_INCREMENT NOT NULL,
burger_style VARCHAR
    (30) NOT NULL,
devoured BOOLEAN,
PRIMARY KEY
    (id)
);
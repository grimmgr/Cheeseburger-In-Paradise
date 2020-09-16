DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
    description TEXT,
    eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


UPDATE burgers SET eaten = 1 WHERE id = 5;
SELECT * FROM burgers;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
    description TEXT,
    eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


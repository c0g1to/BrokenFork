# CREATE DATABASE IF NOT EXISTS broken_fork;
USE broken_fork;

DROP TABLE User;

CREATE TABLE User
(
    nickname VARCHAR(32) NOT NULL,
    login VARCHAR(32) PRIMARY KEY,
    password VARCHAR(32) NOT NULL
);
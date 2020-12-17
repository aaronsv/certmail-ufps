CREATE DATABASE certmail_ufps;

USE certmail_ufps;

-- USERS TABLE
CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(60) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE users;

-- MAILS TABLE
CREATE TABLE mails (
    id INT(11) NOT NULL,
    asunto VARCHAR(100) NOT NULL,
    remitente VARCHAR(100) NOT NULL,
    mensaje VARCHAR(150) NOT NULL,
    user_id INT(11), 
    create_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE mails   
    ADD PRIMATY KEY (id);

ALTER TABLE mails
    MODIFY id(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE mails;
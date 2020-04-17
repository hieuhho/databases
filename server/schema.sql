--DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  message TEXT,
  room_id INTEGER,
  user_id INTEGER,
 FOREIGN KEY (room_id) REFERENCES rooms (id),
 FOREIGN KEY (user_id) REFERENCES users (id)
);


/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20)

);

CREATE TABLE rooms (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
#!/bin/bash

# Create the 'login' database
mysql -u "group5" -p  -e "CREATE DATABASE IF NOT EXISTS login"
mysql -u "group5" -p  -e "CREATE DATABASE IF NOT EXISTS leaderboard"

# Connect to the 'login' database
mysql -u "group5" -p  << EOF
    CREATE USER 'group5'@'localhost' IDENTIFIED BY 'MyriadsRumorsMuffing';
    GRANT ALL PRIVILEGES ON login.* TO 'group5'@'localhost';
    FLUSH PRIVILEGES;

    -- Create a 'users' table with 'username' and 'password' columns
    USE login;
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    );
    USE leaderboard;
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        game VARCHAR(255) NOT NULL,
        score VARCHAR(255) NOT NULL
        userID VARCHAR(255) NOT NULL
    );
EOF
<?php
// Database connection details
$host = "localhost"; 
$username = "group5"; 
$password = "MyriadsRumorsMuffing"; 
$database = "login"; 

// Create a database connection
$mysqli = new mysqli($host, $username, $password, $database);

// Check the connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Function to safely escape input
function escape_input($input)
{
    global $mysqli;
    return $mysqli->real_escape_string($input);
}

// Function to hash the password 
function hash_password($password)
{
    return password_hash($password, PASSWORD_BCRYPT);
}

// verify the entered password during login
function verify_password($entered_password, $hashed_password)
{
    return password_verify($entered_password, $hashed_password);
}

// Prompt the user for login details
echo "Login or Create Account:\n";

$username = readline("Enter username: ");
$password = readline("Enter password: ");

// Validate input (You should add more validation based on your requirements)
if (empty($username) || empty($password)) {
    echo "Invalid input. Both username and password are required.\n";
    exit();
}

// Escape input
$username = escape_input($username);

// Check if the user exists in the database
$query = "SELECT * FROM users WHERE username = '$username'";
$result = $mysqli->query($query);

if ($result->num_rows == 1) {
    // User found, verify the password
    $row = $result->fetch_assoc();
    $hashed_password = $row['password'];

    if (verify_password($password, $hashed_password)) {
        echo "Login successful!\n";
    } else {
        echo "Incorrect password. Try again.\n";
    }
} else {
    // User not found, prompt to create a new login
    echo "User not found. Do you want to create a new account? (yes/no): ";
    $createAccountOption = strtolower(readline());

    if ($createAccountOption === 'yes') {
        // Prompt for a password and insert the new user into the database
        $password = readline("Enter password for the new account: ");
        // Validate input (You should add more validation based on your requirements)
        if (empty($password)) {
            echo "Invalid input. Password is required.\n";
            exit();
        }
        $hashed_password = hash_password($password);

        // Insert the user into the database
        $insertQuery = "INSERT INTO users (username, password) VALUES ('$username', '$hashed_password')";

        if ($mysqli->query($insertQuery)) { // checks if query is successful
            echo "User created successfully!\n";
        } else {
            echo "Error creating user: " . $mysqli->error . "\n";
        }
    } else {
        echo "Login aborted.\n";
    }
}


$mysqli->close();

?>
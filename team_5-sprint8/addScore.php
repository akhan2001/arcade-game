<?php
echo("hello from getScore");
$database = 'leaderboard';
$username = 'group5';
$password = 'MyriadsRumorsMuffing';

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Establish a connection to MySQL
$db_con = mysqli_connect('127.0.0.1', $username, $password, $database);

// Check the connection
if (!$db_con) {
    die('Connection failed: ' . mysqli_connect_error());
}

// Get data from the request from POST
$name = $_POST['name'];
$score = $_POST['score'];
$game = $_POST['game'];

// Run your MySQL query
$query = "INSERT INTO scores (userID, score, game) VALUES (?, ?, ?)";
$stmt = mysqli_prepare($db_con, $query);

// Bind parameters and execute (sis = string and integer and string)
mysqli_stmt_bind_param($stmt, 'sis', $name, $score, $game);
$result = mysqli_stmt_execute($stmt);

// Check if the query was successful
if ($result) {
    echo "Record added successfully!";
    error_log("added");
} else {
    echo "Error: " . mysqli_error($db_con);
    error_log(mysqli_error($db_con));
}

// Close the prepared statement and the database connection
mysqli_stmt_close($stmt);
mysqli_close($db_con);
?>
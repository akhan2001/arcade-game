<?php
// getScores.php

$database = 'leaderboard';
$username = 'group5';
$password = 'MyriadsRumorsMuffing';
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Establish a connection to MySQL
$your_db_connection = mysqli_connect('127.0.0.1', $username, $password, $database);

// Check the connection
if (!$your_db_connection) {
    die('Connection failed: ' . mysqli_connect_error());
}

// Get the game name from the URL query parameters
$game = isset($_GET['game']) ? $_GET['game'] : '';

// Prepare the query with a placeholder for the game name
$query = "SELECT userID, score FROM scores WHERE game = ? ORDER BY score DESC LIMIT 5";

// Prepare the statement
$stmt = mysqli_prepare($your_db_connection, $query);

// Bind the game parameter to the prepared statement
mysqli_stmt_bind_param($stmt, "s", $game);

// Execute the query
mysqli_stmt_execute($stmt);

// Get the results
$result = mysqli_stmt_get_result($stmt);

// Fetch the results into an associative array
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);

// Close the statement
mysqli_stmt_close($stmt);

// Close the database connection
mysqli_close($your_db_connection);

// Return the results as JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
<?php


if ($_GET['action'] == 'getCurrentSensor') {
    echo json_encode( getCurrentSensor() );
}


function connectDB()
{

    $dbHost = 'localhost';
    $dbUser = 'user';
    $dbPass = 'coalline';
    $dbName = 'coalline';


    $mysqli = new mysqli( $dbHost, $dbUser, $dbPass, $dbName );
    if ($mysqli->connect_errno) {
        echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }

    return $mysqli;
}


function getCurrentSensor()
{
    $mysqli = connectDB();

    $res = $mysqli->query( "SELECT `current` FROM `sensor` WHERE `id` = '1' LIMIT 0,1" );
    $row = $res->fetch_assoc();

    return $row['current'];
}
<?php
$host = "localhost";
$user = "rootphp";
$pass = "123";
$db   = "replayshow";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

echo "Conexão OK!";

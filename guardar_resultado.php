<?php
header("Content-Type: application/json");
$conn = new mysqli("localhost", "root", "", "capacitacion");

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Conexión fallida"]);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

$nombre = $conn->real_escape_string($data['nombre']);
$instructor = $conn->real_escape_string($data['instructor']);
$tema = $conn->real_escape_string($data['tema']);
$calificacion = floatval($data['calificacion']);
$aprobado = $calificacion >= 8.0 ? 'Si' : 'No';

$sql = "INSERT INTO capacitaciones (nombre_persona, instructor, tema, aprobado, calificacion)
        VALUES ('$nombre', '$instructor', '$tema', '$aprobado', $calificacion)";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "ok"]);
} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}
$conn->close();

<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$table = 'customer';
$response = array();
$result;
$data;
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->user_name, $data->password)) {
        $user_name = $data->user_name;
        $password = $data->password;
        $queryCheckUser = $connection->prepare("SELECT * FROM $table WHERE user_name = ?");
        $queryCheckUser->bind_param("s", $user_name);
        $queryCheckUser->execute();
        $user = $queryCheckUser->get_result();
        if ($user->num_rows > 0) {
            $response["status"] = "error";
            $response['message'] = 'Username is exist';
            echo json_encode($response);
            return;
        }
        $query = "INSERT INTO $table(user_name, password) VALUES (?,?)";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("ss", $user_name, $password);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'User created successful';
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Query preparation failed';
        }
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Invalid data';
    }
    echo json_encode($response);
}

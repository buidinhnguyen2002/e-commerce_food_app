<?php
include '../database_connect.php';

header("Content-Type: application/json; charset=UTF-8");
$db = new dbConnect();
$connection = $db->getConnection();
$table = 'customer';
$response = array();
$result;
$data;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $query;
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->user_name, $data->password)) {
        $query = "SELECT * FROM $table WHERE user_name = ? AND password = ? ";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param('ss', $data->user_name, $data->password);
            $prepareStatement->execute();
            $result = $prepareStatement->get_result();

            $prepareStatement->close();
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Query preparation failed';
            echo json_encode($response);
            return;
        }
    }
    if ($result->num_rows == 1) {
        $response['status'] = 'success';
        $response['message'] = 'Login success';
        $user = $result->fetch_assoc();
        $response['data'] = $user;
        echo json_encode($response);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Username or password invalid';
        echo json_encode($response);
    }
}

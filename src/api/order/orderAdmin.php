<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$table = 'food_order';
$response = array();
$result;
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query;
    if (isset($_GET['id'])) {
        $orderId = $_GET['id'];
        $query = "SELECT * FROM $table WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param('s', $orderId);
            $prepareStatement->execute();
            $result = $prepareStatement->get_result();
            $prepareStatement->close();
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Query preparation failed';
        }
    }else {
        $query ="SELECT * FROM $table";
        $result = $connection -> query($query);
    }
    if ($result !== false) {
    if ($result->num_rows > 0) {
        $orders = array();
        while ($row = $result->fetch_assoc()) {
            $orders[] = $row;
        }
        $response['status'] = 'success';
        $response['message'] = 'Get order successful';
        $response['data'] = $orders;
        echo json_encode($response);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Not found';
        echo json_encode($response);
    }
}  else {
    $response['status'] = 'error';
    $response['message'] = $connection->error;
    echo json_encode($response);
}
}

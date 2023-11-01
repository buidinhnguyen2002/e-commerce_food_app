<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$table = 'restaurant_favorite';
$response = array();
$result;
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query;
    if (isset($_GET['restaurent_id'])) {
        $restaurantId = $_GET['restaurent_id'];
        $query = "SELECT * FROM $table WHERE restaurent_id= ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param('s', $restaurantId);
            $prepareStatement->execute();
            $result = $prepareStatement->get_result();
            $prepareStatement->close();
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Query preparation failed';
        }
    } else {
        $query = "SELECT * FROM $table";
        $result = $connection->query($query);
    }
    if ($result->num_rows > 0) {
        $restaurants = array();
        while ($row = $result->fetch_assoc()) {
            $restaurants[] = $row;
        }
        $response['status'] = 'success';
        $response['message'] = 'Get food successful';
        $response['data'] = $restaurants;
        echo json_encode($response);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Not found';
        echo json_encode($response);
    }
} 
elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset( $data->restaurant_id, $data->customer_id, $data->status)) {
        $restaurant_id = $data->restaurant_id;
        $customer_id = $data->customer_id;
        $status = $data->status;
    
        $query = "INSERT INTO $table( restaurant_id, customer_id, status) VALUES (?,?,?)";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("iii", $restaurant_id, $customer_id, $status);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Food created successful';
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
 elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->restaurant_id, $data->customer_id, $data->status)) {
        $restaurantId = $data->restaurant_id;
        $customerId = $data->customer_id;
        $status = $data->status;

       
        $query = "UPDATE $table SET status = ? WHERE restaurant_id = ? AND customer_id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("iii", $status, $restaurantId, $customerId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Food updated successful';
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
 elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $restaurantId = isset($_GET['restaurant_id']) ? $_GET['restaurant_id'] : null;
    $customerId = isset($_GET['customer_id']) ? $_GET['customer_id'] : null;

    if ($restaurantId) {
        $query = "DELETE FROM $table WHERE restaurant_id = ? and customer_id = ? ";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("ss", $restaurantId,$customer_id);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Food deleted successfully';
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
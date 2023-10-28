<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$table = 'review';
$response = array();
$result;
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query;
    if (isset($_GET['id'])) {
        $reviewId = $_GET['id'];
        $query = "SELECT * FROM $table WHERE id= ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param('s', $reviewId);
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
        $reviews = array();
        while ($row = $result->fetch_assoc()) {
            $reviews[] = $row;
        }
        $response['status'] = 'success';
        $response['message'] = 'Get review successful';
        $response['data'] = $reviews;
        echo json_encode($response);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Not found';
        echo json_encode($response);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->restaurant_id, $data->customer_id, $data->message)) {
        $restaurantId = $data->restaurant_id;
        $customerId = $data->customer_id;
        $message = $data->message;
        $query = "INSERT INTO $table( restaurant_id, customer_id, message) VALUES (?,?,?)";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("iis", $restaurant_id, $customer_id, $message);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Review created successful';
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Query preparation failed';
        }
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Invalid data';
    }
    echo json_encode($response);
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->id, $data->restaurant_id, $data->customer_id, $data->rate, $data->message, $data->create_at)) {
        $reviewId = $data->id;
        $restaurantId = $data->restaurant_id;
        $customerId = $data->customer_id;
        $rate = $data->rate;
        $message = $data->message;
        $create_at = $data->create_at;
        $query = "UPDATE $table SET restaurant_id = ? , customer_id = ?, rate = ?,
        message = ?, create_at = ? WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("iiissi", $restaurant_id, $customer_id, $rate, $message, $create_at, $id);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Review updated successful';
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Query preparation failed';
        }
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Invalid data';
    }
    echo json_encode($response);
} elseif ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->id)) {
        $reviewId = $data->id;
        $setFields = array();
        if (isset($data->restaurant_id)) {
            $setFields[] = "restaurant_id = '$data->restaurant_id'";
        }
        if (isset($data->customer_id)) {
            $setFields[] = "customer_id = '$data->customer_id'";
        }
        if (isset($data->rate)) {
            $setFields[] = "rate = '$data->rate'";
        }
        if (isset($data->message)) {
            $setFields[] = "message = '$data->message'";
        }
        if (isset($data->date)) {
            $setFields[] = "date = '$data->date'";
        }
        $setFields = implode(", ", $setFields);
        $query = "UPDATE $table SET $setFields WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $reviewId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Review information updated successfully';
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Review preparation failed';
        }
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Invalid data';
    }
    echo json_encode($response);
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $reviewId = isset($_GET['id']) ? $_GET['id'] : null;
    if ($reviewId) {
        $query = "DELETE FROM $table WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $reviewId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Review deleted successfully';
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

<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$table = 'review_favorite';
$response = array();
$result;
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query;
    if (isset($_GET['id'])) {
        $favoriteId = $_GET['id'];
        $query = "SELECT * FROM $table WHERE id= ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param('s', $favoriteId);
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
        $favorites = array();
        while ($row = $result->fetch_assoc()) {
            $favorites[] = $row;
        }
        $response['status'] = 'success';
        $response['message'] = 'Get favorite review successful';
        $response['data'] = $favorites;
        echo json_encode($response);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Not found';
        echo json_encode($response);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->customer_id, $data->review_id, $data->status)) {
      
        $customerId = $data->customer_id;
        $reviewId = $data->review_id;
        $status = $data->status;
        $query = "INSERT INTO $table(customer_id, review_id, status) VALUES (?,?,?)";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("iii", $customerId, $reviewId, $status);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Favorite review created successful';
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
    if (isset($data->id, $data->customer_id, $data->review_id, $data->status)) {
        $id = $data->id;
        $customerId = $data->customer_id;
        $reviewId = $data->review_id;
        $status = $data->status;
        $query = "UPDATE $table SET customer_id = ? , review_id = ?, status = ? WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("iiii", $customerId, $reviewId, $status, $id);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Favorite review updated successful';
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
        $favoriteId = $data->id;
        $setFields = array();
        if (isset($data->customer_id)) {
            $setFields[] = "customer_id = '$data->customer_id'";
        }
        if (isset($data->review_id)) {
            $setFields[] = "review_id = '$data->review_id'";
        }
        
        if (isset($data->status)) {
            $setFields[] = "status = '$data->status'";
        }
        $setFields = implode(", ", $setFields);
        $query = "UPDATE $table SET $setFields WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $favoriteId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Favorite review updated successfully';
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Query preparation failed';
        }
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Invalid data';
    }
    echo json_encode($response);
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $favoriteId = isset($_GET['id']) ? $_GET['id'] : null;
    if ($favoriteId) {
        $query = "DELETE FROM $table WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $favoriteId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Favotie review deleted successfully';
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

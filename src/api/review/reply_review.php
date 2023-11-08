<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$table = 'reply_review';
$response = array();
$result;
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query;
    if (isset($_GET['id'])) {
        $driverId = $_GET['id'];
        $query = "SELECT * FROM $table WHERE id= ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param('s', $replyId);
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
        $replys = array();
        while ($row = $result->fetch_assoc()) {
            $replys[] = $row;
        }
        $response['status'] = 'success';
        $response['message'] = 'Get reply successful';
        $response['data'] = $replys;
        echo json_encode($response);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Not found';
        echo json_encode($response);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset( $data->review_id, $data->message)) {
        
        $reviewId = $data->review_id;
        $message = $data->message;
       
        $query = "INSERT INTO $table(review_id, message) VALUES (?,?)";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("is", $reviewId, $message);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Reply created successful';
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
    if (isset($data->id, $data->review_id, $data->message, $data->create_at)) {
        $id = $data->id;
        $reviewId = $data->review_id;
        $message = $data->message;
        $message = $data->message;
        $createAt = $data->create_at;
        
        $query = "UPDATE $table SET review_id = ? , message = ?, create_at = ? WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("issi",$reviewId, $message, $createAt, $id);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Reply updated successful';
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
        $driverId = $data->id;
        $setFields = array();
        if (isset($data->first_name)) {
            $setFields[] = "first_name = '$data->first_name'";
        }
        if (isset($data->last_name)) {
            $setFields[] = "last_name = '$data->last_name'";
        }
        if (isset($data->phone_number)) {
            $setFields[] = "phone_number = '$data->phone_number'";
        }
        if (isset($data->rate)) {
            $setFields[] = "rate = '$data->rate'";
        }
        if (isset($data->gender)) {
            $setFields[] = "gender = '$data->gender'";
        }
        $setFields = implode(", ", $setFields);
        $query = "UPDATE $table SET $setFields WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $driverId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Driver information updated successfully';
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
    $replyId = isset($_GET['id']) ? $_GET['id'] : null;
    if ($replyId) {
        $query = "DELETE FROM $table WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $replyId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Reply review deleted successfully';
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

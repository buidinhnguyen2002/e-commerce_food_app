<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$table = 'customer';
$response = array();
$result;
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query;
    if (isset($_GET['id'])) {
        $customerId = $_GET['id'];
        $query = "SELECT * FROM $table WHERE id= ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param('s', $customerId);
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
        $customes = array();
        while ($row = $result->fetch_assoc()) {
            $customes[] = $row;
        }
        $response['status'] = 'success';
        $response['message'] = 'Get customer successful';
        $response['data'] = $customes;
        echo json_encode($response);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Not found';
        echo json_encode($response);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->user_name, $data->password, $data->phone_number, $data->cart_id)) {
        $userName = $data->user_name;
        $passWord = $data->password;
        $phoneNumber = $data->phone_number;
        $cartId = $data->cart_id;
        $query = "INSERT INTO $table(user_name, password, phone_number, cart_id) VALUES (?,?,?,?)";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("sssi", $userName, $passWord, $phoneNumber, $cartId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'User customer created successful';
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
    if (isset($data->id, $data->user_name, $data->password, $data->phone_number, $data->avatar, $data->cart_id)) {
        $id = $data->id;
        $userName = $data->user_name;
        $passWord = $data->password;
        $phoneNumber = $data->phone_number;
        $avatar = $data->avatar;
        $cartId = $data->cart_id;
        $query = "UPDATE $table SET user_name = ? , password = ?, phone_number = ?, avatar = ?,
        cart_id = ? WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("ssssii", $userName, $passWord, $phoneNumber, $avatar, $cartId, $id);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'User customer updated successful';
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
        $customerId = $data->id;
        $setFields = array();
        if (isset($data->user_name)) {
            $setFields[] = "user_name = '$data->user_name'";
        }
        if (isset($data->password)) {
            $setFields[] = "password = '$data->password'";
        }
        if (isset($data->phoneNumber)) {
            $setFields[] = "phoneNumber = '$data->phone_number'";
        }
        if (isset($data->avatar)) {
            $setFields[] = "avatar = '$data->avatar'";
        }
        if (isset($data->cart_id)) {
            $setFields[] = "cart_id = '$data->cart_id'";
        }
        $setFields = implode(", ", $setFields);
        $query = "UPDATE $table SET $setFields WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $customerId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Customer information updated successfully';
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
    $customerId = isset($_GET['id']) ? $_GET['id'] : null;
    if ($customerId) {
        $query = "DELETE FROM $table WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $customerId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'User customer deleted successfully';
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

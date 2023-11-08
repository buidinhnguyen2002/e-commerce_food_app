<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$table = 'delivery_driver';
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
            $prepareStatement->bind_param('s', $driverId);
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
        $drivers = array();
        while ($row = $result->fetch_assoc()) {
            $drivers[] = $row;
        }
        $response['status'] = 'success';
        $response['message'] = 'Get driver successful';
        $response['data'] = $drivers;
        echo json_encode($response);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Not found';
        echo json_encode($response);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->id, $data->first_name, $data->last_name, $data->phone_number, $data->rate, $data->gender)) {
        $id = $data->id;
        $firstName = $data->first_name;
        $lastName = $data->last_name;
        $phoneNumber = $data->phone_number;
        $rate = $data->rate;
        $gender = $data->gender;
        $query = "INSERT INTO $table(id,first_name, last_name, phone_number, rate, gender) VALUES (?,?,?,?,?,?)";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("ssssii", $id, $firstName, $lastName, $phoneNumber, $rate, $gender);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Delivery driver created successful';
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
    if (isset($data->id, $data->first_name, $data->last_name, $data->phone_number, $data->rate, $data->gender)) {
        $id = $data->id;
        $firstName = $data->first_name;
        $lastName = $data->last_name;
        $phoneNumber = $data->phone_number;
        $rate = $data->rate;
        $gender = $data->gender;
        $query = "UPDATE $table SET first_name = ? , last_name = ?, phone_number = ?, rate = ?,
        gender = ? WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("sssiis", $firstName, $lastName, $phoneNumber, $rate, $gender, $id);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Delivery driver updated successful';
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
    $driverId = isset($_GET['id']) ? $_GET['id'] : null;
    if ($driverId) {
        $query = "DELETE FROM $table WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $driverId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Delivery driver deleted successfully';
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

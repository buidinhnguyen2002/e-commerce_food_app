<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$table = 'address';
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
            $prepareStatement->bind_param('s', $addressId);
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
            $addresss[] = $row;
        }
        $response['status'] = 'success';
        $response['message'] = 'Get address successful';
        $response['data'] = $addresss;
        echo json_encode($response);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Not found';
        echo json_encode($response);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->restaurant_id, $data->unit_number, $data->street_number, $data->district, $data->city)) {
        $restaurant_id = $data->restaurant_id;
        $unit_number = $data->unit_number;
        $street_number = $data->street_number;
        $district = $data->district;
        $city = $data->city;
        $query = "INSERT INTO $table(restaurant_id, unit_number, street_number, district, city) VALUES (?,?,?,?,?)";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("iisss", $restaurant_id, $unit_number, $street_number, $district, $city);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Address created successful';
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
    if (isset($data->restaurant_id, $data->unit_number, $data->street_number, $data->district, $data->city)) {
        $restaurant_id = $data->restaureant_id;
        $unit_number = $data->unit_number;
        $street_number = $data->street_number;
        $district = $data->district;
        $city = $data->city;
        $query = "UPDATE $table SET unit_number = ?, street_number = ?, district = ?, city = ? WHERE restaurant_id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("iisss",$restaurant_id, $unit_number, $street_number, $city, $district);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Address updated successful';
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
        $addressId = $data->id;
        $setFields = array();
        if (isset($data->restaurant_id)) {
            $setFields[] = "restaurant_id = '$data->restaurant_id'";
        }
        if (isset($data->unit_number)) {
            $setFields[] = "unit_number = '$data->unit_number'";
        }
        if (isset($data->street_number)) {
            $setFields[] = "street_number = '$data->street_number'";
        }
        if (isset($data->district)) {
            $setFields[] = "district = '$data->district'";
        }
        if (isset($data->city)) {
            $setFields[] = "city = '$data->city'";
        }
        $setFields = implode(", ", $setFields);
        $query = "UPDATE $table SET $setFields WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $addressId);
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
    $addressId = isset($_GET['id']) ? $_GET['id'] : null;
    if ($addressId) {
        $query = "DELETE FROM $table WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $addressId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = ' Address deleted successfully';
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

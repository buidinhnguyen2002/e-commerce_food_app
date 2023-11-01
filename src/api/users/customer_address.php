<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$table = 'customer_address';
$response = array();
$result;
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query;
    if (isset($_GET['id'])) {
        $customerAddressId = $_GET['id'];
        $query = "SELECT * FROM $table WHERE id= ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param('s', $customerAddressId);
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
        $customerAddress = array();
        while ($row = $result->fetch_assoc()) {
            $customerAddress[] = $row;
        }
        $response['status'] = 'success';
        $response['message'] = 'Get customer address successful';
        $response['data'] = $customerAddress;
        echo json_encode($response);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Not found';
        echo json_encode($response);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->address_id, $data->customer_id, $data->is_default)) {
        $addressId = $data->address_id;
        $customerId = $data->customer_id;
        $isDefault = $data->is_default;
        $query = "INSERT INTO $table(address_id, customer_id, is_default) VALUES (?,?,?)";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("iii", $addressId, $customerId, $isDefault);
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
    if (isset($data->id, $data->address_id, $data->customer_id, $data->is_default)) {
        $id = $data->id;
        $addressId = $data->address_id;
        $customerId = $data->customer_id;
        $isDefault = $data->is_default;
        $avatar = $data->avatar;
        $cart_id = $data->cart_id;
        $query = "UPDATE $table SET address_id = ? , customer_id = ?, is_default = ? WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("ssssii", $addressId, $customerId, $isDefault, $id);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'User customer address updated successful';
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
        $customerAddressId = $data->id;
        $setFields = array();
        if (isset($data->address_id)) {
            $setFields[] = "addressId = '$data->address_id'";
        }
        if (isset($data->customer_id)) {
            $setFields[] = "customerId = '$data->customer_id'";
        }
        if (isset($data->is_default)) {
            $setFields[] = "isDefault = '$data->is_default'";
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
            $prepareStatement->bind_param("s", $customerAddressId);
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
    $customerAddressId = isset($_GET['id']) ? $_GET['id'] : null;
    if ($customerAddressId) {
        $query = "DELETE FROM $table WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $customerAddressId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'User customer address deleted successfully';
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

<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$tableCart = 'cart';
$tableCartDetail = 'cart_detail';
$tableFood = 'food';
$response = array();
$result;
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query;
    if (isset($_GET['id'])) {
        $cartId = $_GET['id'];
        $query = "SELECT f.*, c.quantity
        FROM $tableCartDetail c INNER JOIN 
        $tableFood f ON c.food_id = f.id WHERE c.cart_id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param('s', $cartId);
            $prepareStatement->execute();
            $result = $prepareStatement->get_result();
            $prepareStatement->close();
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Query preparation failed';
        }
    }
    if ($result->num_rows > 0) {
        $products = array();
        while ($row = $result->fetch_assoc()) {
            $products[] = $row;
        }
        $response['status'] = 'success';
        $response['message'] = 'Get product in cart successful';
        $response['data'] = $products;
        echo json_encode($response);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Not found';
        echo json_encode($response);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->food_id, $data->cart_id, $data->quantity)) {
        $foodId = $data->food_id;
        $cartId = $data->cart_id;
        $quantity = $data->quantity;
        $query = "INSERT INTO $tableCartDetail(food_id, cart_id, quantity) VALUES (?,?,?)";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("ssi", $foodId, $cartId, $quantity);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Add product successful';
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
    if (isset($data->food_id, $data->cart_id, $data->quantity)) {
        $foodId = $data->food_id;
        $cartId = $data->cart_id;
        $quantity = $data->quantity;
        $query = "UPDATE $tableCartDetail SET quantity = ? WHERE food_id = ? AND cart_id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("iss", $quantity, $foodId, $cartId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Cart updated successful';
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
        $cartId = $data->id;
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
        $query = "UPDATE $tableCart SET $setFields WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $cartId);
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
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->food_id, $data->cart_id)) {
        $foodId = $data->food_id;
        $cartId = $data->cart_id;
        $query = "DELETE FROM cart_detail WHERE cart_id = ? AND food_id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("ii", $cartId, $foodId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Product in cart deleted successfully';
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

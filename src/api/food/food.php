<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$table = 'food';
$response = array();
$result;
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query;
    if (isset($_GET['id'])) {
        $foodId = $_GET['id'];
        $query = "SELECT * FROM $table WHERE id= ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param('s', $foodId);
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
        $foods = array();
        while ($row = $result->fetch_assoc()) {
            $foods[] = $row;
        }
        $response['status'] = 'success';
        $response['message'] = 'Get food successful';
        $response['data'] = $foods;
        echo json_encode($response);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Not found';
        echo json_encode($response);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->id, $data->restaurant_id, $data->food_name, $data->description, $data->price, $data->unit, $data->rate, $data->image_source, $data->date, $data->quantity_init, $data->quantity_available)) {
        $id = $data->id;
        $restaurantId = $data->restaurant_id;
        $foodName = $data->food_name;
        $description = $data->description;
        $price = $data->price;
        $unit = $data->unit;
        $rate = $data->rate;
        $imageSource = $data->image_source;
        $date = $data-> date;
        $quantityInit = $data->quantity_init;
        $quantityAvailable = $data->quantity_available;
        $query = "INSERT INTO $table(id,restaurant_id, food_name, description, price, unit, rate, image_source, date, quantity_init, quantity_available) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("iissisissii", $id, $restaurantId, $foodName, $description, $price, $unit, $rate, $imageSource, $date, $quantityInit, $quantityAvailable);
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
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->id, $data->restaurant_id, $data->food_name, $data->description, $data->price, $data->unit, $data->rate, $data->image_source, $data->date, $data->quantity_init, $data->quantity_available)) {
        $id = $data->id;
        $restaurantId = $data->restaurant_id;
        $foodName = $data->food_name;
        $description = $data->description;
        $price = $data->price;
        $unit = $data->unit;
        $rate = $data->rate;
        $imageSource = $data->image_source;
        $date = $data-> date;
        $quantityInit = $data->quantity_init;
        $quantityAvailable = $data->quantity_available;
        $query = "UPDATE $table SET restaurant_id = ? , food_name = ?, description = ?, price = ?, unit = ?,
        rate = ?, image_source = ?, date = ?, quantity_init = ?, quantity_available = ? WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("issisissiii", $restaurantId, $foodName, $price, $unit, $rate, $imageSource, $quantityInit, $quantityAvailable, $id);
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
} elseif ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->id)) {
        $foodId = $data->id;
        $setFields = array();
        if (isset($data->restaurant_id)) {
            $setFields[] = "restaurant_id = '$data->restaurant_id'";
        }
        if (isset($data->food_name)) {
            $setFields[] = "food_name = '$data->food_name'";
        }
        if (isset($data->description)) {
            $setFields[] = "description = '$data->description'";
        }
        if (isset($data->price)) {
            $setFields[] = "price = '$data->price'";
        }
        if (isset($data->unit)) {
            $setFields[] = "unit = '$data->unit'";
        }
        if (isset($data->rate)) {
            $setFields[] = "rate = '$data->rate'";
        }
        if (isset($data->image_source)) {
            $setFields[] = "image_source = '$data->image_source'";
        }
        if (isset($data->date)) {
            $setFields[] = "date = '$data->date'";
        }
        if (isset($data->quantity_init)) {
            $setFields[] = "quantity_init = '$data->quantity_init'";
        }
        if (isset($data->quantity_available)) {
            $setFields[] = "quantity_available = '$data->quantity_available'";
        }
        $setFields = implode(", ", $setFields);
        $query = "UPDATE $table SET $setFields WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $foodId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Food information updated successfully';
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
    $foodId = isset($_GET['id']) ? $_GET['id'] : null;
    if ($foodId) {
        $query = "DELETE FROM $table WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $foodId);
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

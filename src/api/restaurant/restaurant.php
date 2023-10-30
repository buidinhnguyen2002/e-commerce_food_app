<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$table = 'restaurant';
$response = array();
$result;
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query;
    if (isset($_GET['id'])) {
        $restaurantId = $_GET['id'];
        $query = "SELECT * FROM $table WHERE id= ?";
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
    if (isset( $data->name, $data->description, $data->phone_number)) {
        $name = $data->name;
        $description = $data->description;
        $phone_number = $data->phone_number;
    
        $query = "INSERT INTO $table( name, description, phone_number) VALUES (?,?,?)";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("sss", $name, $description, $phone_number);
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
    if (isset($data->id, $data->name, $data->description, $data->phone_number, $data->rate, $data->join_day)) {
        $id = $data->id;
        $name = $data->name;
        $description = $data->description;
        $phone_number = $data->phone_number;
        $rate = $data->rate;
        $join_day = $data->join_day;
       
        $query = "UPDATE $table SET name = ?, description = ?, phone_number = ?,
        rate = ?, join_day = ? WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("isssis", $id, $name, $description, $phone_number, $rate, $join_day);
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

 elseif ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->id)) {
        $restaurantId = $data->id;
        $setFields = array();
        if (isset($data->id)) {
            $setFields[] = "id = '$data->id'";
        }
        if (isset($data->name)) {
            $setFields[] = "name = '$data->name'";
        }
        if (isset($data->description)) {
            $setFields[] = "description = '$data->description'";
        }
        if (isset($data->phone_number)) {
            $setFields[] = "phone_number = '$data->phone_number'";
        }
        if (isset($data->rate)) {
            $setFields[] = "rate = '$data->rate'";
        }
        if (isset($data->join_day)) {
            $setFields[] = "join_day = '$data->join_day'";
        }
        
        $setFields = implode(", ", $setFields);
        $query = "UPDATE $table SET $setFields WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $restaurantId);
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
}
 elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $restaurantId = isset($_GET['id']) ? $_GET['id'] : null;
    if ($restaurantId) {
        $query = "DELETE FROM $table WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $restaurantId);
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

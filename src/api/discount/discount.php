<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$table = 'discount';
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
    if (isset( $data->title, $data->quantity, $data->start_date,$data->expried_date, $data->description, $data->type,$data-> max_price, $data->value,$data->unit)) {
        $titleDis= $data->title;
        $Quantity = $data->quantity;
        $start_date = $data->start_date;
        $expried_date= $data->expried_date;
        $description = $data->description;
        $type = $data->type;
        $max_price= $data->max_price;
        $value = $data->value;
        $unit = $data->unit;
    
        $query = "INSERT INTO $table( title, quantity, start_date,expried_date,description,type,max_price,value,unit) VALUES (?,?,?,?,?,?,?,?,?)";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("sissssiis", $titleDis, $Quantity, $start_date,$expried_date,$description,$type,$max_price,$value,$unit);
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
    if (isset( $data->id,$data->title, $data->quantity, $data->start_date,$data->expried_date, $data->description, $data->type,$data-> max_price, $data->value,$data->unit)) {
        $id = $data->id;
        $title = $data->title;
        $quantity = $data->quantity;
        $start_date = $data->start_date;
        $expried_date = $data->expried_date;
        $description = $data->description;
        $type = $data->type;
        $max_price = $data->max_price;
        $value = $data->value;
        $unit = $data->unit;
       
        $query = "UPDATE $table SET title = ?, quantity = ?, start_date = ?,
        expried_date = ?, description = ? , type = ?, max_price = ?, value = ?, unit = ? WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("sissssiisi", $title, $quantity, $start_date ,$expried_date, $description, $type, $max_price,$value, $unit,$id);
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
        $discountId = $data->id;
        $setFields = array();
        if (isset($data->id)) {
            $setFields[] = "id = '$data->id'";
        }
        if (isset($data->title)) {
            $setFields[] = "title = '$data->title'";
        }
        if (isset($data->quantity)) {
            $setFields[] = "quantity = '$data->quantity'";
        }
        if (isset($data->start_date)) {
            $setFields[] = "start_date = '$data->start_date'";
        }
        if (isset($data->expried_date)) {
            $setFields[] = "expried_date = '$data->expried_date'";
        }
        if (isset($data->description)) {
            $setFields[] = "description = '$data->description'";
        }
        if (isset($data->type)) {
            $setFields[] = "type = '$data->type'";
        }
        if (isset($data->max_price)) {
            $setFields[] = "max_price = '$data->max_price'";
        }
        if (isset($data->value)) {
            $setFields[] = "value = '$data->value'";
        }
        if (isset($data->unit)) {
            $setFields[] = "unit = '$data->unit'";
        }
        
        $setFields = implode(", ", $setFields);
        $query = "UPDATE $table SET $setFields WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $discountId);
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
    $discountId = isset($_GET['id']) ? $_GET['id'] : null;
    if ($discountId) {
        $query = "DELETE FROM $table WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $discountId);
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

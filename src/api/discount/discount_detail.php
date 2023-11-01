<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$table = 'discount_detail';
$response = array();
$result;
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query;
    if (isset($_GET['food_order_id'])) {
        $FoodOrderId = $_GET['food_order_id'];
        $query = "SELECT * FROM $table WHERE food_order_id= ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param('s', $FoodOrderId);
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
    if (isset( $data->food_order_id, $data->discount_id)) {
        $FoodOrderId = $data->food_order_id;
        $DiscountId = $data->discount_id;
    
        $query = "INSERT INTO $table( food_order_id, discount_id) VALUES (?,?)";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("ii", $FoodOrderId, $DiscountId);
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
    if (isset($data->food_order_id, $data->discount_id)) {
        $FoodOrderId = $data->food_order_id;
        $DiscountId = $data->discount_id;
       
        $query = "UPDATE $table SET discount_id = ? WHERE food_order_id = ? ";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("ii",$DiscountId,$FoodOrderId);
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
//  elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
//     $FoodOrderId = isset($_GET['food_order_id']) ? $_GET['food_order_id'] : null;
//     $DiscountId = isset($_GET['discount_id']) ? $_GET['discount_id'] : null;

//     if ($restaurantId) {
//         $query = "DELETE FROM $table WHERE FoodOrderId = ? and DiscountId = ? ";
//         $prepareStatement = $connection->prepare($query);
//         if ($prepareStatement) {
//             $prepareStatement->bind_param("ss", $FoodOrderId,$DiscountId);
//             $prepareStatement->execute();
//             $prepareStatement->close();
//             $response['status'] = 'success';
//             $response['message'] = 'Food deleted successfully';
//         } else {
//             $response['status'] = 'error';
//             $response['message'] = 'Query preparation failed';
//         }
//     } else {
//         $response['status'] = 'error';
//         $response['message'] = 'Invalid data';
//     }
//     echo json_encode($response);
// }
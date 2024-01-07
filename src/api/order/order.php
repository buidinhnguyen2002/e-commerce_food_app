<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$tableFoodOrder = 'food_order';
$tableFoodOrderDetail = 'food_order_detail';
$tableFood = 'food';
$tableRestaurant = 'restaurant';
$response = array();
$result = null;
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query;
    if (isset($_GET['id'])) {
        $orderId = $_GET['id'];
        $query = "SELECT f.*, r.name, r.image, (SELECT SUM(quantity_ordered) FROM $tableFoodOrderDetail 
        WHERE food_order_id = f.id) as quantity_item
        FROM $tableFoodOrder f INNER JOIN $tableRestaurant r ON f.restaurant_id = r.id WHERE customer_id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param('s', $orderId);
            $prepareStatement->execute();
            $result = $prepareStatement->get_result();
            $prepareStatement->close();
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Query preparation failed';
        }
    }
    if ($result !== null && $result->num_rows > 0) {
        $products = array();
        while ($row = $result->fetch_assoc()) {
            $products[] = $row;
        }
        $response['status'] = 'success';
        $response['message'] = 'Get order successful';
        $response['data'] = $products;
        echo json_encode($response);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Not found';
        echo json_encode($response);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset(
        $data->restaurant_id,
        $data->customer_id,
        $data->customer_address_id,
        $data->deliveryDriver_id,
        $data->delivery_fee,
        $data->unit,
        $data->total_amount,
        $data->is_paid,
        $data->driver_rating_of_customer,
        $data->restaurant_rating_of_customer,
        $data->status
    )) {
        $restaurantId = $data->restaurant_id;
        $customerId = $data->customer_id;
        $customerAddressId = $data->customer_address_id;
        $deliveryDriverId = $data->deliveryDriver_id;
        $deliveryFee = $data->delivery_fee;
        $unit = $data->unit;
        $totalAmount = $data->total_amount;
        $isPaid = $data->is_paid;
        $driverRatingOfCustomer = $data->driver_rating_of_customer;
        $restaurantRatingOfCustomer = $data->restaurant_rating_of_customer;
        $status = $data->status;
        $queryAddOrder = "INSERT INTO $tableFoodOrder(restaurant_id, customer_id, customer_address_id, deliveryDriver_id, delivery_fee,unit, 
        total_amount, is_paid,driver_rating_of_customer,restaurant_rating_of_customer, status ) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
        $prepareStatement = $connection->prepare($queryAddOrder);
        $queryAddOrderDetail = "INSERT INTO $tableFoodOrderDetail(food_order_id, food_id, quantity_ordered) 
        VALUES(?,?,?)";
        $prepareStatementAddOrderDetail = $connection->prepare($queryAddOrderDetail);
        $foods = $data->foods;
        if ($prepareStatement && $prepareStatementAddOrderDetail) {
            $prepareStatement->bind_param(
                "iiiisssssss",
                $restaurantId,
                $customerId,
                $customerAddressId,
                $deliveryDriverId,
                $deliveryFee,
                $unit,
                $totalAmount,
                $isPaid,
                $driverRatingOfCustomer,
                $restaurantRatingOfCustomer,
                $status,
            );
            $prepareStatement->execute();
            $orderId = $prepareStatement->insert_id;
            $prepareStatement->close();
            foreach ($foods as $foodsItem) {
                $foodId = $foodsItem->id;
                $quantity = $foodsItem->quantity;
                $prepareStatementAddOrderDetail->bind_param("iii", $orderId, $foodId, $quantity);
                $prepareStatementAddOrderDetail->execute();
            }
            $prepareStatementAddOrderDetail->close();
            $response['status'] = 'success';
            $response['message'] = 'Add order successful';
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
        $orderId = $data->cart_id;
        $quantity = $data->quantity;
        $query = "UPDATE $tableFoodOrderDetail SET quantity = ? WHERE food_id = ? AND cart_id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("iss", $quantity, $foodId, $orderId);
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
    if (isset($data->id, $data->status)) {
        $orderId = $data->id;
        $setFields = array();
        if (isset($data->status)) {
            $setFields[] = "status = '$data->status'";
        }
        $setFields = implode(", ", $setFields);
        $query = "UPDATE $tableFoodOrder SET $setFields WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $orderId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Order information updated successfully';
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
        $orderId = $data->cart_id;
        $query = "DELETE FROM cart_detail WHERE cart_id = ? AND food_id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("ii", $orderId, $foodId);
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

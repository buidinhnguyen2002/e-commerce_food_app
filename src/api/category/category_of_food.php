<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$tableCOF = 'category_of_food';
$tableFood= 'food';
$tableCategory='category';
$response = array();
$result;
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query;
    if (isset($_GET['id'])) {
        $catId = $_GET['id'];
        $query = "SELECT f.* FROM $tableCOF fc
        JOIN $tableFood f ON fc.food_id = f.id
        JOIN $tableCategory c ON fc.category_id = c.id
        WHERE c.id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param('s', $catId);
            $prepareStatement->execute();
            $result = $prepareStatement->get_result();
            $prepareStatement->close();
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Query preparation failed';
        }
    } else {
        $query = "SELECT f.* FROM $tableCOF fc
        JOIN $tableFood f ON fc.food_id = f.id
        JOIN $tableCategory c ON fc.category_id = c.id
        WHERE c.id = ?";
        $result = $connection->query($query);
    }
    if ($result->num_rows > 0) {
        $cofs = array();
        while ($row = $result->fetch_assoc()) {
            $cofs[] = $row;
        }
        $response['status'] = 'success';
        $response['message'] = 'Get food of category successful';
        $response['data'] = $cofs;
        echo json_encode($response);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Not found';
        echo json_encode($response);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset( $data-> food_id, $data->category_id)) {
        $foodId = $data-> food_id;
        $categoryId = $data->category_id;
        $query = "INSERT INTO $table(food_id, category_id) VALUES (?,?)";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("ii", $foodId, $categoryId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Category of food created successful';
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Query preparation failed';
        }
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Invalid data';
    }
    echo json_encode($response);
}  elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $cofId = isset($_GET['food_id']) ? $_GET['food_id'] : null;
    if ($cofId) {
        $query = "DELETE FROM $table WHERE food_id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $cofId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Category of food deleted successfully';
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

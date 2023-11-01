<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$table = 'notification_detail';
$response = array();
$result;
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query;
    if (isset($_GET['notification_id'])) {
        $noticeId = $_GET['notification_id'];
        $query = "SELECT * FROM $table WHERE notification_id= ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param('s', $noticeId);
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
        $notices = array();
        while ($row = $result->fetch_assoc()) {
            $notices[] = $row;
        }
        $response['status'] = 'success';
        $response['message'] = 'Get notification detail successful';
        $response['data'] = $notices;
        echo json_encode($response);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Not found';
        echo json_encode($response);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset( $data->notification_id, $data->customer_id)) {
       
        $notificationId = $data->notification_id;
        $customerId = $data->customer_id;
       
        
        $query = "INSERT INTO $table(notification_id, customer_id) VALUES (?,?)";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("ii",  $notificationId, $customerId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Notification detail created successful';
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
//  elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
//     $data = json_decode(file_get_contents("php://input"));
//     if (isset( $data->notification_id, $data->customer_id)) {
        
//         $notificationId = $data->notification_id;
//         $customerId = $data->customer_id;
       
//         $query = "UPDATE $table SET notification_id = ?, customer_id = ? WHERE id = ? ";
//         $prepareStatement = $connection->prepare($query);
//         if ($prepareStatement) {
//             $prepareStatement->bind_param("iii", $notificationId, $customerId, $id);
//             $prepareStatement->execute();
//             $prepareStatement->close();
//             $response['status'] = 'success';
//             $response['message'] = 'Notification detail updated successful';
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
// elseif ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
//     $data = json_decode(file_get_contents("php://input"));
//     if (isset($data->id)) {
//         $noticeId = $data->id;
//         $setFields = array();
//         if (isset($data->notification_id)) {
//             $setFields[] = "notification_id = '$data->notification_id'";
//         }
//         if (isset($data->customer_id)) {
//             $setFields[] = "customer_id = '$data->customer_id'";
//         }

        
//         $setFields = implode(", ", $setFields);
//         $query = "UPDATE $table SET $setFields WHERE id = ?";
//         $prepareStatement = $connection->prepare($query);
//         if ($prepareStatement) {
//             $prepareStatement->bind_param("s", $noticeId);
//             $prepareStatement->execute();
//             $prepareStatement->close();
//             $response['status'] = 'success';
//             $response['message'] = 'Notification detail updated successfully';
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
elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $noticeId = isset($_GET['notification_id']) ? $_GET['notification_id'] : null;
    if ($noticeId) {
        $query = "DELETE FROM $table WHERE notification_id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $noticeId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Notification detail deleted successfully';
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

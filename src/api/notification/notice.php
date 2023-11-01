<?php
include '../database_connect.php';

$db = new dbConnect();
$connection = $db->getConnection();
$table = 'notification';
$response = array();
$result;
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query;
    if (isset($_GET['id'])) {
        $noticeId = $_GET['id'];
        $query = "SELECT * FROM $table WHERE id= ?";
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
        $response['message'] = 'Get notification successful';
        $response['data'] = $notices;
        echo json_encode($response);
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Not found';
        echo json_encode($response);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    if (isset( $data->title, $data->content, $data->status, $data->type)) {
       
        $title = $data->title;
        $content = $data->content;
       
        $status = $data->status;
        $type = $data->type;
        $query = "INSERT INTO $table(title, content, status, type) VALUES (?,?,?,?)";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("ssii",  $title, $content, $status, $type);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Notification created successful';
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
    if (isset($data->id, $data->title, $data->content, $data->date, $data->status, $data->type)) {
        $id = $data->id;
        $title = $data->title;
        $content = $data->content;
        $date = $data->date;
        $status = $data->status;
        $type = $data->type;
        $query = "UPDATE $table SET title = ? , content = ?, date = ?, status = ?,
        type = ? WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("sssiii", $title, $content, $date, $status, $type, $id);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Notification updated successful';
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
        $noticeId = $data->id;
        $setFields = array();
        if (isset($data->title)) {
            $setFields[] = "title = '$data->title'";
        }
        if (isset($data->content)) {
            $setFields[] = "content = '$data->content'";
        }
        if (isset($data->date)) {
            $setFields[] = "date = '$data->date'";
        }
        if (isset($data->status)) {
            $setFields[] = "status = '$data->status'";
        }
        if (isset($data->type)) {
            $setFields[] = "type = '$data->type'";
        }
        $setFields = implode(", ", $setFields);
        $query = "UPDATE $table SET $setFields WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $noticeId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Notification updated successfully';
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
    $noticeId = isset($_GET['id']) ? $_GET['id'] : null;
    if ($noticeId) {
        $query = "DELETE FROM $table WHERE id = ?";
        $prepareStatement = $connection->prepare($query);
        if ($prepareStatement) {
            $prepareStatement->bind_param("s", $noticeId);
            $prepareStatement->execute();
            $prepareStatement->close();
            $response['status'] = 'success';
            $response['message'] = 'Notification deleted successfully';
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

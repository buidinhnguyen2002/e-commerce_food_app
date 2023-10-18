<?php
include 'config.php';
class dbConnect
{
    private $connection;
    public function __construct()
    {
        $this->connection = $this->connect();
    }
    public function __destruct()
    {
        $this->disconnect();
    }
    function connect()
    {

        $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
        if ($conn->connect_error) {
            die("Kết nối đến cơ sở dữ liệu thất bại: " . $conn->connect_error);
        }
        return $conn;
    }
    function disconnect()
    {
        $this->connection->close();
    }
    public function getConnection()
    {
        return $this->connection;
    }
}

<?php
    class Database {
      protected function connect() {
        $server = localhost;
        $username = root;
        $password = "";
        try{
          $conn = new PDO("mysql:host=$server; dbname=cam2rescue_mini", $username, $password);
          $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
          return $conn;
        }catch(PDOException $e) {
          echo "ERROR: " . $e->getMessage();
        }

      }
    }
 ?>

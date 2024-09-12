<?php
include('config.php');

function connection(){
    // $host = "localhost";
    // $user = "root";
    // $pass = "root";

    // $bd = "crud_over";
    $connect = mysqli_connect(BD_SERVIDOR, BD_USUARIO, BD_PASSWORD);
    
    mysqli_select_db($connect,BD_SISTEMA);

    return $connect;

}
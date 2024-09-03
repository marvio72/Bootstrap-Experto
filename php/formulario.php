<?php

// echo json_encode("Hola desde PHP");


//TODO: Validamos que llegue algo a traves de este metodo.
if($_POST){

    //TODO: Iniciamos variables de los campos que enviamos desde javascript
    $nombre = "";
    $email = "";
    $celular = "";
    $mensaje = "";

    //TODO: Validamos la info de los campos.
    if(isset($_POST['nombre'])){
        $nombre = htmlspecialchars(trim($_POST['nombre']), ENT_QUOTES);
    }
    if(isset($_POST['email'])){
        $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    }
    if(isset($_POST['celular'])){
        $celular = filter_var(trim($_POST['celular']), FILTER_VALIDATE_INT);
    }
    if(isset($_POST['mensaje'])){
        $mensaje = htmlspecialchars(trim($_POST['mensaje']), ENT_QUOTES);
    }


    echo json_encode('Informmación desde PHP');

}
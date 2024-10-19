<?php

include('connection.php');
$con = connection();



if($_POST){
    // TODO: Declaramos variables
    $nombre = '';
    $email = '';
    $celular = '';
    $mensaje = '';
    $fyh_creacion = FECHA_CREA;
    $sitio = "OVERSISTEMAS";
    $estado = ESTADO;

    

    // TODO: Validamos campos que vienen desde JavaScript
    if(isset($_POST['nombre'])){
        $nombre = htmlspecialchars(trim($_POST['nombre']),ENT_QUOTES);
    }
    
    if(isset($_POST['email'])){
        $email = filter_var(trim($_POST['email']),FILTER_SANITIZE_EMAIL);
    }
    
    if(isset($_POST['celular'])){
        $celular = filter_var(trim($_POST['celular']),FILTER_VALIDATE_INT);
    }
    
    if(isset($_POST['mensaje'])){
        $mensaje = htmlspecialchars(trim($_POST['mensaje']),ENT_QUOTES);
    }
    

    // TODO: Valida que no este vacio el campo
    if(empty($_POST['nombre'])){
        echo json_encode(array(
            'error' => true,
            'campo' => "nombre"
        ));
        return;
    }
    if(empty($_POST['email'])){
        echo json_encode(array(
            'error' => true,
            'campo' => "email"
        ));
        return;
    }
    if(empty($_POST['celular'])){
        echo json_encode(array(
            'error' => true,
            'campo' => "celular"
        ));
        return;
    }
    if(empty($_POST['mensaje'])){
        echo json_encode(array(
            'error' => true,
            'campo' => "mensaje"
        ));
        return;
    }

    //--------------------------------
    //	TODO: Agregar registro en base de datos.
    //--------------------------------
    
    $sql = "INSERT INTO contacto(nombre,email,celular,mensaje,fyh_creacion,sitio,estado) VALUES('$nombre','$email',$celular,'$mensaje', '$fyh_creacion', '$sitio', '$estado')";
    mysqli_query($con, $sql);  


    // TODO: Cuerpo del mensaje
    $cuerpo = 'Nombre: ' . $nombre . '<br>';
    $cuerpo .= 'Email: ' . $email . '<br>';
    $cuerpo .= 'Celular: ' . $celular . '<br>';
    $cuerpo .= 'Mensaje: ' . $mensaje . '<br>';
    
    //TODO: Dirección
    $destinatario = 'sistemas@mruvalcaba.com';
    $asunto = 'Mensaje de sitio Web mruvalcaba.com';
    //TODO: Para que acepte correo con HTML
    $headers  = 'MIME-Version: 1.0' . "\r\n" .'Content-type: text/html; charset=utf-8' . "\r\n" .'From: ' . $correo . "\r\n";

    if(mail($destinatario,$asunto,$cuerpo,$headers)){

        echo json_encode(array(
            'error' => false,
            'campo' => "Correcto"
         ));
    }else{
         echo json_encode(array(
        'error' => true,
        'campo' => 'Email'
     ));
    }


}else{

    echo json_encode(array(
        'error' => true,
        'campo' => 'Post'
     ));
}
<?php

// FIXME: Importante. Solo podemos tener un echo por respuesta.


// TODO: Validamos que llegue algo a traves de este metodo.
if($_POST){

//     //TODO: Iniciamos variables de los campos que enviamos desde javascript
    $nombre = "";
    $email = "";
    $celular = "";
    $mensaje = "";

    //TODO: Validamos la info de los campos.
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
    
    //TODO: Valida que no este vacío el campo
    
   if(empty($_POST['nombre'])){
       echo json_encode(array(
           'error' => true,
           'campo' => 'nombre',
        ));
        return;
    } 
    if(empty($_POST['email'])){
        echo json_encode(array(
            'error' => true,
            'campo' => 'email',
        ));
        return;
    }
    if(empty($_POST['celular'])){
        echo json_encode(array(
            'error' => true,
            'campo' => 'celular',
        ));
        return;
    }
    if(empty($_POST['mensaje'])){
        echo json_encode(array(
            'error' => true,
            'campo' => 'mensaje',
        ));
        return;
    }
    
    // echo json_encode($nombre . ' ' . $email . ' ' . $celular . ' ' . $mensaje);
    
//     //TODO: Cuerpo del mensaje para correo electronico
//     $cuerpo = 'Nombre: ' . $nombre . '<br>';
//     $cuerpo .= 'Email: ' . $email . '<br>';
//     $cuerpo .= 'Celular: ' . $celular . '<br>';
//     $cuerpo .= 'Mensaje: ' . $mensaje . '<br>';

//     //TODO: Dirección
//     $destinatario = 'sistemas@mruvalcaba.com';
//     $asunto = "Mensaje de sitio Web Mruvalcaba";
//     //TODO: Header necesario para que acepte correo con HTML
//     $headers  = 'MIME-Version: 1.0' . "\r\n" .'Content-type: text/html; charset=utf-8' . "\r\n" .'From: ' . $correo . "\r\n";

//     //TODO: Hacer uso de la funcion mail
//     // if(mail($destinatario,$asunto,$cuerpo,$headers)){

        echo json_encode(array(
            'error' => false,
            'campo' => 'Correcto'
        ));
//     // }else{
//     //     echo json_encode(array(
//     //         'error' => true,
//     //         'campo' => 'Email'
//     //     ));
//     // }

}else{
    echo json_encode(array(
        'error' => true,
        'campo' => 'Post'
    ));
}

// echo json_encode('hola');
<?php

    if(isset($_POST['nome']) && !empty($_POST['nome']) && isset($_POST['email']) && !empty($_POST['email']) && isset($_POST['mensagem']) && !empty($_POST['mensagem'])){
        ini_set('display_errors', 1);

        error_reporting(E_ALL);

        $from = $_POST['email'];
        $to = 'asjesus1994@gmail.com';
        $subject = 'Contato site - ' + $_POST['assunto'];
        $mensagem = $_POST['mensagem'];

        $headers= "De: " + $from;

        mail($to, $subject, $message, $headers);

        echo 1;

    }

    echo 0;


?>
<?php
    // header('Location: https://'. $_SERVER['HTTPS_HOST'].'thankYou.html', true, 303);
    
    $title = $_POST["title"];
    $name = $_POST["fullname"];
    $visitorEmail = $_POST["email"];
    $message = $_POST["message"];

    $to = "gisotti@me.com";
    $subject = 'Contact form';
   
    $headers = "From: $visitorEmail \r\n";
    $headers = "Name: $name \r\n";

    $email_body = "You have recieved  new message from the user: $title - $name\n".
                    "email address: $visitorEmail\n".
                    "This is the message:\n $message";
    mail($to, $subject, $email_body, $headers);

    header('Location: thankYou.html');
    exit();
?>
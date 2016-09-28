<?php
if($_POST){
    $name = $_POST['name'];
    $subject= $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $subject = "=?UTF-8?B?".base64_encode($subject)."?=";
    $name= "=?UTF-8?B?".base64_encode($name)."?=";
    $from =  "$name <$email>";
      
    $headers   = array();
    $headers[] = "From: $from";
    $headers[] =  "Content-type: text/html; charset=UTF-8"; 

    //send email
    mail("chvdimitrov@gmail.com", $subject, $message,  implode("\r\n", $headers));
    mail("info@nikol-house.com", $subject, $message,  implode("\r\n", $headers));
}
?>

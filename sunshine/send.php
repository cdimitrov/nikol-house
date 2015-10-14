<?php
if($_POST){
    $name = $_POST['name'];
    $subject= $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $headers = 'From: ' . $name . ' <' . $email . '>';
    //send email
    mail("chvdimitrov@gmail.com", $subject, $message, $headers);
    mail("info@nikol-house.com", $subject, $message, $headers);
}
?>
<?php

if (isset($POST['submit'])) {
    $name = $_POST['first-name'];
    $mail_from = $_POST['email'];
    $message = $_POST['message'];


    $mail_to = "mitrerogelio@outlook.com";
    $headers = "From: " .$mail_from;
    $txt = "You have received an email from " .$name.".\n\n".$message;

    mail($mail_to,$subject,$txt,$headers);
    header("Location: index.php?mailsend");
}
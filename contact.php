<?php

if (isset($POST['submit'])) {
    $first_name = $_POST['first-name'];
    $last_name = $_POST['last-name'];
    $mail_from = $_POST['email'];
    $message = $_POST['subject'];


    $mail_to = "mitrerogelio@outlook.com";
    $headers = "From: " .$mail_from;
    $txt = "You have received an email from " .$first_name.".\n\n".$message;

    mail($mail_to,$subject,$txt,$headers);
    header("Location: index.php?mailsend");
}
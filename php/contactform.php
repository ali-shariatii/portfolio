<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];        
    $message = $_POST['message'];
    

    $mailTo = "info@alishariatii.com";
    $headers = "From: ".$email;
    $body = $name." has sent a message via your portfolio online form."."\n\n"."Sender's contact info:".".\n"."Email: ".$email.".\n"."Phone: ".$phone.".\n"."Message: ".$message;

    mail($mailTo, $subject, $body, $headers);
    header("Location: ../index.php?mailsent");
}
?>
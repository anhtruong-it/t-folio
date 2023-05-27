<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  // Create the email content
  $to = "anhtruong.works@gmail.com";  // Replace with your email address
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  // Send the email
  if (mail($to, $subject, $body)) {
    echo "Thank you for your submission!";
  } else {
    echo "There was a problem sending the email.";
  }
}
?>

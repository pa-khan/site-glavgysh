<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
$message;

if ($name) {
	$message .= "\nИмя: $name";
}
if ($phone) {
	$message .= "\nТелефон: $phone";
}
if ($email) {
	$message .= "\nПочта: $email";
}
$to = "e5ash.bro@gmail.com";
$headers = "Content-type: text/plain; charset = UTF-8";
$subject = "Новый заказ с сайта";
$send = mail($to, $subject, $message, $headers);
?>
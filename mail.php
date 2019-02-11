<?php  
$recepient = "alexchaika1987@gmail.com";
$sitename = "http://bestproperty.ml"

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $phone \n Почта: $email \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plan; 
	charsert=\"utf-8\"\n From: $recepient");


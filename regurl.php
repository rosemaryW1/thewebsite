<?php
require 'dbconnection.php';

$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$gender=$_POST['gender'];
$dob=$_POST['date'];
$phone=intval($_POST['phone']);
$email=$_POST['email'];
$password=$_POST['password'];

$con1= new dbcon();


$sql="insert into userdetails(firstname,lastname,gender,dob,phonenumber,email,password)values(?,?,?,?,?,?,?)";
$stmt = $con1->returnprepared($sql);
$stmt->bind_param("ssssiss",$firstname,$lastname,$gender,$dob,$phone,$email,$password);
$stmt->execute();
echo "Registered";
header("Location: signuplogin.html")

?>

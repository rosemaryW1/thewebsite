<?php
session_start();
require('dbconnection.php');
$mail=$_POST['mail'];
$pas=$_POST['pa'];
$con1= new dbcon();
$sql=" select password from userdetails where email=?";
$stmt = $con1->returnprepared($sql);
$stmt->bind_param("s",$mail);
$stmt->execute();
$result=$stmt->get_result()->fetch_assoc();
echo '<pre>';
print_r($result);
echo '</pre>';
$stu=1;
if($result['password']==$pas){
    setcookie('id',$mail,time()+3600);
    setcookie('status',$stu,time()+3600);
   
   $val= $_COOKIE['id'];
    $_SESSION['id']=$val;
    
    echo '<h1>'.$_SESSION['id'].'</h1>';
  if(isset(  $_SESSION['btn_click'])){
    header("Location: checkoutpage.php");
    
  }else{
    header("Location: indexafterlogin.php");
  }
  
   
}
else{
echo "ACCESS DENIED";
}

?>
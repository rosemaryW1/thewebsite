<?php
class dbcon{
   public $host='localhost';
public $username="root";
public $pass="";
public $db="filghtdatabase";
public  $stmt;
public $con;
function __construct() {
    $this->con=new mysqli($this->host,$this->username,$this->pass,$this->db);
  }
public function returnstmt(){

    return $this->stmt;
}
public function returnprepared($sr){
   $this->stmt=$this->con->prepare($sr);
    return $this->stmt;
   

}
public function exe($okay){
    $okay->execute();
}

}

?>
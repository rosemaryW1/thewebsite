<?php
session_start();


    $json1=$_SESSION['btn_click'];

//echo $json1;
$assocArray = json_decode($json1, true);
// echo '<pre>';
// echo print_r($assocArray);
// echo '</pre>';
// $o=" jjd ";
// echo 'true4 '.$o. 'colors
// kjnkjkjnkjnkjnkn\'
// bruv';


$compiled="";
for($j=0;$j<count($assocArray['itineraries']);$j++){
    $reusable="";
    for ($i=0; $i < count($assocArray['itineraries'][$j]['segments'])-1; $i++) {
        $reusable+='<div class="testin2">
        <div class="testinin3top">
            <span>'.$assocArray['itineraries'][$j]['segments'][$i]['arrival']['iataCode'].'</span>
        </div>
    
        <div class="testinin3">
    
        </div>
        <div class="testinin3bottom">
            
           <span>'.$assocArray['itineraries'][$j]['segments'][$i]['duration'].'</span>
        </div>
    
    </div>
    
    ';}


 $compiled.= '<div class="inclass">
         
<div class="inininclass">
    <div class="ininininclass">
        <div class="durationandstops">
            <div>
            <span>'.(count($assocArray['itineraries'][$j]['segments'])-1).' Stop</span>
            <span>32h 0m</span>
            </div>
            <div>
                <span>Arives</span>
                <span>Wednesday Decmember 14</span>
                </div>


            

        </div>
        <div class="segementsandtime">
            <img src="plane.png" width="40px" height="40px">
            <div class="timeandiata">
                <span>3:05pm</span>
                <span>'.$assocArray['itineraries'][$j]['segments'][0]['departure']['iataCode'].'</span>
                
            </div>
            
         <div class="test">
            <div class="testin">'
               
              .$reusable.'
            </div>
          
            
        </div>
        <div class="timeandiata">
            <span>3:05pm</span>
            <span>'.$assocArray['itineraries'][$j]['segments'][count($assocArray['itineraries'][$j]['segments'])-1]['arrival']['iataCode'].'</span>

        </div>
        </div>

    </div>
    <div class="inininininclass">

    </div>

</div>
<div class="outsideclass">
    <div class="commonoutsider">
    <div class="commonoutsiderinside">
        <div class="iinsi1"><span class="symbol">$</span></div>
            <div class="iinsi2"><span class="wrt">'.$assocArray['price']['grandTotal'].'</span></div>

    </div>
    <div>
   
        
    </div>
   
 </div>
</div>


</div>
';


    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div id="contain2">
    <?php echo $compiled ?>
</div>
</body>
</html>

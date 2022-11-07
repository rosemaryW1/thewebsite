
  let d1;
  let d2;
 let flightoffersjson;
 
d3=document.getElementById("od3");
d4=document.getElementById("od4")
d5=document.getElementById("od5")
d6=document.getElementById("od6")

var consumersecret="UYTmjldCjf8eL8sYHOcfwMzHswlwWvGt"
var consumerkey="DZ9OY2mvxRTwYAbS"

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  function comparecoords(arr,currentlat,currentlng){
    v=arr[0];
    c=1;
   
    arr.forEach(arrs=>{
        if (c<arr.length){
            
      
if ( getDistanceFromLatLonInKm(currentlat,currentlng,arrs[0],arrs[1])>getDistanceFromLatLonInKm(currentlat,currentlng,arr[c][0],arr[c][1])){
    
   
v=arrs
}

  c+=1;
}
    })
    return v;
  }

 

 
  function convertarrtojson(arr,currentlat,currentlng){
    jso={}
    jso['lat']=comparecoords(arr,currentlat,currentlng)[0];
    jso['lng']=comparecoords(arr,currentlat,currentlng)[1];
    return jso;
  }
  rr=[[3,41],[51,6],[7,8],[34,67],[8,9],[2,5],[15,24],[34,0],[41,8],[4,2]];
  console.log(convertarrtojson(rr,65,9));
 
  function searchairportbycountry(array,key){
    arrout=[];
    array.forEach(arr=>{
      if(arr['country']==key){
        arrout.push(arr);
      }
    })

return arrout;
  }
  function searchairportbycity(array,key){
    arrout=[];
   array.forEach(arr=>{

    if(arr['country']==key){
      arrout.push(arr);
    }
    })

    return arrout;
  }
 async function makeselecthtml(dob){
  var inside="";

  await fetch("./airports.json").then(res=>res.json()).then(res=>{
    var optioncode=""
  for(index in res ){
optioncode+=`<option value="${res[index]['name']},${res[index]['city']},${res[index]['country']}">${res[index]['name']}</option>`
  
  }
 
 dob.innerHTML=`<input type="text" list="browsers" name="airportinput" id="od"><datalist id="browsers">`+optioncode+"</datalist>"

}
  )
  

}


function functionwordspliter(srt){
  ret={}
  arr=srt.split(",");
  ret['name']=arr[0];
  ret['city']=arr[1];
  ret['country']=arr[2];


  return arr
}
async function searchusingdom(domm){
  collection={}
  await fetch("./airports.json").then(res=>res.json()).then(res=>{
   
    res.forEach(res=>{
     let D1= functionwordspliter(domm.value)[0]
     let  D2= functionwordspliter(domm.value)[1]
     let  D3=functionwordspliter(domm.value)[2]
     let D4=res['name'];
    let  D5=res['city'];
    let  D6=res['country'];
  
      if(D1==D4&&D2==D5&&D3==D6){
       collection=res;
       
      }
    })
})
return collection;``
}

//btoa(consumersecret+":"+consumerkey)
 async function gettoken(){
  var head = new Headers();

head.append('Content-Type','application/x-www-form-urlencoded');

var bod = new URLSearchParams();
bod.append("grant_type", "client_credentials");
bod.append("client_id", "UYTmjldCjf8eL8sYHOcfwMzHswlwWvGt");
bod.append("client_secret", "DZ9OY2mvxRTwYAbS");
  var accesstoken;
  var parames={
    method:'POST',
    headers:head,
    body:bod,
    redirect:'follow'
   
    

  }
 await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", parames)
  .then(response => response.json())
  .then(result => {accesstoken=result['access_token']})
  .catch(error => {console.log('error',error)});
 return accesstoken;


}
 async function fetchflightoffers(originiata,desinationiata,departuredate,returndate,adultsnum){
  var collections={};
  var head = new Headers();

head.append('Content-Type','application/x-www-form-urlencoded');
access=await gettoken();
//console.log(access)
head.append("Authorization", "Bearer "+access)
  var parames={
    method:'GET',
    headers:head,
    redirect:'follow'

  }
 await fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originiata}&destinationLocationCode=${desinationiata}&departureDate=${departuredate}&returnDate=${returndate}&adults=${adultsnum}&currencyCode=USD`, parames)
  .then(response => response.json())
  .then(result => {collections=result})
  .catch(error => {console.log('error',error)});
  
return collections


}
async function searchandcompare(key){
  arr=[]
 var coll
  var count=1;
 await fetch("./airports.json").then(res=>res.json()).then(res=>{
    res.forEach(res=>{
      if(res['country']==key){
        arr.push(res);
      }
    })
    var collectionX=arr[0];
    arr.forEach(iter=>{

      if(collectionX['carriers']<iter['carriers']){
        collectionX=iter;
      }
      
       
          })
          coll=collectionX;
    
    });
   
 
    return coll;

}



 async function  logic(origindom,desinationdom,departuredate,returndate,adultsnum){
 let searchusingdomorigindom= await  searchusingdom(origindom);
 let searchusingdomdesinationdom= await searchusingdom(desinationdom);
 let searchandcompareorigindom= await searchandcompare(searchusingdomorigindom['country']);
 let searchandcomparedesinationdom=await searchandcompare(searchusingdomdesinationdom['country']);
 let departuredatevalue=departuredate.value;
 let returndatevalue =returndate.value;
let adultsnumvalue=adultsnum.value;
let Apicall1= await fetchflightoffers(searchusingdomorigindom['code'],searchusingdomdesinationdom['code'],departuredatevalue,returndatevalue ,adultsnumvalue);


//console.log( Apicall1)
//console.log( Apicall2)
//console.log( Apicall3)
 if( Apicall1['meta']['count']==0){
  let Apicall2=await fetchflightoffers(searchandcompareorigindom['code'],searchusingdomdesinationdom['code'],departuredatevalue,returndatevalue ,adultsnumvalue);
  if ( Apicall2['meta']['count']==0){
    let Apicall3= await fetchflightoffers(searchandcompareorigindom['code'],searchandcomparedesinationdom['code'],departuredatevalue,returndatevalue ,adultsnumvalue);
    origindom.value=searchandcompareorigindom['name']+","+searchandcompareorigindom['city']+","+searchandcompareorigindom['country'];
    desinationdom.value=searchandcomparedesinationdom['name']+","+searchandcomparedesinationdom['city']+","+searchandcomparedesinationdom['country'];
   return Apicall3
  }
  else{
    origindom.value=searchandcompareorigindom['name']+","+searchandcompareorigindom['city']+","+searchandcompareorigindom['country'];
return Apicall2
  }

 }
 else {
 
  return Apicall1;
 }


}
async function btn_function(){

}


  // document.addEventListener('DOMContentLoaded',()=>{

  //  globalThis. d1=document.getElementById('od')
  //  globalThis. d2=document.getElementById('od')
  
  // })
  

async function run(){
 makeselecthtml(c1);
 makeselecthtml(c2);

 
}



run ();


 



d6.onclick= async ()=>{
//console.log(functionwordspliter("Bole International Airport,Addis Ababa,Ethiopia"))
  console.log( document.querySelectorAll('#od')[0].value)
  console.log(document.querySelectorAll('#od')[1].value) 
console.log(d3.value)
console.log(d4.value)
console.log(d5.value)





responsejson=await logic(document.querySelectorAll('#od')[0],document.querySelectorAll('#od')[1],d3,d4,d5);
compiled="";
checker=""

responsejson['data'].forEach(e=>{
 reusable="";
 btn_value=JSON.stringify(e);

  for (let i = 0; i < e['itineraries'][0]['segments'].length-1; i++) {
    reusable+=`<div class="testin2">
    <div class="testinin3top">
        <span>${ e['itineraries'][0]['segments'][i]['arrival']['iataCode']}</span>
    </div>

    <div class="testinin3">

    </div>
    <div class="testinin3bottom">
        
       <span>${ e['itineraries'][0]['segments'][i]['duration']}</span>
    </div>

</div>

`}
if(e['oneWay']){
checker="One Way"
}
else 
{
checker="Round Trip"
}

compiled+=`

<div class="inclass">
         
<div class="inininclass">
    <div class="ininininclass">
        <div class="durationandstops">
            <div>
            <span>${e['itineraries'][0]['segments'].length-1} Stop</span>
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
                <span>${ e['itineraries'][0]['segments'][0]['departure']['iataCode']}</span>
                
            </div>
            
         <div class="test">
            <div class="testin">
               
              ${reusable}
            </div>
          
            
        </div>
        <div class="timeandiata">
            <span>3:05pm</span>
            <span>${ e['itineraries'][0]['segments'][e['itineraries'][0]['segments'].length-1]['arrival']['iataCode']}</span>

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
            <div class="iinsi2"><span class="wrt">${e['price']['grandTotal']}</span></div>

    </div>
    <div>
       ${checker}
        
    </div>
    <button name="btn_click" type="submit" class="sel" value=${btn_value}>Select</button>
 </div>
</div>


</div>

`
  


})
document.getElementById('contain').innerHTML=compiled;
};




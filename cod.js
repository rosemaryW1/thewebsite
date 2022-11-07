s=document.querySelector(".sup");
s1=document.querySelector(".sin");
webu=document.getElementById("webut")
contain = document.querySelector(".con2");
contain2 = document.querySelector(".con1");
document.querySelector('.vi').addEventListener("mouseenter",()=>document.querySelector('.vi').play());
document.querySelector('.vi').addEventListener("mouseout",()=>{
    document.querySelector('.vi').currentTime = 0;
    document.querySelector('.vi').pause();});
navigator.geolocation.getCurrentPosition((pos)=>{
//console.log(pos.coords.latitude);
//console.log(pos.coords.longitude);
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=52f205630d0f98e722b73ff66f2f4ee2`).then(response=>response.json()).then(json=>{console.log(json)})
});

u=`<div class="cok">
<h2 style=\"padding:0px; margin:0px;\">Register</h2>
<form action=\"regurl.php\" method=\"post\">
<table>
    <thead>
        <tr>
            <td></td>
            <td></td>
        </tr>

    </thead>
<tbody>
    <tr>
        <td><span>First Name</span></td>
        <td><input name=\"firstname\"></td>
    </tr>
    <tr>
        <td><span>Last Name</span></td>
        <td><input name=\"lastname\"></td>
    </tr>
    <tr>
        <td><span>Gender</span></td>
        <td><input type="radio" name=\"gender\">
        <span> female</span>
        <input type="radio" name=\"gender\">
        <span> male</span>
        </td>
    </tr>
    <tr>
        <td><span>Date Of Birth</span></td>
        <td><input type="date" name=\"date\"></td>
    </tr>
    <tr>
        <td><span>phone Number</span></td>
        <td><input name=\"phone\"></td>
    </tr>
    <tr>
        <td><span>Email</span></td>
        <td><input name=\"email\"></td>
    </tr>
    <tr>
        <td><span>Password</span></td>
        <td><input name=\"password\"></td>
    </tr>
    <tr>
        <td><span>Confirm Password</span></td>
        <td><input name=\"cpasspord\"></td>
    </tr>





</tbody>
</table>

<div style="display:flex; justify-content:center;">
<button type=\"submit\" id=\"signup\" style=\"  background-color: #2276d9;
width:200px;
height:40px;
border:none;
border-radius: 20px;\">Create Account</button>

<div>
</form>
</div>`
u2=`<div class="coner0">
<h1>New Here ?</h1>
<h3>Sign up and discover a great amount of new opportunities!</h3>
<button id="signup" class=\"sin\">Sign In</button>


</div>`;
u3=` <div class="coner">
<div id ="inid" class="in1">
    <h1>Welcome back</h1>

</div>
<div  id ="inid" class="in2">
    <h4>Email</h4>
    <input>
    
</div>

<div  id ="inid" class="in3">
    <h4>Password</h4>
    <input>
    
</div>
<div id ="inid" class="in4">
    <button>Sign in</button>


</div>
</div>`
u4=` <div class="coner0">
<h1>New Here ?</h1>
<h3>Sign up and discover a great amount of new opportunities!</h3>
<button id="signup" class="sup">Sign Up</button></div>`;
s.onclick=()=>{
    contain.innerHTML=u;
    
   s.classList.add('status');
  s1.classList.remove('status');
   console.log(s.classList);


}

s1.onclick=()=>{
    contain.innerHTML=u3;
   
    s1.classList.add('status');
    s.classList.remove('status');
    console.log(s1.classList);

}

function viewdrop(){
  var ul=document.getElementById("drop1");
var li=`
<li><a class="dropdown-item" href="#">Ankle boots</a></li>
<li><a class="dropdown-item" href="#">Half boots</a></li>
<li><a class="dropdown-item" href="#">High Boots  </a></li> 
`
ul.append(li);
}

function viewbtn(){
  
    document.getElementById("pre").style.visibility='visible';
    document.getElementById("nex").style.visibility='visible';

 
}
function hide(){
  document.getElementById("pre").style.visibility='hidden';
  document.getElementById("nex").style.visibility='hidden';
}
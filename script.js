let sidebar = document.getElementById("sidebar");
let toggle = document.getElementById("toggle").onclick = function(){
if(sidebar.style.display === 'block'){
    sidebar.style.display = 'none';
}else{
    sidebar.style.display = 'block';
  
   
}
 
}

let emoji = document.getElementById("emoji");
let email = document.getElementById("emailfield");
let value =
email.addEventListener("input", function(){

if(email.value != ""){
    emoji.style.display = "none";
}else{

    emoji.style.display = "block";
}

});

email.addEventListener("blur", function() {
    // When the input loses focus, show the div element
    emoji.style.display = "block";
  });
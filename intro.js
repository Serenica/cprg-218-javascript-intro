secret.addEventListener("click",function(){
    alert("We're Going to MEXICO!!!!!!");
});

lights_on.addEventListener("click",function(){
console.log("Lights turned on");
document.getElementById("lightbulb").src = "lightbulb_on.webp";
document.getElementById("lights_on").style.display="none";
document.getElementById("lights_off").style.display = "initial";
document.getElementById('secret').style.display="initial";
document.body.classList.toggle('light');
})



lights_off.addEventListener("click",function(){
console.log("Lights turned off");
document.getElementById("lightbulb").src = "lightbulb_off.webp";
document.getElementById("lights_on").style.display="initial";
document.getElementById("lights_off").style.display="none";
document.getElementById('secret').style.display="none"
document.body.classList.toggle('light');
})
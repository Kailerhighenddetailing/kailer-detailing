const startBtn=document.getElementById("startBtn");

const welcomeScreen=document.getElementById("welcomeScreen");

const wizard=document.getElementById("wizard");

startBtn.addEventListener("click",(e)=>{

e.preventDefault();

welcomeScreen.style.display="none";

wizard.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

const vehicleCards=document.querySelectorAll(".vehicle-option");

vehicleCards.forEach(card=>{

card.addEventListener("click",()=>{

vehicleCards.forEach(c=>c.classList.remove("selected"));

card.classList.add("selected");

});

});

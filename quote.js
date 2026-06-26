const screen=document.getElementById("screen");
const progress=document.querySelector(".progress-fill");

let answers={};
let step=0;

document.getElementById("startBtn").onclick=()=>{

step=1;

showVehicle();

};

function updateProgress(){

progress.style.width=(step/8*100)+"%";

}

function showVehicle(){

updateProgress();

screen.innerHTML=`

<h1>What type of vehicle?</h1>

<div class="option" onclick="selectVehicle('Car')">
🚗 Car
</div>

<div class="option" onclick="selectVehicle('SUV / Truck')">
🚙 SUV / Truck
</div>

<div class="option" onclick="selectVehicle('Large SUV / Van')">
🚐 Large SUV / Van
</div>

`;

}

function selectVehicle(type){

answers.vehicle=type;

alert("Vehicle Selected: "+type);

}

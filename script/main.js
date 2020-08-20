//get reference to elements
const txtTaxiChoice=document.getElementById("taxiChoice");
const txtDistance=document.getElementById("distance");
const txtStartingPoint=document.getElementById("startingPoint");
let txtTaxiC=document.getElementById("taxiC");
let txtTaxiCost=document.getElementById("taxiCost");
const txtOverallOrder=document.getElementById("overOrder");
let txtOverallCost=document.getElementById("overCost");
let Currentcost;
let costPerKm;
let fuelCost;
let StayT;
//add event listener
const btnAddToOrder=document.getElementById("addOrder");
const btnReserve=document.getElementById("reserve");
const btnAddToFav=document.getElementById("AddtoFav");
const btnOrderFav=document.getElementById("orderFav");
const btnLoyaltyPoint=document.getElementById("loyalty")
btnAddToOrder.addEventListener("click",add);
btnReserve.addEventListener("click",add);
btnAddToOrder.addEventListener("click",select);
btnReserve.addEventListener("click",select);

//implement function handler
//when button click do not refresh
function select(){
    event.preventDefault();
    console.log("Handle any data");
}

//validation of form
btnAddToOrder.addEventListener("click",validateForm);
    function validateForm() {
        let rfield = document.forms["transport"]["taxiChoice"].value;
        let rfield1 = document.forms["transport"]["distance"].value;
        let rfield2 = document.forms["transport"]["stay"].value;
        let rfield3=document.forms["transport"]["start"].value;
        if (rfield == "Select") {
            alert("Select a Taxi");
            return false;
        }
        if(rfield1==""){
            alert("Enter Number of Kilometers");
            return false;
        }
        if(rfield2==""){
            alert("Select Stay");
            return false;
        }
        if(rfield3==""){
            alert("Enter Pickup Location");
            return false;
        }
    }
//when page loads
window.onload = function exampleFunction() { 
    let taxiType=document.getElementById("taxiC");
    txtTaxiC.innerText="";
    let overallOrder=document.getElementById("overOrder");
    txtOverallOrder.innerText="";
    let taxiCost=document.getElementById("taxiCost");
    txtTaxiCost.innerText=0;
    let overallCost=document.getElementById("overCost");
    txtOverallCost.innerText=0;
    console.log('The Script will load now.'); 
} 
//display Current Taxi(s)
let TChoice=document.getElementsByName("taxiChoice")[0];
TChoice.addEventListener("change",taxi);

function taxi(){
    txtTaxiC.innerText=TChoice.value;
    console.log("Taxi Choice: "+TChoice.value);
}

//update and display Current Cost of Taxi(s) when distance or type change
txtDistance.addEventListener("change",CurrentCost);
txtTaxiChoice.addEventListener("change",CurrentCost);
function CurrentCost(){
    if(TChoice.value==="Tuk-Tuk"){
        costPerKm=50;
        Currentcost=(txtDistance.value*costPerKm) ;
    }
    else if(TChoice.value==="Mini-Car"){
        costPerKm=75;
        Currentcost=txtDistance.value*costPerKm;
  
    }
    else if(TChoice.value==="Luxury Car"){
        costPerKm=100;
        Currentcost=txtDistance.value*costPerKm;
   
    }
    else if(TChoice.value==="Luxury Van"){
         costPerKm=150;
        Currentcost=txtDistance.value*costPerKm;
   
    }
    else{
         costPerKm=200;
        Currentcost=txtDistance.value*costPerKm;
   
    }
    txtTaxiCost.innerText="Rs."+Currentcost;
    console.log("Cost of Taxi(s): " +Currentcost);
}



//Add to order button
function add(){
    //overall order updating and displaying
    //output fuel effeciency type and price
    const rbtFuel=document.getElementsByName("fuel");
if(rbtFuel[0].checked){
    FuelT="High Fuel:2000 lkr";
}
if(rbtFuel[1].checked){
    FuelT="Medium Fuel:1000 lkr";
}
if(rbtFuel[2].checked){
    FuelT="Low Fuel:500 lkr";
}

//output Stay and price
const rbtStay=document.getElementsByName("stay");
if(rbtStay[0].checked){
    StayCost=costPerKm*txtDistance.value;
    StayT=` One-Way: ${StayCost} lkr`;
}
if(rbtStay[1].checked){
    StayCost=(costPerKm*txtDistance.value)*2;
    StayT=` Two-Way: ${StayCost} lkr`;
}
if(rbtStay[2].checked){
    StayCost=(((costPerKm*txtDistance.value)*2)+5000 );
    StayT=`Overnght: ${StayCost} lkr`;
}

//OverallCost of Order
if(rbtFuel[0].checked){
    fuelCost=2000;
 }
 if(rbtFuel[1].checked){
     fuelCost=1000;
 }
 if(rbtFuel[2].checked){
     fuelCost=500;
 }

 txtTaxiCost.innerText=0;
 txtTaxiC.innerText="";
 kmCost=Currentcost/txtDistance.value;
 txtOverallOrder.innerText+=`\n\n ${TChoice.value} \n Rs. ${kmCost} per Km \n ${txtDistance.value} Km \n ${FuelT} \n ${StayT}`;
 stay=StayCost;
 fullcost=Currentcost;
 prevCost=((fullcost+fuelCost)+stay);
 txtOverallCost.innerText+="\n\n"+prevCost;
}

//reserve button
btnReserve.addEventListener("click",validateReserve);
    function validateReserve() {
        let rfield = document.forms["transport"]["taxiChoice"].value;
        let rfield1 = document.forms["transport"]["distance"].value;
        let rfield2 = document.forms["transport"]["stay"].value;
        let rfield3=document.forms["transport"]["start"].value;
        if (rfield == "Select") {
            alert("Select a Taxi");
            return false;
        }
        if(rfield1==""){
            alert("Enter Number of Kilometers");
            return false;
        }
        if(rfield2==""){
            alert("Select Stay");
            return false;
        }
        if(rfield3==""){
            alert("Enter Pickup Location");
            return false;
        }
        alert("Thank You For Choosing Wild Asia Travels!");
    }
btnReserve.addEventListener("click",sub);
function sub() {
    
    txtTaxiC.innerText="";
    txtOverallOrder.innerText="";
    txtTaxiCost.innerText=0;
    txtOverallCost.innerText=0;
}

//add to favourite
btnAddToFav.addEventListener("click",addToFav);
function addToFav() { 
    const rbtFuel=document.getElementsByName("fuel");
    if(rbtFuel[0].checked){
        FuelT="High Fuel:2000 lkr";
    }
    if(rbtFuel[1].checked){
        FuelT="Medium Fuel:1000 lkr";
    }
    if(rbtFuel[2].checked){
        FuelT="Low Fuel:500 lkr";
    }
    
    //output Stay and price
    const rbtStay=document.getElementsByName("stay");
    if(rbtStay[0].checked){
        StayCost=costPerKm*txtDistance.value;
        StayT=` One-Way: ${StayCost} lkr`;
    }
    if(rbtStay[1].checked){
        StayCost=(costPerKm*txtDistance.value)*2;
        StayT=` Two-Way: ${StayCost} lkr`;
    }
    if(rbtStay[2].checked){
        StayCost=(((costPerKm*txtDistance.value)*2)+5000 );
        StayT=`Overnght: ${StayCost} lkr`;
    }
    if(rbtFuel[0].checked){
        fuelCost=2000;
     }
     if(rbtFuel[1].checked){
         fuelCost=1000;
     }
     if(rbtFuel[2].checked){
         fuelCost=500;
     }
    
     kmCost=Currentcost/txtDistance.value;
     txtOverallOrder.innerText=`\n\n${TChoice.value} \n Rs. ${kmCost} per Km \n ${txtDistance.value} Km \n ${FuelT} \n ${StayT}`;
     stay=StayCost;
     fullcost=Currentcost;
     prevCost=((fullcost+fuelCost)+stay);
     txtOverallCost.innerText="\n\n"+prevCost;
    localStorage.setItem("taxiChoice",TChoice.value);
    localStorage.setItem("taxiCost",Currentcost);
    localStorage.setItem("overallOrder",txtOverallOrder.innerText);
    localStorage.setItem("overallCost",txtOverallCost.innerText);
}
//order Favourite
btnOrderFav.addEventListener("click",OrderFav);
function OrderFav() { 
    document.getElementById("taxiC").innerText=localStorage.getItem("taxiChoice");
    document.getElementById("taxiCost").innerText=localStorage.getItem("taxiCost");
    document.getElementById("overOrder").innerText=localStorage.getItem("overallOrder");
    document.getElementById("overCost").innerText=localStorage.getItem("overallCost");
}

//loyalty points
btnLoyaltyPoint.addEventListener("click",loyaltyP);
function loyaltyP(){
    nooforders=localStorage.setItem("costofAdd",txtOverallCost.innerText.length);
    orderNo=localStorage.getItem("costofAdd");
    NoOrder=parseInt(orderNo/6);
    if(NoOrder>=4){
        loyaltyPoints= (NoOrder)*20;
        localStorage.setItem("loyaltyPoint",loyaltyPoints)
        alert("You have earned "+loyaltyPoints+" points!");
    }
    else{
        alert("Sorry! You do not have any loyalty points at the Moment!");

    }
}
 //get reference to elements
 const btnSubmit=document.getElementById("submit")
 
  //add event listener
 btnSubmit.addEventListener("click",submit);
 btnSubmit.addEventListener("click",validateForm);
//implement function handler

//get data to console when submit clicked
function submit() {
    event.preventDefault();
    console.log("Handle any data");

    console.log("Name : " +document.getElementById("name").value);
    console.log("Email : " +document.getElementById("email").value);
    console.log("Mobile : " +document.getElementById("mobile").value);
    console.log("Country : " +document.getElementById("country").value);

    console.log("Destination : " +document.getElementById("destination").value);
    console.log("Arrival : " +document.getElementById("aDate").value);
    console.log("Departure : " +document.getElementById("dDate").value);

    console.log("Adults : " +document.getElementById("adults").value);
    console.log("Children : " +document.getElementById("children").value);


    let contactRad=document.querySelector("input[name='contact']:checked").value;
    console.log("Contact : " +contactRad);
}

//outputs error message when required fields ommitted and outputs message when form submitted correctly
function validateForm() {
    let rfield = document.forms["myForm"]["email"].value;
    let rfield1 = document.forms["myForm"]["mobile"].value;
    let rfield2 = document.forms["myForm"]["destination"].value;
    if (rfield == "") {
        alert("Enter valid Email Address");
        return false;
    }
    if(rfield1==""){
        alert("Enter valid Mobile Number");
        return false;
    }
    if(rfield2==""){
        alert("Enter Destination");
        return false;
    }
    alert("Form Succesfully Submitted!\nWe will get back to you soon!");
    
}

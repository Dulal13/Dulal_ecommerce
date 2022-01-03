var upper = document.getElementById("top");
var yamaha_bike = document.getElementById("yamaha");
var suzuki_bike = document.getElementById("suzuki");
var form_h = document.getElementById("form");

yamaha_bike.style.display = "none";
suzuki_bike.style.display = "none";
form_h.style.display = "none";

const yamaha=()=>{
    yamaha_bike.style.display = "block";
    upper.style.display = "none";
    suzuki_bike.style.display = "none";
    form_h.style.display = "none"
}

const home = ()=>{
    upper.style.display = "block";
    yamaha_bike.style.display = "none";
    suzuki_bike.style.display = "none";
    form_h.style.display = "none"
}


const suzuki = ()=>{
    suzuki_bike.style.display = "block";
    yamaha_bike.style.display = "none";
    upper.style.display = "none";
    form_h.style.display = "none"
}

const form_handle = ()=>{
    form_h.style.display = "block";
    upper.style.display = "none";
    yamaha_bike.style.display = "none";
    suzuki_bike.style.display = "none";


}
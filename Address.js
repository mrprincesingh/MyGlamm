import navbar from "./navbar.js";
let x = document.getElementById("navbar");
x.innerHTML = navbar();

let Address_Data = JSON.parse(localStorage.getItem("address")) || [];
document.getElementById("shipbtn").addEventListener("click", submitfunc);
function submitfunc() {
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let pincode = document.getElementById("pincode").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let home = document.getElementById("home").value;
  let MyCheck = document.getElementById("MyCheck").value;

  let Address_obj = {
    name,
    number,
    pincode,
    city,
    state,
    home,
    MyCheck,
  };

  document.getElementById("name").value = null;
  document.getElementById("number").value = null;
  document.getElementById("pincode").value = null;
  document.getElementById("city").value = null;
  document.getElementById("state").value = null;
  document.getElementById("home").value = null;
  document.getElementById("MyCheck").checked = false;

  Address_Data.push(Address_obj);
  console.log("Address_Data: ", Address_Data);
  localStorage.setItem("address", JSON.stringify(Address_Data));
}

document.getElementById("backbtn").addEventListener("click", backfunc);
function backfunc() {
  window.location.href = "./ShopBag.html";
}

let ho = document.getElementById("ho");
let off = document.getElementById("off");
ho.addEventListener("click", function () {
  ho.style.border = "2px solid black";
  off.style.border = "0px solid black";
});
off.addEventListener("click", function () {
  off.style.border = "2px solid black";
  ho.style.border = "0px";
});
let location = document.getElementById("shipbtn").addEventListener("click",()=>{
  window.location.href = "checkout.html"
})

// let cartData =JSON.parse(localStorage.getItem("cartData"))|| []
// let data = [
//   {
//     title: "MYGLAMM LIT LIQUID MATTE LIPSTICK - SUGAR MAMA",
//     brand: "Moringa Oil Enriched Matte Lipstick",
//     price: 395,
//     color: "red",
//     details:
//       "You found The One! Trust us, ladies, this liquid matte lipstick will be your new love! The LIT Liquid Matte Lipstick by MyGlamm gives you soft, kiss-proof lips, no smudges or transfers, just pure, intense colour! Best of all, its enriched with Moringa Oil that moisturises and smoothens dry, damaged lips.",
//     type: "lipstick",
//     rating: "4.9",
//     images: {
//       image: [
//         "https://files.myglamm.com/site-images/800x800/SugrMam-(1).jpg",
//         "https://files.myglamm.com/site-images/800x800/SugrMam-(2).jpg",
//         "https://files.myglamm.com/site-images/800x800/2-LIT-lipstic-KV-BOGO-1200x1200-103-(1)_6.png",
//         "https://files.myglamm.com/site-images/800x800/vegan_25.jpeg",
//       ],
//     },
//     quantity: 4,
//     id: 1,
//   },

//   {
//     title: "MYGLAMM LIT LIQUID MATTE LIPSTICK - SUGAR MAMA",
//     brand: "Moringa Oil Enriched Matte Lipstick",
//     price: 395,
//     color: "red",
//     details:
//       "You found The One! Trust us, ladies, this liquid matte lipstick will be your new love! The LIT Liquid Matte Lipstick by MyGlamm gives you soft, kiss-proof lips, no smudges or transfers, just pure, intense colour! Best of all, its enriched with Moringa Oil that moisturises and smoothens dry, damaged lips.",
//     type: "lipstick",
//     rating: "4.9",
//     images: {
//       image: [
//         "https://files.myglamm.com/site-images/800x800/SugrMam-(1).jpg",
//         "https://files.myglamm.com/site-images/800x800/SugrMam-(2).jpg",
//         "https://files.myglamm.com/site-images/800x800/2-LIT-lipstic-KV-BOGO-1200x1200-103-(1)_6.png",
//         "https://files.myglamm.com/site-images/800x800/vegan_25.jpeg",
//       ],
//     },
//     quantity: 2,
//     id: 1,
//   },
// ];

// // let data1={
// //   title:data.title,
// //   brand:data.brand,
// //   rating:data.rating,
// //   price:data.price,
// //   color:data.color,
// //   details:data.details,
// //   id:data.id,
// //   image:data.image,
// //   type:data.type,
// //   quantity:value

// // }


// let a;

// let subTotal=0;

// let TotalAmount = document.getElementById('TotalAmount');

// function render(data) {
//   let container = document.getElementById("container");
//   container.innerHTML = null;
//   subTotal=0

//   data.forEach(function (el, index) {
//     let quantity = el.quantity;
//     console.log("quantity: ", quantity);
//     let add = document.createElement("button");
//     add.innerText = "+";

//     add.addEventListener("click", function () {
//       addFunction(el);
//     });

//     let Sub = document.createElement("button");
//     Sub.innerText = "-";

//     Sub.addEventListener("click", function () {
//       SubFunction(el);
//     });

//     let div = document.createElement("div");
//     div.setAttribute("class", "datadiv");

//     let div2 = document.createElement("div");
//     div2.setAttribute("class", "datadiv2");

//     let div3 = document.createElement("div");
//     div3.setAttribute("class", "datadiv3");

//     let div4 = document.createElement("div");
//     div4.setAttribute("class", "datadiv4");

//     let div5 = document.createElement("div");
//     div5.setAttribute("class", "datadiv5");

//     let div6 = document.createElement("div");
//     div6.setAttribute("class", "datadiv6");


//     let title1 = document.createElement("h3");
//     title1.innerText = el.title;
//     title1.setAttribute("class", "titlee");

//     let brand1 = document.createElement("h4");
//     brand1.innerText = el.brand;
//     brand1.setAttribute("class", "brand");

//     let price1 = document.createElement("h3");

//     a=el.price*quantity;
//     subTotal+=a                                 //TotalAmount
//     console.log(a);
//     price1.innerText = `₹ ${a}`;

//     price1.setAttribute("class", "pricee");

//     let color1 = document.createElement("p");
//     color1.innerText = el.color;
//     let details1 = document.createElement("p");
//     details1.innerText = el.details;
//     let type1 = document.createElement("p");
//     type1.innerText = el.type;
//     let rating1 = document.createElement("p");
//     rating1.innerText = el.rating;

//     let images1 = document.createElement("img");
//     images1.src = el.images.image[0];
//     images1.setAttribute("class", "imagess");

//     let quantity1 = document.createElement("h3");
//     quantity1.innerText = el.quantity;

//     let del = document.createElement('button')
//         del.textContent = "x"
//         del.addEventListener("click",function(){
//             removefunc(data,index);
//         });



//     div5.append(add, quantity1, Sub);
//     div4.append(title1, brand1);
//     div2.append(images1, div4, div5);
//     div3.append(price1,del);
//     div.append(div2, div3);
//     container.append(div);
    
//   });
//   TotalAmount.innerText = `₹ ${subTotal}`
// }

// render(data);

// function addFunction(el) {
//   el.quantity++;
//   console.log("el.quantity: ", el.quantity);
//   render(data);
// }

// function SubFunction(el) {
  
//   if (el.quantity == 1) {
//     alert("You Can't set the quantity less then 1")
//   }else{
//     el.quantity--;
//   }
//   render(data);
// }


// let removefunc = (data, index) => {
//   data.splice(index, 1);
//   // localStorage.setItem("cart", JSON.stringify(data));
//   render(data);
// };









// //Prince Singh

// let cartData =JSON.parse(localStorage.getItem("cartData"))|| []
// console.log(cartData) 

 
// let a; 
 
// let subTotal=0; 
 
// let TotalAmount = document.getElementById('TotalAmount'); 
 
// function render(data) { 
//   let container = document.getElementById("container"); 
//   container.innerHTML = null; 
//   subTotal=0 
 
//   data.forEach(function (el, index) { 
//     let quantity = el.quantity; 
//     console.log("quantity: ", quantity); 
//     let add = document.createElement("button"); 
//     add.innerText = "+"; 
 
//     add.addEventListener("click", function () { 
//       addFunction(el); 
//     }); 
 
//     let Sub = document.createElement("button"); 
//     Sub.innerText = "-"; 
 
//     Sub.addEventListener("click", function () { 
//       SubFunction(el); 
//     }); 
 
//     let div = document.createElement("div"); 
//     div.setAttribute("class", "datadiv"); 
 
//     let div2 = document.createElement("div"); 
//     div2.setAttribute("class", "datadiv2"); 
 
//     let div3 = document.createElement("div"); 
//     div3.setAttribute("class", "datadiv3"); 
 
//     let div4 = document.createElement("div"); 
//     div4.setAttribute("class", "datadiv4"); 
 
//     let div5 = document.createElement("div"); 
//     div5.setAttribute("class", "datadiv5"); 
 
//     let div6 = document.createElement("div"); 
//     div6.setAttribute("class", "datadiv6"); 
 
 
//     let title1 = document.createElement("h3"); 
//     title1.innerText = el.title; 
//     title1.setAttribute("class", "titlee"); 
 
//     let brand1 = document.createElement("h4"); 
//     brand1.innerText = el.brand; 
//     brand1.setAttribute("class", "brand"); 
 
//     let price1 = document.createElement("h3"); 
 
//     a=el.price*quantity; 
//     subTotal+=a                                 //TotalAmount 
//     console.log(a); 
//     price1.innerText = `₹ ${a}`; 
 
//     price1.setAttribute("class", "pricee"); 
 
//     let color1 = document.createElement("p"); 
//     color1.innerText = el.color; 
//     let details1 = document.createElement("p"); 
//     details1.innerText= el.details; 
//     let type1 = document.createElement("p"); 
//     type1.innerText = el.type; 
//     let rating1 = document.createElement("p"); 
//     rating1.innerText = el.rating; 
 
//     let images1 = document.createElement("img"); 
//     images1.src = el.image[0]; 
//     images1.setAttribute("class", "imagess"); 
 
//     let quantity1 = document.createElement("h3"); 
//     quantity1.innerText = el.quantity; 
 
//     let del = document.createElement('button') 
//         del.textContent = "x" 
//         del.addEventListener("click",function(){ 
//             removefunc(data,index); 
//         }); 
 
//     div5.append(add, quantity1, Sub); 
//     div4.append(title1, brand1); 
//     div2.append(images1, div4, div5); 
//     div3.append(price1,del); 
//     div.append(div2, div3); 
//     container.append(div); 
     
//   }); 
//   TotalAmount.innerText = `₹ ${subTotal}` 
// } 
 
// render(cartData); 
 
// function addFunction(el) { 
//   el.quantity++; 
//   console.log("el.quantity: ", el.quantity); 
//   render(cartData); 
// } 
 
// function SubFunction(el) { 
   
//   if (el.quantity == 1) { 
//     alert("You Can't set the quantity less then 1") 
//   }else{ 
//     el.quantity--; 
//   } 
//   render(cartData); 
// } 
 
 
// let removefunc = (data, index) => { 
//   data.splice(index, 1); 
//   localStorage.setItem("cartData", JSON.stringify(data)); 
//   render(cartData); 
// };

// let Address_Data = JSON.parse(localStorage.getItem("address"))||[];

// document.getElementById("checkoutbtn").addEventListener("click",checkoutfun);


// function checkoutfun() {
//   if(Address_Data.length==0){
//     window.location.href="./Address.html"
//   }else if(Address_Data.length>0){
//     window.location.href="./checkout.html"
//   }
// }





//Sahil 


let cartData =JSON.parse(localStorage.getItem("cartData"))|| []
console.log(cartData) 

let login = JSON.parse(localStorage.getItem('login'))||false
let a; 
 
let subTotal=0; 
 
let TotalAmount = document.getElementById('TotalAmount'); 
let quantArr=[]
function render(data) { 
  let container = document.getElementById("container"); 
  container.innerHTML = null; 
  subTotal=0 
 
  data.map(function (el, index) { 
    let quantity = el.quantity; 
    console.log("quantity: ", quantity); 
    let add = document.createElement("button"); 
    add.innerText = "+"; 
 
    add.addEventListener("click", function () { 
      addFunction(el,index); 
    }); 
 
    let Sub = document.createElement("button"); 
    Sub.innerText = "-"; 
 
    Sub.addEventListener("click", function () { 
      SubFunction(el,index); 
    }); 
 
    let div = document.createElement("div"); 
    div.setAttribute("class", "datadiv"); 
 
    let div2 = document.createElement("div"); 
    div2.setAttribute("class", "datadiv2"); 
 
    let div3 = document.createElement("div"); 
    div3.setAttribute("class", "datadiv3"); 
 
    let div4 = document.createElement("div"); 
    div4.setAttribute("class", "datadiv4"); 
 
    let div5 = document.createElement("div"); 
    div5.setAttribute("class", "datadiv5"); 
 
    let div6 = document.createElement("div"); 
    div6.setAttribute("class", "datadiv6"); 
 
 
    let title1 = document.createElement("h3"); 
    title1.innerText = el.title; 
    title1.setAttribute("class", "titlee"); 
 
    let brand1 = document.createElement("h4"); 
    brand1.innerText = el.brand; 
    brand1.setAttribute("class", "brand"); 
 
    let price1 = document.createElement("h3"); 
 
    a=el.price*quantity; 
    subTotal+=a                                 //TotalAmount 
    console.log(a); 
    price1.innerText = `₹ ${a}`; 
 
    price1.setAttribute("class", "pricee"); 
 
    let color1 = document.createElement("p"); 
    color1.innerText = el.color; 
    let details1 = document.createElement("p"); 
    details1.innerText= el.details; 
    let type1 = document.createElement("p"); 
    type1.innerText = el.type; 
    let rating1 = document.createElement("p"); 
    rating1.innerText = el.rating; 
 
    let images1 = document.createElement("img"); 
    images1.src = el.image[0]; 
    images1.setAttribute("class", "imagess"); 
 
    let quantity1 = document.createElement("h3"); 
    quantity1.innerText = el.quantity; 
 
    let del = document.createElement('button') 
        del.textContent = "x" 
        del.addEventListener("click",function(){ 
            removefunc(data,index); 
        }); 
 
    div5.append(add, quantity1, Sub); 
    div4.append(title1, brand1); 
    div2.append(images1, div4, div5); 
    div3.append(price1,del); 
    div.append(div2, div3); 
    container.append(div); 
     
  }); 
  TotalAmount.innerText = `₹ ${subTotal}` 
  localStorage.setItem('TotalAmount',JSON.stringify(subTotal))
} 
 
render(cartData); 
 
function addFunction(el,id) { 
  el.quantity++;
  this.quantity = el.quantity
  // console.log(item)
  // localstorage.setItem('quantity',JSON)
  // item.quantity=quantity
  let newdata= cartData.filter((el,index)=>{
    return index !== id
  })
  newdata.push(el)
  localStorage.setItem('cartData',JSON.stringify(newdata))
  console.log(newdata)
  // console.log(el.quantity)
  // console.log(el)
  
  // console.log("el.quantity: ", quantity); 
  render(cartData); 
} 
 
function SubFunction(el,id) { 
   
  if (el.quantity == 1) { 
    alert("You Can't set the quantity less then 1") 
  }else{ 
    el.quantity--;
  this.quantity = el.quantity
  // console.log(item)
  // localstorage.setItem('quantity',JSON)
  // item.quantity=quantity
  let newdata= cartData.filter((el,index)=>{
    return index !== id
  })
  newdata.push(el)
  localStorage.setItem('cartData',JSON.stringify(newdata))
  console.log(newdata)
  // console.log(el.quantity)
  // console.log(el)
  
  // console.log("el.quantity: ", quantity); 
  // render(cartData);  
  } 
  render(cartData); 
} 
 
 
let removefunc = (data, index) => { 
  data.splice(index, 1); 
  localStorage.setItem("cartData", JSON.stringify(data)); 
  render(cartData); 
};

let Address_Data = JSON.parse(localStorage.getItem("address"))||[];

document.getElementById("checkoutbtn").addEventListener("click",checkoutfun);


function checkoutfun() {
  if(login ===true){
    
  
  if(Address_Data.length==0){
    window.location.href="./Address.html"
  }else if(Address_Data.length>0){
    window.location.href="./checkout.html"
  }
}else if(login===false){
  alert('Please Login First')
  window.location.href="./index.html"
}
}




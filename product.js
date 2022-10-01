
let cartData =JSON.parse(localStorage.getItem("cartData"))|| []
// console.log(cartData)
let data = JSON.parse(localStorage.getItem("product_selected"))
// console.log(data)
let content  = document.getElementById("body");
let ImageDiv=document.getElementById("image")
let detailsDiv = document.getElementById("details");

let smallDiv = document.createElement("div");
smallDiv.setAttribute("class", "smallDiv")
for(let i=0;i<data.image.length;i++) {
    let img=document.createElement("img");
    img.src = data.image[i]
    smallDiv.append(img)
    img.addEventListener('click',()=>{
        zoom(i)
    })
}
let value =1
let quantityValue=()=>{
    value =document.getElementById('select').value
    value=+value
    // console.log(value)
}

let largeDiv=document.createElement("div");
largeDiv.setAttribute("class", "largeDiv");
let largeImg=document.createElement("img");
largeImg.src = data.image[0]
largeDiv.append(largeImg)

// let ImageDiv= document.createElement("div");
// ImageDiv.style.display="flex";
ImageDiv.append(smallDiv,largeDiv);
let append = (data) =>{
    // let image1 = document.createElement("img");
    //  image1.src = data.image;
    // content.append(ImageDiv);
    let title=document.createElement('h2')
    title.innerText=data.title;
    title.style.color= "#373738";
    title.style.fontfamily = "inherit;"
    let brand = document.createElement('p');
    brand.innerText=data.brand;
    brand.style.color  = "gray"
    let price=document.createElement('p');
    price.innerText=`₹  ${data.price}`;
    price.style.fontSize = "40px"
    let tax = document.createElement('p');
    tax.innerText="(MRP incl. of all taxes)"
    tax.style.fontSize = "10px"
    let rating = document.createElement('p');
    rating.innerText=`${data.rating} ★`;
    rating.style.color = "orange";
    let colour=document.createElement('p');
    colour.innerText=`Shade | Colour : ${data.color}`;
    colour.style.color = "gray"
    let bag=document.createElement('button');
    bag.setAttribute("class", "bag")
    bag.innerText="Add to Bag";
    bag.addEventListener('click',()=>{
        cart(data)
    })
  let div4 = document.createElement('div');
  div4.setAttribute("id","shades")
  let box1 = document.createElement('div');
  box1.setAttribute("class", "box1")
 
  let box2 = document.createElement('div');
  box2.setAttribute("class", "box2")
  let box3 = document.createElement('div');
  box3.setAttribute("class", "box3")
  let box4 = document.createElement('div'); 
  box4.setAttribute("class", "box4")
    let list = document.createElement("label");
    list.innerText = "Quantity: "  
    list.style.fontSize = "30px"
   let points = document.createElement("p");
   points.innerText = "You will receive cashback worth ₹50 as myglammPOINTS on this purchase";
   points.setAttribute("class", "points")
   let hr = document.createElement("hr");
   hr.setAttribute("class", "hr");
   let hr1 = document.createElement("hr");
   let hr2 = document.createElement("hr");
   let whats = document.createElement("h2")
   whats.innerText = "WHAT IT IS "
   let des1 = document.createElement("h1")
   des1.innerText = "DESCRIPTION";
   let review = document.createElement("h3")
   review.innerText = "Review this product";
   review.setAttribute("class", "review");
   review.style.textAlign = "center";
   let review_btn=document.createElement('button');
   review_btn.setAttribute("class", "review_btn")
   review_btn.innerText="Review";
    let des= document.createElement('p');
    des.innerText=data.details
    let quantity=document.createElement('select');
    quantity.setAttribute('id','select')
    
    quantity.addEventListener('change',()=>{
        quantityValue()
    } )
    let option1=document.createElement('option');
    option1.innerText = "1";
    option1.setAttribute('value','1');
    let option2=document.createElement('option');
    option2.innerText = "2"
    option2.setAttribute('value','2');
    let option3=document.createElement('option');
    option3.innerText="3";
    option3.setAttribute('value','3');
    let option4=document.createElement('option');
    option4.innerText="4";
    option4.setAttribute('value','4');
    let option5=document.createElement('option');
    option5.innerText="5";
    option5.setAttribute('value','5');
    quantity.append(option1,option2,option3,option4,option5)
    div4.append(box1,box2,box3,box4)
    detailsDiv.append(title,brand,rating,price,tax,colour,div4,list,quantity,bag,points,hr,whats,des1,des,hr1,review,review_btn,hr2 );  
}
let zoom=(i)=>{
    largeImg.src=data.image[i];
}
append(data)
let cart=(data)=>{

    let data1={
        title:data.title,
        brand:data.brand,
        rating:data.rating,
        price:data.price,
        color:data.color,
        details:data.details,
        id:data.id,
        image:data.image,
        type:data.type,
        quantity:value
    
    }
    cartData.push(data1);
    console.log(cartData)
    cartData= JSON.stringify(cartData);
    localStorage.setItem('cartData',cartData)
    alert("Item Added to Cart")
    
}


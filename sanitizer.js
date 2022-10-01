const url = "https://princeserver.herokuapp.com/sanitizing"

   let getdata = async ()=>{
    let res = await fetch(`${url}`)
    res = await res.json()
    render(res)
    console.log(res)
   }
getdata()
  let container  = document.getElementById("container")
  
  let render  = (data)=>{
    
    data.forEach(({title,brand,price,color,details,type,rating,images:{image},id})=>{
        let div = document.createElement("div")
        div.onclick = ()=>{
            selectfunc(title,brand,price,color,details,type,rating,image,id)
        }
        
        let title1 = document.createElement("h3")
        title1.setAttribute("class", "title")
        title1.innerText = title;
        
        let brand1 = document.createElement("h3")
        brand1.setAttribute("class", "brand")
        brand1.innerText = brand;
        brand1.style.color = "gray";
        let images1 = document.createElement("img")
        images1.setAttribute("class", "images")
        images1.src = image[0]
        let price1 = document.createElement("p")
        price1.setAttribute("class", "price")
        price1.innerText = `₹ ${price}`;
        price1.style.fontSize = "30px"

        div.append(images1,title1,brand1,price1)
        container.append(div)
    })
  }
 
  
  let selectfunc = (title,brand,price,color,details,type,rating,image,id) =>{

     let data = {
      title: title,
      brand: brand,
      price: price,
      color: color,
      price: price,
      details: details,
      type: type,
      rating: rating,
      image: image,
      id: id,
     }
  
    localStorage.setItem("product_selected" , JSON.stringify(data));
    window.location.href = "product.html"
  }



let data =[
    
    
    {
              title: "MYGLAMM LIT LIQUID MATTE LIPSTICK - SUGAR MAMA",
              brand: "Moringa Oil Enriched Matte Lipstick",
              price: "395",
              color: "red",
              details: "You found The One! Trust us, ladies, this liquid matte lipstick will be your new love! The LIT Liquid Matte Lipstick by MyGlamm gives you soft, kiss-proof lips, no smudges or transfers, just pure, intense colour! Best of all, its enriched with Moringa Oil that moisturises and smoothens dry, damaged lips.",
              type: "lipstick",
              rating: "4.9",
              images: {
                image: [
                  "https://files.myglamm.com/site-images/800x800/SugrMam-(1).jpg",
                  "https://files.myglamm.com/site-images/800x800/SugrMam-(2).jpg",
                  "https://files.myglamm.com/site-images/800x800/2-LIT-lipstic-KV-BOGO-1200x1200-103-(1)_6.png",
                  "https://files.myglamm.com/site-images/800x800/vegan_25.jpeg"
                ]
              },
              id: 1
            },

    {
              title: "MYGLAMM LIT LIQUID MATTE LIPSTICK - SUGAR MAMA",
              brand: "Moringa Oil Enriched Matte Lipstick",
              price: "395",
              color: "red",
              details: "You found The One! Trust us, ladies, this liquid matte lipstick will be your new love! The LIT Liquid Matte Lipstick by MyGlamm gives you soft, kiss-proof lips, no smudges or transfers, just pure, intense colour! Best of all, its enriched with Moringa Oil that moisturises and smoothens dry, damaged lips.",
              type: "lipstick",
              rating: "4.9",
              images: {
                image: [
                  "https://files.myglamm.com/site-images/800x800/SugrMam-(1).jpg",
                  "https://files.myglamm.com/site-images/800x800/SugrMam-(2).jpg",
                  "https://files.myglamm.com/site-images/800x800/2-LIT-lipstic-KV-BOGO-1200x1200-103-(1)_6.png",
                  "https://files.myglamm.com/site-images/800x800/vegan_25.jpeg"
                ]
              },
              id: 1
            }
   
]
console.log("data: ", data);

function render(data){

    let container = document.getElementById('container');
    container.innerHTML = null;

    data.forEach(({title,brand,price,color,details,type,rating,images:{image},id})=>{

        let div = document.createElement('div');
        div.setAttribute("class","datadiv");

        let div2 = document.createElement('div');
        div2.setAttribute("class","datadiv2");

        let div3 = document.createElement('div');
        div3.setAttribute("class","datadiv3");

        let div4 = document.createElement('div');
        div3.setAttribute("class","datadiv4");
     

        let title1 = document.createElement('h3');
        title1.innerText= title;
        title1.setAttribute("class","titlee")
        
        let brand1 = document.createElement('h4');
        brand1.innerText= brand;
        brand1.setAttribute("class","brand")

        let price1 = document.createElement('h3');
        price1.innerText= `₹ ${price}`;
        price1.setAttribute("class","pricee")

        let color1 = document.createElement('p');
        color1.innerText= color;
        let details1 = document.createElement('p');
        details1.innerText= details;
        let type1 = document.createElement('p');
        type1.innerText= type;   
        let rating1 = document.createElement('p');
        rating1.innerText= rating;

        let images1 = document.createElement('img');
        images1.src= image[0];
        images1.setAttribute("class","imagess")


        div4.append(title1,brand1)
        div2.append(images1,div4)
        div3.append(price1)
        div.append(div2,div3)
        container.append(div)
    })
}

render(data)





const subfunc=(ele,index)=> {
    ele[index].quantity--;
    if(ele[index].quantity==0){
        removefunc(ele,index)
    }
    localStorage.setItem("cart",JSON.stringify(ele));
    appand(ele);
  }

  let quantity = document.createElement('h3')
  quantity.textContent = ele.quantity;
let del = document.createElement('button')
  del.textContent = "x"
  del.addEventListener("click",function(){
      removefunc(data,index);
  });


const removefunc=(data,index)=>{
data.splice(index,1);
localStorage.setItem("cart",JSON.stringify(data));
appand(data);
}

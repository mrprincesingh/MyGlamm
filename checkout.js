let changeAddress=()=>{
    window.location.href="Address.html"
}
let payment=()=>{
    window.location.href="payment.html"
}

let data=JSON.parse(localStorage.getItem('cartData'))
console.log(data)
let cont=document.getElementById('orders')
let create=(id)=>{
    return document.createElement(id)
}
data.forEach((el) => {
    // cont.innerHTML=null;
    let div=create('div')
    div.setAttribute("class", "productdiv");
    let div1=create('div')
    div1.setAttribute('class','div11')
    let div2=create('div')
    div2.setAttribute('class','div22')
    let img=create('img')
    img.src=el.image[0]
    let p=create('p')
    p.innerText=el.title
    let price=create('p')
    price.innerText=el.price*el.quantity
    
    let quant=create('p')
    quant.innerText=el.quantity
    div1.append(img,p)
    div2.append(quant,price)
    div.append(div1,div2)
    cont.append(div)
    
});
let totalPrice=JSON.parse(localStorage.getItem('TotalAmount'))
let total=document.getElementById('mrpPrice')
total.innerText=totalPrice

let payable=document.getElementById('payablePrice')
payable.innerText=totalPrice

let address= JSON.parse(localStorage.getItem('address'))

address=address[address.length-1]
console.log(address)
let name1= document.getElementById('name')
name1.innerText=address.name
let shippingAdd= document.getElementById('shippingAdd')
shippingAdd.innerText=`${address.home}, ${address.city}, ${address.state}, ${address.pincode}`
let mobile=document.getElementById('mobile')
mobile.innerText=`Mobile :${address.number}`


let cont=document.getElementById('inp')
let buttonAppend=document.getElementById('buttonAppend')
let create=(id)=>{
    return document.createElement(id)
}
let upi=()=>{
    cont.innerHTML=null
    buttonAppend.innerHTML=null
    let input=create('input')
    input.style.height="70px"
    input.placeholder="Enter your UPI ID";
    input.setAttribute('id','upiInput')
    input.type="text"
    let btn=create('button')
    btn.innerText="REQUEST"
    btn.setAttribute('class','btnAppend')
    buttonAppend.append(btn)
    cont.append(input)
    
}

let selectBank=()=>{
    value=document.getElementById('upiInput').value
    console.log(value)
}
let net=()=>{
    // console.log(1)
    cont.innerHTML=null
    buttonAppend.innerHTML=null
    let input=create('select')
    input.setAttribute('id','upiInput')

    
    // input.setAttribute('id','bankSelect')
    input.addEventListener('change',()=>{
        selectBank()
    })
    
    input.style.height="70px"
    let option1=create('option')
    option1.innerText="CHOOSE YOUR BANK"
    let option2=create('option')
    option2.innerText="AXIS BANK"
    option2.setAttribute('value',"axis")
    let option3=create('option')
    option3.innerText="BANK OF INDIA"
    option3.setAttribute('value',"boi")
    let option4=create('option')
    option4.innerText="CENTRAL BANK OF INDIA"
    option4.setAttribute('value',"cbi")
    let option5=create('option')
    option5.innerText="HDFC BANK"
    option5.setAttribute('value',"hdfc")

    input.append(option1,option2,option3,option4,option5)
    
    
    let btn=create('button')
    btn.innerText="CONTINUE"
    btn.setAttribute('class','btnAppend')
    btn.addEventListener("click", ()=>{
        continueOrder()
    })
    buttonAppend.append(btn)
    // input.type="text"
    cont.append(input)
}
let card=()=>{
    let divMain=create('div')
    divMain.setAttribute('id','divMain')
    cont.innerHTML=null;
    buttonAppend.innerHTML=null
    let p1=create('p')
    p1.innerText="New Card"
    let div1=create('div')
    div1.setAttribute('class','div')
    let cardnum=create('p')
    cardnum.innerText="Card Number :"
    let cardnumInp=create('input')
    cardnumInp.setAttribute('class','cardnumInp')
    cardnumInp.type="text"
    cardnumInp.placeholder="XXXX-XXXX-XXXX-XXXX"
    div1.append(cardnum,cardnumInp)
    let div2=create('div')
    div2.setAttribute('class','div')
    let cardname=create('p')
    cardname.innerText="Cardholder's Name :"
    let cardnameInp=create('input')
    cardnameInp.setAttribute('class','cardnumInp')
    cardnameInp.type="text"
    cardnameInp.placeholder="eg. Jennifer Gomes"
    div2.append(cardname,cardnameInp)


    let div3=create('div')
    div3.setAttribute('class','div')
    let cardvalid=create('p')
    cardvalid.innerText="Validity :"
    let valid1=create('div')
    valid1.append(cardvalid)
    let valid2=create('div')
    valid2.setAttribute('id','valid2')
    let valid3=create('div')
    let month=create('input')
    month.type="text"
    month.placeholder="MM"
    let year=create('input')
    year.type="text"
    year.placeholder="YY"
    valid3.append(month,year)
    let valid4=create('div')
    let cvv=create('input')
    cvv.type="text"
    cvv.placeholder="CVV"
    valid4.append(cvv)
    valid3.setAttribute('id','valid3')
    valid4.setAttribute('id','valid4')
    valid2.append(valid3,valid4)
    div3.append(cardvalid,valid1,valid2)
    divMain.append(div1,div2,div3)
    


    let btn=create('button')
    btn.innerText="CONTINUE"
    btn.setAttribute('class','btnAppend')
    buttonAppend.append(btn)
    cont.append(divMain)
}
let cash=()=>{
    cont.innerHTML=null
    buttonAppend.innerHTML=null
    let div=create('div')
    let p=create('p')
    p.setAttribute('class','pCash')
    p.innerText="By selecting cash on delivery, you are choosing to pay cash to the agent when you receive your order."
    let btn=create('button')
    btn.innerText="CONFIRM & PLACE ORDER"
    // btn.setAttribute('id','btn')
    div.append(p)
    
    btn.setAttribute('class','btnAppend')
    btn.addEventListener("click", ()=>{
        confirmOrder()
    })
    buttonAppend.append(btn)
    
    cont.append(div)
    
}
let total=JSON.parse(localStorage.getItem('TotalAmount'))
let amount = document.getElementById('amount')
amount.innerText=total

let confirmOrder=()=>{
    // let nameUser=document.getElementById('user_name').value
    // console.log('inside')
    let i=0
    id=setInterval(() => {
        if(i===3){
            alert(`Your Order is successfully Placed`)
            clearInterval(id)
            // window.location.href = "index.html"
        }
        i=i+1
        // console.log(i)
    }, 1000);
}

let continueOrder=()=>{
    let input=document.getElementById('upiInput')
    if(input.value=="axis"){
        window.location.href = "https://omni.axisbank.co.in/axisretailbanking/"
    }else if(input.value=="boi"){
        window.location.href ="https://www.bankofindia.co.in/"
    }else if(input.value=="cbi"){
        window.location.href ="https://www.centralbank.net.in/#/login"
    }else if(input.value=="hdfc"){
        window.location.href ="https://netbanking.hdfcbank.com/netbanking/"
    }
}
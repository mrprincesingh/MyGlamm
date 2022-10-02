let form = document.querySelector("form")
    
// form.addEventListener("submit",signup){
  

 let signupLS=JSON.parse(localStorage.getItem("signup")) || [];

form.addEventListener("submit",function(event){
 event.preventDefault();
 let obj={
    name:form.name.value,
    email:form.email.value,
   
 }
//  console.log(obj)
if(obj.name == "" || obj.email == "" ){
    alert("Empty Field")
    
}else{
 signupLS.push(obj)
 localStorage.setItem("signup",JSON.stringify(signupLS))
 alert("Signup Sucessfullly");
 window.location.href="login.html"
}
})
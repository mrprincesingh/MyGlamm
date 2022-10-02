
 function navbar(){

    return `
       <ul class="bullet">
        <li class="first">
            <span class="text"><a href="ShopBag.html"><b>SHOPPING BAG</b></a></span>
        </li>
        <li class="first">
            <span class="text"><a href="Address.html"><b>SELECT ADDRESS</b></a></span>
        </li>
        <li class="first">

            <span class="text"><a href="checkout.html"><b>CHECKOUT</b></a></span>
        </li>
        <li class="first">
            <span class="text"><a href="payment.html"><b>PAYMENT</b></a></span>

        </li>
       </ul>  
       <div id="logo2">
        <a href=""><img src="https://files.myglamm.com/site-images/original/no-user-yellow.png"  alt=""></a> 
        <select name="" id="">
            <option value="user">User</option>
            <option value="">My profile</option>
            <option value="">My Orders</option>
            <option value="">My Dashboard</option>
            <option value="">MyGlammXO Party</option>
            <option value="">Logout</option>
        </select>
       </div>`
 }

 export default navbar;
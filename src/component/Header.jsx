import React from "react";
import i5 from './img/i5.png';


function Header(){
return(

<div class="navbar">
    <h1>Fantezie</h1>
    <img src={i5} alt=""/>
    <ul>
        <li><a href="index.html">Acasă</a></li>
        <li><a href="#about">Despre noi</a></li>
        <li><a href="#products">Produse</a></li>
        <li><a href="#promotions">Promoții</a></li>
        <li><a href="#contacts">Contacte</a></li>
    </ul>
</div>


)

}
export default  Header;
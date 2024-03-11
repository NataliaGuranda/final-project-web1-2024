import React from "react";
import i5 from './img/i5.png';
import { Link } from 'react-router-dom';


function Header(){
return(

<div class="navbar">
    <h1>Fantezie</h1>
    <img src={i5} alt=""/>
    <ul>
       <Link to="/" className="menu-link">Acasă</Link>
        <li><a href="#about">Despre noi</a></li>
        <Link to="/Produse" className="menu-link">Produse </Link>
        <li><a href="#promotions">Promoții</a></li>
        <Link to="/Contact" className="menu-link">Contact </Link>
    </ul>
</div>



)

}
export default  Header;
import React from "react";
import i1 from './img/i1.png';


function Content(){
return(
<div class="content">
    <div class="content-text">
        <h2>"Creăm momente dulci pentru fiecare gust și ocazie"</h2>
        <div class="stats">
            <div>
                <strong>50+</strong>
                <p>Torturi</p>
            </div>
            <div>
                <strong>1000+</strong>
                <p>Beneficiari</p>
            </div>
        </div>
        <div class="search-box">
            <input type="text" placeholder="Ce căutați?"/>
            <button>🔍</button>
        </div>
    </div>
    <div class="content-image">
        <img src={i1}  alt="Imagine Descriptiva"/>
    </div>
</div>
)
}
export default Content;
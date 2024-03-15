import React, { useContext } from 'react';
import CartContext from './CartContext';
import i11 from './img/i11.jpg';
import i12 from './img/i12.jpg';
import i13 from './img/i13.jpg';
import i14 from './img/i14.jpg';
import i15 from './img/i15.jpg';
import i16 from './img/i16.jpg';
import i17 from './img/i17.jpg';
import i18 from './img/i18.jpg';
import i19 from './img/i19.jpg';
import i20 from './img/i20.jpg';
import i21 from './img/i21.jpg';
import i23 from './img/i23.jpg';
import a1 from './img/a1.jpg';
import a2 from './img/a2.jpg';
import a3 from './img/a3.jpg';
import a4 from './img/a4.jpg';
import a5 from './img/a5.jpg';
import n1 from './img/n1.jpg';
import n2 from './img/n2.jpg';
import n3 from './img/n3.jpg';
import n4 from './img/n4.jpg';


function Produse(){
    const { addToCart } = useContext(CartContext);

    const products = [
        { id: 11, name: 'Cupcake cu mango', price: 20, image: i11 },
        { id: 12, name: 'Cupcake cu ciocolată naturală', price: 20, image: i12 },
        { id: 13, name: 'Cupcake cu zmeură', price: 20, image: i13 },
        { id: 14, name: 'Cupcake cu vanilie', price: 22, image: i14 },
        { id: 15, name: 'Cupcake cu fructe', price: 25, image: i15 },
        { id: 16, name: 'Produs 6', price: 100, image: i16 },
        { id: 17, name: 'Produs 7', price: 100, image: i17 },
        { id: 18, name: 'Produs 8', price: 100, image: i18 },
        { id: 19, name: 'Produs 9', price: 100, image: i19 },
        { id: 20, name: 'Produs 10', price: 100, image: i20 },
        { id: 21, name: 'Produs 11', price: 100, image: i21 },
        { id: 23, name: 'Produs 12', price: 100, image: i23 },
        { id: 'a1', name: 'Produs Aniversare 1', price: 150, image: a1 },
        { id: 'a2', name: 'Produs Aniversare 2', price: 200, image: a2 },
        { id: 'a3', name: 'Produs Aniversare 3', price: 180, image: a3 },
        { id: 'a4', name: 'Produs Aniversare 4', price: 220, image: a4 },
        { id: 'a5', name: 'Produs Aniversare 5', price: 190, image: a5 },
        { id: 'n1', name: 'Produs Nuntă 1', price: 300, image: n1 },
        { id: 'n2', name: 'Produs Nuntă 2', price: 250, image: n2 },
        { id: 'n3', name: 'Produs Nuntă 3', price: 280, image: n3 },
        { id: 'n4', name: 'Produs Nuntă 4', price: 320, image: n4 },
    ];
return(
    <>
<div className="produse1">Cupcake</div>
<br></br><br></br>
        <section className="img_shop_1">
            <div className="img_shop">
                <img src={i11} alt="Cupcake cu mango" />
                <div className="product_info">
                    <span className="product_name">Cupcake cu mango</span>
                    <span className="product_price">20 Lei</span>
                    <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu mango', price: 20, image: i11})}>Cumpără</button>
                </div>
            </div>
        
    <div class="img_shop">
    <img src={i12}/>
        <div class="product_info">
            <span class="product_name">Cupcake cu ciocolată naturală</span>
            <span class="product_price">20 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu ciocolată naturală', price: 20, image: i12})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop">
    <img src={i13}/>
        <div class="product_info">
            <span class="product_name">Cupcake cu zmeură</span>
            <span class="product_price">20 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu zmeură', price: 20, image: i13})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop">
    <img src={i14}/>
        <div class="product_info">
            <span class="product_name">Cupcake Poni</span>
            <span class="product_price">22 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu vanilie', price: 22, image: i14})}>Cumpără</button>
        </div>
    </div>
</section>
<br/> <br/>
<section class="img_shop_2">
    <div class="img_shop">
    <img src={i15}/>
        <div class="product_info">
            <span class="product_name">Cupcake cu fructe</span>
            <span class="product_price">25 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu fructe', price: 25, image: i15})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop">
    <img src={i16}/>
        <div class="product_info">
            <span class="product_name">Produs 6</span>
            <span class="product_price">100 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu mango', price: 20, image: i16})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop">
    <img src={i17}/>
        <div class="product_info">
            <span class="product_name">Produs 7</span>
            <span class="product_price">100 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu mango', price: 20, image: i17})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop">
    <img src={i18}/>
        <div class="product_info">
            <span class="product_name">Produs 8</span>
            <span class="product_price">100 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu mango', price: 20, image: i18})}>Cumpără</button>
        </div>
    </div>
</section>
<br/> <br/>
<section class="img_shop_3">
    <div class="img_shop">
    <img src={i19}/>
        <div class="product_info">
            <span class="product_name">Produs 9</span>
            <span class="product_price">100 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu mango', price: 20, image: i19})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop">
    <img src={i20}/>
        <div class="product_info">
            <span class="product_name">Produs 10</span>
            <span class="product_price">100 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu mango', price: 20, image: i20})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop">
    <img src={i21}/>
        <div class="product_info">
            <span class="product_name">Produs 11</span>
            <span class="product_price">100 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu mango', price: 20, image: i21})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop">
    <img src={i23}/>
        <div class="product_info">
            <span class="product_name">Produs 12</span>
            <span class="product_price">100 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu mango', price: 20, image: i23})}>Cumpără</button>
        </div>
    </div>
</section> <br/>

<br></br>
<div className="produse1">Pentru Aniversări</div>
        <section className="img_shop_1">
    <div class="img_shop_a">
    <img src={a2} height="270" width="270px"/>
        <div class="product_info">
            <span class="product_name">Produs Aniversare 2</span>
            <span class="product_price">200 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu mango', price: 20, image: i11})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop_a">
    <img src={a3} height="270" width="270px"/>
        <div class="product_info">
            <span class="product_name">Produs Aniversare 3</span>
            <span class="product_price">180 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu mango', price: 20, image: i11})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop_a">
    <img src={a4} height="270" width="270px"/>
        <div class="product_info">
            <span class="product_name">Produs Aniversare 4</span>
            <span class="product_price">220 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu mango', price: 20, image: i11})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop_a">
    <img src={a5} height="270" width="270px"/>
        <div class="product_info">
            <span class="product_name">Produs Aniversare 5</span>
            <span class="product_price">190 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu mango', price: 20, image: i11})}>Cumpără</button>
        </div>
    </div>
</section> <br/>
<br></br>
<div className="produse1">Pentru Nuntă</div>
        <section className="img_shop_1">
    <div class="img_shop_a">
    <img src={n2} height="270" width="270px"/>
        <div class="product_info">
            <span class="product_name">Produs Nuntă 2</span>
            <span class="product_price">250 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu mango', price: 20, image: i11})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop_a">
    <img src={n3} height="270" width="270px"/>
        <div class="product_info">
            <span class="product_name">Produs Nuntă 3</span>
            <span class="product_price">280 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu mango', price: 20, image: i11})}>Cumpără</button>
        </div>
    </div>
    <div class="img_shop_a">
    <img src={n4} height="270" width="270px"/>
        <div class="product_info">
            <span class="product_name">Produs Nuntă 4</span>
            <span class="product_price">320 Lei</span>
            <button className="buy_button" onClick={() => addToCart({name: 'Cupcake cu mango', price: 20, image: i11})}>Cumpără</button>
        </div>
    </div>
</section> <br/>
</>
)
}
export default Produse;
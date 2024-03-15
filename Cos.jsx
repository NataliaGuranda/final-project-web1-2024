
import React, { useContext } from 'react';
import CartContext from './CartContext';
function Cos() {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleCheckout = () => {
    console.log('Procesul de cumpărare a fost inițiat.');
  };

  return (
    <div>
      <h2>Coș de cumpărături</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} className="cos_img" />
              {item.name} - {item.price} Lei
              <button className="delete_button" onClick={() => removeFromCart(item.id)}>Șterge</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Coșul este gol.</p>
      )}
      <button className="buy_button" onClick={handleCheckout}>Cumpără</button>
    </div>
  );
}
export default Cos;
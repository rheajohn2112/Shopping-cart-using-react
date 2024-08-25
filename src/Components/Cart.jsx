import React from 'react';
import "./Cart.css"


const Cart = ({ cart ,removeFromCart}) => {
    return (
        <div className='cart'>
            <h2 className='ur'>Your Cart</h2>
            {cart.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <div className="cartfull">
                    {cart.map((item) => (
                        <div className='indi' key={item.id}>
                            <div className='rhea'>
                            <img className=" cartimg"src={item.image} alt={item.title} />
                            <div>
                                <h3 className='carttit'>{item.title}</h3>
                                <p>${item.price}</p>
                            </div>
                            </div>
                            <div className='john'>
                            <button className='shr' onClick={() => removeFromCart(item)}><img className="trash"src="data:image/png;base64,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"/></button>
                            </div>
                        </div>
                       
                    ))}
                </div>
            )}
         
        </div>
    );
};

export default Cart;

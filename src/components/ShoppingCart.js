import React from "react";

export default function ShoppingCart(props) {
    let cart = props.cart;
    var total = 0;
    for(const cartItem of cart){
        total = total + cartItem.quantity;
    }

    const remove = props.remove;

    return (
        <div class='shopping-cart'>
            <h1> Shopping Cart (Total:{total} ) </h1>
            <hr />
            <ul class='cart-items'>
                {
                cart.map((cart) => {
                    return (
                    <div class='cart-item-card'> 
                        <p> {cart.itemName} </p>
                        <p> QTY: {cart.quantity} </p>
                        <button class='delete-cart-item' onClick={() => remove(cart.itemName)}> X </button>
                    </div>
                    )
                })
                }
            </ul>
        </div>
    )
}
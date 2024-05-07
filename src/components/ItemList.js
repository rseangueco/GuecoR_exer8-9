import React, {useState} from "react";
import ShoppingCart from "./ShoppingCart";

export default function ItemList(props) {
    let items = props.data;
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((cart) => {
            const isInCart = cart.find(cartItem => cartItem.itemName === item.name)
            console.log('Added ' + item.name +' to cart');

            if(isInCart){
                return cart.map(cartItem => {
                    if(cartItem.itemName === item.name) {
                        return { ...cartItem, quantity: cartItem.quantity + 1};
                    }
                    else {
                        return cartItem;
                    }
                })
            } else {
                return [...cart, {itemName: item.name, quantity:1}];
            }
        })
    }

    const removeFromCart = (itemName) => {
        setCart((cart) => {
            console.log('Removed ' + itemName +' from cart');

            const newCart = cart.map(cartItem => {
                if(cartItem.itemName === itemName) {
                    if(cartItem.quantity == 1){
                        return null;
                    }
                    else {
                        return { ...cartItem, quantity: cartItem.quantity - 1};
                    }
                }
                else {
                    return cartItem;
                }
            }).filter(Boolean)

            return newCart;
        })
    }

    return (
        <>
        <ul class='item-section'>
            {
                items.map((items) => {
                    return (
                    <div class='item'>
                        <img class='item-image' src={items.image} alt='no image'/>
                        <p class='item-name'> {items.name} </p>
                        <button class='add-button' onClick={() => addToCart(items)}> Add to Cart </button>
                    </div>
                    )
                })
            }
        </ul>
        <ShoppingCart cart={cart} remove={(itemName) => removeFromCart(itemName)}/>
        </>
    )
}
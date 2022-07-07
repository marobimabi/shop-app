import { useState,createContext } from "react";

const addCartItem = (cartItems, productToAdd) =>{
    const existingCatItem = cartItems.find((cartItem)=> cartItem.id === productToAdd.id);

    if (existingCatItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity+1} : cartItem);
    }

    return [...cartItems, {...productToAdd, quantity:1}];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIscartOpen: () => { },
    cartItems: [],
    addItemToCart: () => {} ,

});

export const CartProvider = ({children}) =>{
    const [isCartOpen, setIscartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
     
    const addItemToCart =(product) => {
        setCartItems(addCartItem(cartItems,product))

    }
     
    const value= {isCartOpen, setIscartOpen,addItemToCart, cartItems};
    return(
        <CartContext.Provider value={value}>
           {children}
        </CartContext.Provider>
    );
}

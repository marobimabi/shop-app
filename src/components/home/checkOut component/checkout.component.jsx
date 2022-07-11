import { useContext } from 'react';
import { CartContext } from '../../../contexts/context component/cart.context';
import CheckoutItem from '../../checkout-item/checkout-item.component';

import  './checkout.styles.scss'


const CheckOut = () =>{
    const { cartItems} = useContext(CartContext);

    return(
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>

            </div>
            <div className='header-block'>
                <span>Description</span>

            </div>
            <div className='header-block'>
                <span>Quantity</span>

            </div>
            <div className='header-block'>
                <span>Price</span>

            </div>
            <div className='header-block'>
                <span>Remove</span>

            </div>
            
        </div>
        {
            cartItems.map((cartItem) => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />) )
        }
        <pan className='total'>Total: 0</pan>
        </div>
    )
}

export default CheckOut;
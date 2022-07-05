import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/context component/cart.context'
import { useContext } from 'react'

const CartIcon = () =>{

    const {isCartOpen, setIscartOpen} = useContext(CartContext);
    const toggleIsCartOpen = () =>{ setIscartOpen(!isCartOpen)};
   return( 

    <div className='cart-icon-container'>
         
         <ShoppingIcon className='shopping-icon' onClick={toggleIsCartOpen} />
         <span className='item-count'>0</span>

    </div>
    )
}
export default CartIcon;
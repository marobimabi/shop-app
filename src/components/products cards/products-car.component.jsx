import './products-car.styles.scss'
import Button from '../button component/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/context component/cart.context';


const ProductCard = ({product}) =>{
    const {name, price , imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return(
        <div className='product-card-container'>
            <img className='image'src={imageUrl} alt={`${name}`} ></img>
            <div className='footer'>

                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
                
            </div>
            <Button buttonType='inverted' onClick={addProductToCart} >Add To Cart</Button>
        </div>
    );
}

export  default ProductCard;
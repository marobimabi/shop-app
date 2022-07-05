import './products-car.styles.scss'
import Button from '../button component/button.component';

const ProductCard = ({product}) =>{
    const {name, price , imageUrl} = product;

    return(
        <div className='product-card-container'>
            <img className='image'src={imageUrl} alt={`${name}`} ></img>
            <div className='footer'>

                <span className='name'>{name}</span>
                <span className='price'>{price}</span> 

            </div>
            <Button buttonType='inverted'>Buy Now</Button>
        </div>
    );
}

export  default ProductCard;
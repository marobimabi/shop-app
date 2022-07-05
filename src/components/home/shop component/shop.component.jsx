
import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/context component/products.context';
import ProductCard from '../../products cards/products-car.component';
import './shop.styles.scss'

const Shop = () =>{
    const {products} = useContext(ProductsContext);

    return(
        <div className='products-container'>
            {
              products.map((product) => (  <ProductCard key={product.id}  product={product} /> ))
            }
        </div>
    );
}

export default Shop;

import { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../../contexts/context component/categories.context';
import ProductCard from '../../products cards/products-car.component';
import './shop.styles.scss'

const Shop = () =>{
    const {categoriesMap} = useContext(CategoriesContext);

    return(
        <Fragment>

            {
                Object.keys(categoriesMap).map(title =>(
                    <Fragment key={title}>
                        <h1>{title}</h1>
                        <div className='products-container'>
                            {
                                categoriesMap[title].map((product) => (  <ProductCard key={product.id}  product={product} /> ))
                            }
                        </div>
                    </Fragment>
                ))
            }
            
        </Fragment>
        
    );
}

export default Shop;
import { Fragment, useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';
import { ReactComponent as  CrwnLogo} from '../../../assets/crown.svg';
import { UserContext } from '../../../contexts/context component/user.context';
import { signOutUser } from '../../../utils/firebase/firebase.utiles';
import CartIcon from '../../cart icon/cart-icon.component';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../../contexts/context component/cart.context';

import './navigation.style.scss'


  const Navigation = () =>{
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    
 return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                   <CrwnLogo className='logo'/>
                </Link>
                
                <div className='nav-links-container'>
                  <Link className='nav-link' to='/shop'>
                    SHOP
                  </Link>
                  {
                    currentUser ? (<span className='nav-link' onClick={signOutUser} >
                      {' '} SIGN OUT {' '} </span> ) :
                      
                      (
                      <Link className='nav-link' to='/auth'>
                      SIGN IN
                      </Link>
                      ) 
                  }
                  <CartIcon/>
    
                </div>
                 {
                   isCartOpen && <CartDropdown/>
                 }
            </div>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;
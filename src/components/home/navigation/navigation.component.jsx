import { Fragment, useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';
import { ReactComponent as  CrwnLogo} from '../../../assets/crown.svg';
import { UserContext } from '../../../contexts/context component/context.component';
import { signOutUser } from '../../../utils/firebase/firebase.utiles';
import './navigation.style.scss'


const Navigation = () =>{
  const {currentUser, setcurrentUser} = useContext(UserContext);
  console.log(currentUser);
const signOutHandler = async() =>{
 await signOutUser();
 setcurrentUser(null);

}


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
                    currentUser ? (<span className='nav-link' onClick={signOutHandler} >SIGN OUT</span> ) :
                      
                      (
                      <Link className='nav-link' to='/auth'>
                      SIGN IN
                      </Link>
                      ) 
                  }
                  
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;
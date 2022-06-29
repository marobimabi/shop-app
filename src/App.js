import Home from './components/home/home-component/home.component';
import { Routes, Route, Outlet} from 'react-router-dom';
import Navigation from './components/home/navigation/navigation.component';
import SignIn from './components/home/sign in/sign-in.component';

const Shop = ()=>{
  return <h1 className='__header'>Here is the shop Component</h1>;
}

const App = () => {
  return (
    <Routes>

      <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='sign-in' element={<SignIn />} />
      </Route>
      

    </Routes>  
  );
}

export default App;

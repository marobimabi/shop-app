import logo from './logo.svg';
import './App.css';

const App = () => {
  const categories = [
    {
      id : 1,
      title : 'HATS'
    },
    {
      id : 1,
      title : 'SNEAKERS'
    },
    {
      id : 1,
      title : 'HATS'
    },
    {
      id : 1,
      title : 'MENS'
    },
    {
      id : 1,
      title : 'WOMENS'
    }
  ]
  return (
    <div className='categories-container'>
     {
      categories.map(({title}) => (
      <div className='category-container'>
      {/*<img></img>*/}
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>

      ))
     }
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './categories.styles.scss';
import CategoryItem from '../src/components/category-item/category-item.component';

const App = () => {
  const categories = [
    {
    "id": 1,
    "title": "HATS",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "JACKETS",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 3,
    "title": "SNEAKERS",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "WOMENS",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "MENS",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  }
  ]
  return (
    <div className='categories-container'>
      {
      categories.map((category) => (
      
    <CategoryItem category={category} />)

      )
     }
    </div>
  );
}

export default App;

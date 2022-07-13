import './category-directory.style.scss';
import CategoryItem from '../directory-item/directory-item.component.jsx';
//import CategoryItem from '../src/components/category-item/category-item.component';


const CategoryDirectory = ({categories}) =>{
  //  const {directory} = categories;

    return(
        <div className='directory-container'>
      {
      categories.map((category) => (
      
      <CategoryItem key={category.id} category={category} />)

      )
     }
    </div>

    );
}

export default CategoryDirectory
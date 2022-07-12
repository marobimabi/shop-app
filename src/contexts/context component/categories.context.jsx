import { createContext, useState,useEffect } from "react";
/* import SHOP_DATA from '../../shop-data';
 */
import { getCategoryAndDocument } from "../../utils/firebase/firebase.utiles";

export const CategoriesContext = createContext(
    {
     categoriesMap: {},   
    }
);
export const CategoriesProvider = ({children}) =>{
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() =>{
        const getcategoriesMap = async () =>{
            const categoryMap = await getCategoryAndDocument();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }
        getcategoriesMap();
   
    },[]);
    /**I just used to create my db and no need to create him again and again
     * 
     */
    // 
    // useEffect(()=>{
    //      addCollectionAndDocuments('categories',SHOP_DATA);
    // },[])
    const value = {categoriesMap};

        return(
            <CategoriesContext.Provider value={value}>
              {children}
            </CategoriesContext.Provider>
        );

};


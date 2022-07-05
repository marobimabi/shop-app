import { createContext, useState, useEffect} from "react";
import { onAuthStateChangeListner, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utiles";

export const UserContext = createContext({
    currentUser : null,
    setcurrentUser: () =>  null

});
export const UserProvider = ({children}) =>{
   const [currentUser, setcurrentUser] = useState();
   const value = {currentUser,setcurrentUser};

   
   
   useEffect(() => {
    const unSubscribe = onAuthStateChangeListner((user)=>{
        if(user){
            
            createUserDocumentFromAuth(user);
        }
        setcurrentUser(user)})
    return unSubscribe;

   },[]);

   return(
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>

   );

};


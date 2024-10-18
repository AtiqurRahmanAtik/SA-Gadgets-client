import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../Componets/Firebase/Firebase.config";

export const authContext = createContext(null);

const AuthProvider = ({children}) => {

   
    const [user,setUser] = useState('');


    // singUp
    const singUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    // singIn
    const singIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }



    const authUser ={
        user,
        singUp,
        singIn

    }

    

    return (
        <authContext.Provider value={authUser}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
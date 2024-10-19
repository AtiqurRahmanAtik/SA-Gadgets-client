import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../Componets/Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const authContext = createContext(null);

const GoogleProvider = new GoogleAuthProvider();

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

    // googleSingIN
    const googleSingUp = ()=>{
         return signInWithPopup(auth, GoogleProvider);
    }



    const authUser ={
        user,
        singUp,
        singIn,
        googleSingUp

    }

    

    return (
        <authContext.Provider value={authUser}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
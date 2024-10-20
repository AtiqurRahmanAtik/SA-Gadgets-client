import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Componets/Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";


export const authContext = createContext(null);

const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();


const AuthProvider = ({children}) => {


    const [user,setUser] = useState('');
    const [isLoading, SetIsLoading] = useState(true);

  

    const singUp = (email,password)=>{
        SetIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
        
    }

    // singIn

    const singIn = (email,password)=>{
        SetIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // googleSingIN
    const googleSingUp = ()=>{
        SetIsLoading(true);
         return signInWithPopup(auth, GoogleProvider);
    }
    

    // FacebookSingIn
    const facebookSingIn =()=>{
        SetIsLoading(true);
        return signInWithPopup(auth, FacebookProvider)
    }


    // SingOut 
    const userSignOut = ()=>{
        SetIsLoading(true);
        return signOut(auth);
       
    }

    // Observer a get User info
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
            if(currenUser){
                setUser(currenUser);
                SetIsLoading(false);

                console.log('on auth SateChange : ', currenUser);

            }
        })

        return ()=> {
            unsubscribe();
        }

    },[]);


    const authUser ={
        user,
        singUp,
        singIn,
        googleSingUp,
        facebookSingIn,
        isLoading,
        userSignOut


    }

    

    return (
        <authContext.Provider value={authUser}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
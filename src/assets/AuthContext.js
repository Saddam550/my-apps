import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { useContext, useEffect, useState } from "react";
import './firebase';
import App from './firebase';
const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({children}){    
    const [loding, setloding] = useState(true);
    const [currentUser , setCarrentUser]= useState();

    //Signup function
    async function signup(email, password, username) {
    const Auth = getAuth(App)
    await createUserWithEmailAndPassword(Auth, email, password) 
     await updateProfile(Auth.currentUser, {
    displayName:username
})
const user =  Auth.currentUser
            setCarrentUser({
                ...user
            })
}

//login function
function login(email, password) {
    const Auth = getAuth(App)
    return signInWithEmailAndPassword(Auth, email, password) 
}

//logout function
function logout() {
    const Auth = getAuth(App)
  return signOut(Auth) 

}
useEffect(() => {
    const Auth = getAuth(App)
   const unsubscribe  = onAuthStateChanged(Auth,(user)=>{
    setCarrentUser(user)
    setloding(false)
    } )
return unsubscribe
},);

const value ={
    currentUser,
    signup,
    login,
    logout
}

   return(
    <AuthContext.Provider value={value}>
{loding && children}
    </AuthContext.Provider>
   );
}
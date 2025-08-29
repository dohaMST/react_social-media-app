import { createContext, useEffect, useState } from "react";
import PHS from '../assets/PHS.jpg'

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    // const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const [currentUser, setCurrentUser] = useState(() => {
      try {
        return JSON.parse(localStorage.getItem("user")) || null;
      } catch {
        return null;
      }
    });

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    },[currentUser])

    const login =()=>{
        setCurrentUser({
            id:1,
            name:"Doha MST",
            profilePic: PHS,
        })
    }

    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
}
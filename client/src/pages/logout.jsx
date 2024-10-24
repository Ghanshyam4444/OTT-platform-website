import { useEffect } from "react"
import { useAuth } from "../store/auth"
import { Navigate } from "react-router-dom";


export const Logout = () =>{
    const {logout_user}= useAuth();
    useEffect(()=>{
        logout_user();
    },[])
    return(<>
        <Navigate to= "/login" />
    </>)
}
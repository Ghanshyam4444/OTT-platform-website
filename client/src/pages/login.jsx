import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
export const Login = () => {
    const [data,setData]=useState({
        email:"",
        password:"",
    })
    const {storeTokenInLS} =useAuth();
    const navigate=useNavigate();
    const handleChange=(e)=>{
        const value=e.target.value;
        const name=e.target.name;
        setData({...data,[name]:value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response=await fetch(`http://localhost:8000/api/auth/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(data),
            })
            if(response.ok)
            {
                const user_data=await response.json();
                const user_token=user_data.token;
                storeTokenInLS(user_token);
                navigate("/");
            }
            else
            {
                console.log("their is some error");
            }
        } catch (error) {
            
        }
    }
    return (
        <>

            <div className="login_form_container p-font">
            <div className="login_form_container2">

                <div className="p-font login_form_heading">
                    <h3 >Plz Login</h3>
                </div>
                <form onSubmit={handleSubmit} className="login_form">
                    <label htmlFor="email" className="input_fields_label">Email</label><br />
                    <input type="email" id="email" name="email" onChange={handleChange} value={data.email} placeholder="enter your email address" className="login_input_fields" /><br />
                    <label htmlFor="password" className="input_fields_label">password</label><br />
                    <input type="password" id="password" name="password" onChange={handleChange} value={data.password} placeholder="enter your password" className="login_input_fields" /><br />
                    <div className="login_form_submit_button1">
                    <input type="submit" className="login_form_submit_button" variant="contained" color="secondary" />
                    </div>

                </form>
            </div>
            </div>
        </>
    )
}
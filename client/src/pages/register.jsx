import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth"
export const Register = () => {
    const [data,setData]=useState({
        user_name:"",
        user_email:"",
        user_phone_number:"",
        user_password:"",
        user_confirm_password:"",
        userage:"",
        gender:"",
    })
    const {storeTokenInLS}=useAuth();
    const naviage=useNavigate();

    const submituserdata=async()=>{
        try {
            const response=await fetch("http://localhost:8000/api/auth/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(data),
            })
            if(response.ok)
            {
                const user_data=await response.json();
                storeTokenInLS(user_data.token);
                naviage("/");
            }
        } catch (error) {
            console.log(error);
        }
    }



    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData({...data,[name]:value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        submituserdata();
    }


    return (
        <>

            <div className="register_form_container p-font">
                <div className="register_form_container2">
                    <div className="p-font register_form_heading">
                        <h3 >Plz Register</h3>
                    </div>
                    <form onSubmit={handleSubmit} className="register_form">
                        <label htmlFor="user_name" className="input_fields_label">Name</label><br />
                        <input type="text" id="user_name" name="user_name" onChange={handleChange} placeholder="enter your name" className="register_input_fields" required/><br />

                        <label htmlFor="user_email" className="input_fields_label">Email</label><br />
                        <input type="email" id="user_email" name="user_email" onChange={handleChange} placeholder="enter your email address" className="register_input_fields" required/><br />

                        <label htmlFor="user_phone_number" className="input_fields_label">Phone Number</label><br />
                        <input type="phone" id="user_phone_number" name="user_phone_number" onChange={handleChange} placeholder="enter your email address" className="register_input_fields" required/><br />

                        <label htmlFor="user_password" className="input_fields_label">password</label><br />
                        <input type="password" id="user_password" name="user_password" onChange={handleChange} placeholder="enter your email address" className="register_input_fields" required/><br />

                        <label htmlFor="user_confirm_password" className="input_fields_label">confirm password</label><br />
                        <input type="password" id="user_confirm_password" name="user_confirm_password" onChange={handleChange} placeholder="enter your email address" className="register_input_fields" required/><br />

                        <label for="userage" className="input_fields_label">Age:</label><br/>
                        <input type="number" id="userage" name="userage" onChange={handleChange} min="0" max="120" placeholder="enter your age" className="register_input_fields" required></input><br/>

                        <label>Gender:</label><br />
                        <div className="registration_gender">
                        <input type="radio" id="male" name="gender" onChange={handleChange} value="male" required />
                        <label for="male">Male</label><br />

                        <input type="radio" id="female" name="gender" onChange={handleChange} value="female" />
                        <label for="female">Female</label><br />

                        <input type="radio" id="other" name="gender" onChange={handleChange} value="other" />
                        <label for="other">Other</label><br />
                        </div>


                        <div className="register_form_submit_button1">
                            <input type="submit" className="register_form_submit_button" variant="contained" color="secondary" />
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
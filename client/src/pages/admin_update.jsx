import { useEffect, useState } from "react";
import {useParams,useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
export const AdminUpdate=()=>{
    const [data,setData]=useState({
        user_name:"",
        user_email:"",
        user_phone_number:"",
        user_password:"",
        user_confirm_password:"",
        userage:"",
        gender:"",
        isAdmin:false,
        isSubscriber:false,
    })
    const params=useParams();
    const navigate=useNavigate();
    const {authorization_token} =useAuth();
    const getUserData=async()=>{
        try {
            const response=await fetch(`http://localhost:8000/api/admin/adminuser/${params.id}`,{
                method:"GET",
                headers:{
                    Authorization:authorization_token,
                }
            })
            if(response.ok)
            {
                const data=await response.json();
                setData({
                    user_name:data.name,
                    user_email:data.email,
                    user_phone_number:data.phone,
                    userage:data.age,
                    gender:data.gender,
                    isAdmin:data.isAdmin,
                    isSubscriber:data.isSubscriber,
                });
            }
            else
            {
                console.log("some error is coming")
            }
        } catch (error) {
            console.log(error);
        }
    }


    const updateUserById=async()=>{
        try {
            const response=await fetch(`http://localhost:8000/api/admin/adminuser/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:authorization_token,
                },
                body:JSON.stringify(data),
            })
            if(response.ok)
            {
                navigate("/admin/adminuser");
            }
            else
            {
                console.log("error is coming");
            }
        } catch (error) {
            next(error);
        }
    }




    useEffect(()=>{
        getUserData();
    },[]);

    const handleChange=(e)=>{
        const { name, type, value, checked } = e.target;
        if (type === "radio" && name!="gender") {
            setData({
                ...data,
                [name]: value === "true" // Convert string "true"/"false" to boolean
            });
        } else {
            setData({
                ...data,
                [name]: value
            });
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        updateUserById();
    }
    return (<>
                    <div className="register_form_container p-font">
                <div className="register_form_container2">
                    <div className="p-font register_form_heading">
                        <h3 >Plz Register</h3>
                    </div>
                    <form onSubmit={handleSubmit} className="register_form">
                        <label htmlFor="user_name" className="input_fields_label">Name</label><br />
                        <input type="text" id="user_name" name="user_name" value={data.user_name} onChange={handleChange} placeholder="enter your name" className="register_input_fields" required/><br />

                        <label htmlFor="user_email" className="input_fields_label">Email</label><br />
                        <input type="email" id="user_email" name="user_email" value={data.user_email} onChange={handleChange} placeholder="enter your email address" className="register_input_fields" required/><br />

                        <label htmlFor="user_phone_number" className="input_fields_label">Phone Number</label><br />
                        <input type="phone" id="user_phone_number" name="user_phone_number" value={data.user_phone_number} onChange={handleChange} placeholder="enter your email address" className="register_input_fields" required/><br />

                        <label htmlFor="user_password" className="input_fields_label">password</label><br />
                        <input type="password" id="user_password" name="user_password" value={data.user_password} onChange={handleChange} placeholder="enter your email address" className="register_input_fields" /><br />

                        <label htmlFor="user_confirm_password" className="input_fields_label">confirm password</label><br />
                        <input type="password" id="user_confirm_password" name="user_confirm_password" value={data.user_confirm_password} onChange={handleChange} placeholder="enter your email address" className="register_input_fields" /><br />

                        <label htmlFor="userage" className="input_fields_label">Age:</label><br/>
                        <input type="number" id="userage" name="userage" value={data.userage} onChange={handleChange} min="0" max="120" placeholder="enter your age" className="register_input_fields" required></input><br/>

                        <label>Gender:</label><br />
                        <div className="registration_gender">
                        <input type="radio" id="male" name="gender" checked={data.gender==="male"} onChange={handleChange} value="male" required />
                        <label htmlFor="male">Male</label><br />

                        <input type="radio" id="female" name="gender" checked={data.gender==="female"} onChange={handleChange} value="female" />
                        <label htmlFor="female">Female</label><br />

                        <input type="radio" id="other" name="gender" checked={data.gender==="other"} onChange={handleChange} value="other" />
                        <label htmlFor="other">Other</label><br />
                        </div>

                        
                        <label>Admin:</label><br />
                        <div className="registration_isAdmin">
                        <input type="radio" id="its_admin" name="isAdmin" checked={data.isAdmin===true} onChange={handleChange} value={true} required />
                        <label htmlFor="its_admin">Yes</label><br />

                        <input type="radio" id="not_admin" name="isAdmin" checked={data.isAdmin===false} onChange={handleChange} value={false} />
                        <label htmlFor="not_admin">No</label><br />
                        </div>

                        <label>Subscriber:</label><br />
                        <div className="registration_isSubscriber">
                        <input type="radio" id="its_subscriber" name="isSubscriber" checked={data.isSubscriber===true} onChange={handleChange} value="true" required />
                        <label htmlFor="its_subscriber">Yes</label><br />

                        <input type="radio" id="not_subscriber" name="isSubscriber" checked={data.isSubscriber===false} onChange={handleChange} value="false" />
                        <label htmlFor="not_subscriber">No</label><br />
                        </div>


                        <div className="register_form_submit_button1">
                            <input type="submit" className="register_form_submit_button" variant="contained" color="secondary" />
                        </div>

                    </form>
                </div>
            </div>
    </>)
}
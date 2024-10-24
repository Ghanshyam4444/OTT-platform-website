import React, { useState } from "react";
import {  NavLink } from 'react-router-dom';
export const Contact =() => {
    const [userdata,setUserData]=useState({
        usename:"",
        email:"",
        subject:"",
        message:"",
    })
    const send_message=async(e)=>{
        e.preventDefault();
        try {
            const response=await fetch("http://localhost:8000/api/help/contact",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(userdata),
            })
            if(response.ok)
            {
                console.log("no error");
                setUserData({username:"",email:"",subject:"",message:""});
            }
            else
            {
                console.log("some error");
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUserData({...userdata,[name]:value});
    }
    return (
        <>
            <div className="contant_us_container">
                <h1 className="h-font">CONTACT US</h1>
                <div className="h-font contact_us_description">
                    <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Ut accusantium culpa voluptatum laboriosam commodi reiciendis repudiandae fugiat animi tempora libero?</p>

                </div>
            </div>

            <div className="contact_us_info">
                <div className="location_info p-font">
                    <div className="map_img">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28171.96175299567!2d76.99218515966142!3d28.039900092102243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3972d2b03debcc7f%3A0x609df713a23648c!2sMalab%2C%20Haryana%20122107!5e0!3m2!1sen!2sin!4v1727163389676!5m2!1sen!2sin" width="100%" height="100%"></iframe>
                    </div>
                    <div className="all_other_info p-font">
                        <h5>Follow Us</h5>
                        <a href="https://goo.gl/maps/xVsyP2agNEBXcMBY6?coh=178573&entry=tt" target="_blank">Malab,nuh(Haryana)</a>
                    </div>
                    <div className="all_other_info">
                        <h5>Call Us</h5>
                        <h5> +91-9876543210</h5>
                        <h5> +91-9876543211</h5>
                    </div>
                    <div className="all_other_info">
                        <h5>Email</h5>
                        <h5>abc@gmail.com</h5>
                    </div>
                </div>
                <div className="give_us_feedback p-font">
                    <div>
                        <h3 className="p-font form_heading">Send a Message</h3>
                    </div>
                    <form onSubmit={send_message} className="contact_us_form">
                        <label htmlFor="username" className="input_fields_label">Name</label><br />
                        <input type="text" id="username" name="username" onChange={handleChange} value={userdata.username} className="input_fields" /><br />
                        <label htmlFor="email" className="input_fields_label">Email</label><br />
                        <input type="email" id="email" name="email" onChange={handleChange} value={userdata.email} className="input_fields" /><br />
                        <label htmlFor="subject" className="input_fields_label">Subject</label><br />
                        <input type="text" id="subject" name="subject" onChange={handleChange} value={userdata.subject} className="input_fields" /><br />
                        <label htmlFor="message" className="text_area_field">Message</label><br />
                        <textarea id="message" name="message" rows="4" cols="50" className="input_fields_text_area" value={userdata.message} onChange={handleChange} placeholder="Type your message here..." required></textarea>
                        <input type="submit" className="Contact_form_submit_button" variant="contained" color="secondary"/>
                    </form>
                </div>
            </div>
        </>
    )
}

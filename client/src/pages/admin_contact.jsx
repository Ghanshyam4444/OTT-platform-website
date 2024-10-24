import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import { Link } from "react-router-dom";
export const AdminContact = ()=>{
    const {authorization_token}=useAuth();
    const [contactData,setContactData]=useState([]);
    const getAllContacts=async()=>{
        try {
            const response=await fetch(`http://localhost:8000/api/admin/contact`,{
                method:"GET",
                headers:{
                    Authorization:authorization_token,
                }
            })
            if(response.ok)
                {
                    const contact_Data=await response.json();
                    setContactData(contact_Data);
                } 
                else{
                    console.log("some error is coming");
                }
        } catch (error) {
            console.log(error)
        }
    }
    const deleteUser=async(id)=>{
        try {
            const response=await fetch(`http://localhost:8000/api/admin/contact/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authorization_token,
                }
            })
            if(response.ok)
            {
                getAllContacts();
            }
            else
            {
                console.log("some error is coming");
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getAllContacts();
    },[]);
    return (<>
        <div className="admin_user_detail_container">
                <table className="admin_user_detail_table">
                    <thead className="admin_user_detail_head">
                        <tr className="rows">
                            <th className="col">_id</th>
                            <th className="col">Name</th>
                            <th className="col">Email</th>
                            <th className="col">subject</th>
                            <th className="col">message</th>
                            <th className="col">see full message</th>
                            <th className="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="admin_user_detail_body">
                    {contactData.map((curUser,index)=>{
                        return (
                        <tr className="column" key={index}>
                            <td className="col">{curUser._id}</td>
                            <td className="col">{curUser.name}</td>
                            <td className="col">{curUser.email}</td>
                            <td className="col">{curUser.subject}</td>
                            <td className="col">{curUser.message.substring(0,30)}</td>
                            <td className="col">
                                <button className="edit-button"><Link className="text-decoration-none text-light" to={`/admin/adminContact/${curUser._id}/edit`}>see more</Link></button>
                            </td>
                            <td className="col">
                                <button className="delete-button" onClick={()=>deleteUser(curUser._id)}>Delete</button>
                            </td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
    </>)
}  
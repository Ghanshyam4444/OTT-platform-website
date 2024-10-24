import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {Link} from "react-router-dom";
export const AdminUser = () => {
    const { authorization_token } = useAuth();
    const [userData, setUserData] = useState([]);
    const getUserData = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/admin/adminuser", {
                method: "GET",
                headers: {
                    Authorization: authorization_token,
                }
            })
            if (response.ok) {
                const data=await response.json();
                setUserData(data);
            }
            else
            {
                console.log("some error is coming")
            }
        } catch (error) {
            console.log(error)
        }
    }
    const deleteUser=async(id)=>{
        console.log(id);
        try {
            const response=await fetch(`http://localhost:8000/api/admin/adminuser/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authorization_token,
                }
            })
            if(response.ok)
            {
                getUserData();
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUserData();
    }, [])
    return (
        <>
            <div className="admin_user_detail_container">
                <table className="admin_user_detail_table">
                    <thead className="admin_user_detail_head">
                        <tr className="rows">
                            <th className="col">_id</th>
                            <th className="col">Name</th>
                            <th className="col">Email</th>
                            <th className="col">Phone</th>
                            <th className="col">Edit</th>
                            <th className="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="admin_user_detail_body">
                    {userData.map((curUser,index)=>{
                        return (
                        <tr className="column" key={index}>
                            <td className="col">{curUser._id}</td>
                            <td className="col">{curUser.name}</td>
                            <td className="col">{curUser.email}</td>
                            <td className="col">{curUser.phone}</td>
                            <td className="col">
                                <button className="edit-button"><Link className="text-decoration-none text-light" to={`/admin/adminuser/${curUser._id}/edit`}>Edit</Link></button>
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
        </>
    );
}

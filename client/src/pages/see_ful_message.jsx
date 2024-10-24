import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
export const SeeFullMessage = () => {
    const params=useParams();
    const {authorization_token}=useAuth();
    const [curUser,setUser]=useState("");
    const getuserAllDetail=async()=>{
        try {
            const response=await fetch(`http://localhost:8000/api/admin/contact/${params.id}`,{
                method:"GET",
                headers:{
                    Authorization:authorization_token,
                }
            })
            if(response.ok)
            {
                console.log("hello")
                const data=await response.json();
                setUser(data);
            }
            else
            {
                console.log("some error is coming")
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getuserAllDetail();
    },[])
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
                    </tr>
                </thead>
                <tbody className="admin_user_detail_body">
                    <tr className="column">
                        <td className="col">{curUser._id}</td>
                        <td className="col">{curUser.name}</td>
                        <td className="col">{curUser.email}</td>
                        <td className="col">{curUser.subject}</td>
                        <td className="col">{curUser.message}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>)
}
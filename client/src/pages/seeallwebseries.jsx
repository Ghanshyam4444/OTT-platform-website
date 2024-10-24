import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
export const SeeWebSeries=()=>{
    const {authorization_token} = useAuth();
    const [webSeries, setWebSeries] = useState([{
        webSeriesName: '',
        WebSeriesImageURL: '',
        description: '',
        tags: [],
        ageLimit: '',
        isPremiumWebSeries: '',
        rating: '',
        language: '',
        seasons: [{
            seasonNumber: '',
            seasonFolderName: '',
            seasonImageName: '',
            seasonHoriImageName: '',
            episodes: [{
                episodeNumber: '',
                title: '',
                description: '',
                duration: '',
                rating: '',
                videoUrl: ''
            }]
        }]
    }]);
    const getAllWebSeries=async()=>{
        try {
            const response=await fetch("http://localhost:8000/api/content/webseries",{
                method:"GET",
            })
            if(response.ok)
            {
                const data=await response.json();
                setWebSeries(data);
                console.log("success");
            }
            else
            {
                console.log("error");
            }
        } catch (error) {
            console.log(error);
        }
    }
    const deleteMovie=async(id)=>{
        try {
            const response=await fetch(`http://localhost:8000/api/admin/webseries/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authorization_token,
                }
            })
            if(response.ok)
            {
                getAllWebSeries();
            }
            else
            {
                console.log("error is coming");
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getAllWebSeries();
    },[])
    return(<>
        <div className="admin_user_detail_container">
                <table className="admin_user_detail_table">
                    <thead className="admin_user_detail_head">
                        <tr className="rows">
                            <th className="col">_id</th>
                            <th className="col">Name</th>
                            <th className="col">total seasons</th>
                            <th className="col">Edit</th>
                            <th className="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="admin_user_detail_body">
                    {webSeries.map((curWebSeries,index)=>{
                        return (<>
                        <tr className="column" key={index}>
                            <td className="col">{curWebSeries._id}</td>
                            <td className="col">{curWebSeries.webSeriesName}</td>
                            <td className="col">{curWebSeries.seasons.length}</td>
                            <td className="col">
                            <Link className="text-decoration-none text-light" to={`/admin/seeallwebseries/${curWebSeries._id}/edit`}><button className="edit-button">Edit</button></Link>
                            </td>
                            <td className="col">
                                <button className="delete-button" onClick={()=>deleteMovie(curWebSeries._id)}>Delete</button>
                            </td>
                        </tr>
                        </>
                        )
                    })}
                    </tbody>
                </table>
            </div>
    </>)
}
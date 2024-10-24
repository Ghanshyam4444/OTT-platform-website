import { useEffect, useState } from "react";
import { useAuth } from "../store/auth"
import { Link } from "react-router-dom";
export const SeeMovies=()=>{
    const {authorization_token}= useAuth();
    const [MovieDetails,setMovieDetails]=useState([]);
    const getAllMovies = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/content/movies", {
                method: "GET",
            })
            if (response.ok) {
                const movie_data = await response.json();
                setMovieDetails(movie_data);
            }
            else {
                console.log("some error is coming")
            }
        } catch (error) {
            console.log(error);
        }
    }
    const deleteMovie=async(id)=>{
        try {
            const response=await fetch(`http://localhost:8000/api/admin/movies/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authorization_token
                }
            })
            if(response.ok)
            {
                console.log("correct");
                getAllMovies();
            }
            else
            {
                console.log("error is coming")
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getAllMovies();
    },[])
    return(<>
        <div className="admin_user_detail_container">
                <table className="admin_user_detail_table">
                    <thead className="admin_user_detail_head">
                        <tr className="rows">
                            <th className="col">_id</th>
                            <th className="col">Name</th>
                            <th className="col">duration</th>
                            <th className="col">Edit</th>
                            <th className="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="admin_user_detail_body">
                    {MovieDetails.map((curMovie,index)=>{
                        return (<>
                        <tr className="column" key={index}>
                            <td className="col">{curMovie._id}</td>
                            <td className="col">{curMovie.movieName}</td>
                            <td className="col">{curMovie.duration}h</td>
                            <td className="col">
                            <Link className="text-decoration-none text-light" to={`/admin/seeallmovies/${curMovie._id}/edit`}><button className="edit-button">Edit</button></Link>
                            </td>
                            <td className="col">
                                <button className="delete-button" onClick={()=>deleteMovie(curMovie._id)}>Delete</button>
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
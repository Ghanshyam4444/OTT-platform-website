import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
export const EditMovies=()=>{
    const [formData, setFormData] = useState({
        movieName: '',
        folderName: '',
        hori_folderName: '',
        imageName: '',
        hori_imageName: '',
        duration: '',
        language: '',
        age_limit: '',
        rating: '',
        movieVideoName: '',
        aboutMovie: '',
        isPremium: false,
        tags: []
    });
    const {authorization_token}=useAuth();
    const params=useParams();
    const navigate=useNavigate();
    const availableTags = ["Action", "Comedy", "Crime", "Family", "Horror", "Latest", "MostPopular", "Romance", "SuperHero", "Thriller", "ViewVibeSpecial"];
    const getMovieDetails=async()=>{
        try {
            const response=await fetch(`http://localhost:8000/api/admin/movies/${params.id}`,{
                method:"GET",
                headers:{
                    Authorization:authorization_token
                },
            })
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setFormData({
                    ...data,
                    tags: Array.isArray(data.tags) ? data.tags : []
                });
                console.log(formData);
            } else {
                console.log("Error fetching movie details");
            }
        } catch (error) {
            console.log("error");
            console.log(error);
        }
    }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prev) => {
                const tags = checked
                    ? [...prev.tags, value]
                    : prev.tags.filter((tag) => tag !== value);
                return { ...prev, tags };
            });
        }
        else if (type === "radio") {
            setFormData({
                ...formData,
                [name]: value === "true" // Convert string "true"/"false" to boolean
            });
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };
    const updateMovieDetail=async()=>{
        try {
            const response=await fetch(`http://localhost:8000/api/admin/movies/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:authorization_token,
                },
                body:JSON.stringify(formData),                
            })
            if(response.ok)
            {
                console.log("success");
                navigate("/admin/seeallmovies");
            }
            else
            {
                console.log("error is coming");
            }
        } catch (error) {

            console.log(error);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateMovieDetail();
    };
    useEffect(()=>{
        getMovieDetails();
    },[])
    return(<>
        
        <div className="add-movie-container">
            <h2 className="form-title text-light">Update Movie</h2>
            <form onSubmit={handleSubmit} className="add-movie-form">
                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">Movie Name:</label>
                        <input
                            type="text"
                            name="movieName"
                            value={formData.movieName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Folder Name:</label>
                        <input
                            type="text"
                            name="folderName"
                            value={formData.folderName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Horizontal Folder Name:</label>
                        <input
                            type="text"
                            name="hori_folderName"
                            value={formData.hori_folderName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">Image Name:</label>
                        <input
                            type="text"
                            name="imageName"
                            value={formData.imageName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Horizontal Image Name:</label>
                        <input
                            type="text"
                            name="hori_imageName"
                            value={formData.hori_imageName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Duration:</label>
                        <input
                            type="text"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">Language:</label>
                        <input
                            type="text"
                            name="language"
                            value={formData.language}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Age Limit:</label>
                        <input
                            type="text"
                            name="age_limit"
                            value={formData.age_limit}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Rating:</label>
                        <input
                            type="text"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">Movie Video Name:</label>
                        <input
                            type="text"
                            name="movieVideoName"
                            value={formData.movieVideoName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">About Movie:</label>
                        <textarea
                            name="aboutMovie"
                            value={formData.aboutMovie}
                            onChange={handleChange}
                            required
                            className="textarea"
                        />
                    </div><br />

                </div>


                <div className="isPremiumcontainer form-label">
                    <label>Premium:</label><br />
                    <div className="registration_isPremium">
                        <input type="radio" id="its_premium" name="isPremium" checked={formData.isPremium === true} onChange={handleChange} value={true} required />
                        <label htmlFor="its_premium">Yes</label><br />

                        <input type="radio" id="not_premium" name="isPremium" checked={formData.isPremium === false} onChange={handleChange} value={false} />
                        <label htmlFor="not_premium">No</label><br />
                    </div>
                </div>



                <label className="form-label">Tags:</label>
                <div className="tags-container" id="tagscontainer">
                    {availableTags.map((tag) => (
                        <div className="checkbox" key={tag}>
                            <input
                                type="checkbox"
                                name="tags"
                                value={tag}
                                checked={formData.tags.includes(tag)}
                                onChange={handleChange}
                            />
                            <label className="checkbox-label">{tag}</label>
                        </div>
                    ))}
                </div>


                <button type="submit" className="submit-button">update Movie</button>
            </form>
        </div>
    </>)
}
import { useEffect, useState, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../store/auth";
export const Search = () => {
    const [movie_name, setMovieName] = useState("");
    const [MovieDetails, setMovieDetails] = useState([]);
    const { isLoggedIn } = useAuth();
    const {user}=useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {isSubscriber}=useAuth();
    const inputRef = useRef(null);

    const getsearchedMovies = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8000/api/content/searchmovie/${movie_name}`, {
                method: "GET"
            });
            if (response.ok) {
                const data = await response.json();
                setMovieDetails(data);
            } else {
                console.log("error is coming");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }

        if (movie_name) {
            const handler = setTimeout(() => {
                getsearchedMovies();
            }, 1000); // Debounce for 500ms

            return () => {
                clearTimeout(handler);
            };
        } else {
            setMovieDetails([]); // Clear results when input is empty
        }
    }, [movie_name, isLoggedIn, navigate]);

    // Keep the input focused
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    });

    if (!isLoggedIn) return null;

    const handleInput = (e) => {
        const value = e.target.value;
        setMovieName(value);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="getInputvalue">
                <input
                    type="text"
                    className="text-dark"
                    placeholder="Enter movie name"
                    onChange={handleInput}
                    value={movie_name}
                    id="movie_name"
                    name="movie_name"
                    ref={inputRef} // Set the ref here
                />
                <NavLink><IoSearch className="search_icon" /></NavLink>
            </div>


            {MovieDetails.length === 0 && movie_name && !loading && (
                <div>No movies found.</div>
            )}


            {MovieDetails.map((curMovie) => {
                if(!isSubscriber && curMovie.isPremium)
                {
                return (<>
                <div className="text-white web_series_episodes mt-2" key={curMovie._id}>
                    <div className="justify-content-center row">
                        <div id="search_items_1" className="col-lg-11 col-md-12 px-4">
                            <div style={{ border: "4px solid red" }} className="card pop bg-dark mb-4 shadow">
                                <div className="row g-0 p-1 align-items-center">
                                    <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                                        <Link to={`/subscriber_plans/${user._id}`} className="sliding_movie">
                                            <img
                                                src={`/content/${curMovie.folderName}/${curMovie.hori_folderName}/${curMovie.hori_imageName}.jpg`}
                                                className="horizontal_movie_img img-fluid rounded"
                                                alt="..."
                                            />
                                        </Link>
                                    </div>
                                    <div className="col-md-7 px-md-3">
                                        <h4 className="fw-bold h-font text-center mt-0 mb-2">{curMovie.movieName}</h4>
                                        <p className="mt-4">{curMovie.aboutMovie.substring(0, 150)} ....</p>
                                        <div className="features">
                                            <span className="badge rounded-pill bg-light text-dark text-wrap">{curMovie.rating}</span> |
                                            <span className="badge rounded-pill bg-light text-dark text-wrap">{curMovie.duration} h</span> |
                                            <span className="badge rounded-pill bg-light text-dark text-wrap">{curMovie.language}</span> |
                                            <span className="badge rounded-pill bg-light text-dark text-wrap">{curMovie.age_limit}</span>
                                            <h6 className="mt-4">
                                                {curMovie.tags.map((tag, i) => (
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap" key={i}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>)
                }
                else
                {
                    return (<>
                <div className="text-white web_series_episodes mt-2" key={curMovie._id}>
                    <div className="justify-content-center row">
                        <div id="search_items_1" className="col-lg-11 col-md-12 px-4">
                            <div style={{ border: "4px solid white" }} className="card pop bg-dark mb-4 shadow">
                                <div className="row g-0 p-1 align-items-center">
                                    <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                                        <Link to={`/show_movie/${curMovie._id}`} className="sliding_movie">
                                            <img
                                                src={`/content/${curMovie.folderName}/${curMovie.hori_folderName}/${curMovie.hori_imageName}.jpg`}
                                                className="horizontal_movie_img img-fluid rounded"
                                                alt="..."
                                            />
                                        </Link>
                                    </div>
                                    <div className="col-md-7 px-md-3">
                                        <h4 className="fw-bold h-font text-center mt-0 mb-2">{curMovie.movieName}</h4>
                                        <p className="mt-4">{curMovie.aboutMovie.substring(0, 150)} ....</p>
                                        <div className="features">
                                            <span className="badge rounded-pill bg-light text-dark text-wrap">{curMovie.rating}</span> |
                                            <span className="badge rounded-pill bg-light text-dark text-wrap">{curMovie.duration} h</span> |
                                            <span className="badge rounded-pill bg-light text-dark text-wrap">{curMovie.language}</span> |
                                            <span className="badge rounded-pill bg-light text-dark text-wrap">{curMovie.age_limit}</span>
                                            <h6 className="mt-4">
                                                {curMovie.tags.map((tag, i) => (
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap" key={i}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>)
                }
            })}

            
        </>
    );
};











// import { useEffect, useState } from "react";
// import { IoSearch } from "react-icons/io5";
// import { NavLink, Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from "../store/auth";

// export const Search = () => {
//     const [movie_name, setMovieName] = useState("");
//     const [MovieDetails, setMovieDetails] = useState([]);
//     const { isLoggedIn } = useAuth();
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(false);

//     const getsearchedMovies = async () => {
//         setLoading(true);
//         try {
//             const response = await fetch(`http://localhost:8000/api/content/searchmovie/${movie_name}`, {
//                 method: "GET"
//             });
//             if (response.ok) {
//                 const data = await response.json();
//                 setMovieDetails(data);
//             } else {
//                 console.log("error is coming");
//             }
//         } catch (error) {
//             console.log(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (!isLoggedIn) {
//             navigate("/login");
//         }
//         const handler = setTimeout(() => {
//             if (movie_name) {
//                 getsearchedMovies();
//             } else {
//                 setMovieDetails([]); // Clear results when input is empty
//             }
//         }, 500); // Debounce

//         return () => {
//             clearTimeout(handler);
//         };
//     }, [movie_name, isLoggedIn, navigate]);

//     if (!isLoggedIn) return null;

//     const handleInput = (e) => {
//         const value = e.target.value;
//         setMovieName(value);
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <>
//             <div className="getInputvalue">
//                 <input
//                     type="text"
//                     className="text-dark"
//                     placeholder="Enter movie name"
//                     onChange={handleInput}
//                     value={movie_name}
//                     id="movie_name"
//                     name="movie_name"
//                 />
//                 <NavLink><IoSearch className="search_icon" /></NavLink>
//             </div>
//             {MovieDetails.length === 0 && movie_name && !loading && (
//                 <div>No movies found.</div>
//             )}
//             {MovieDetails.map((curMovie) => (
//                 <div className="text-white web_series_episodes mt-2" key={curMovie._id}>
//                     {/* Your JSX here */}
//                     <div className="justify-content-center row">
//                         <div id="search_items_1" className="col-lg-11 col-md-12 px-4">
//                             <div style={{ border: "2px solid white" }} className="card pop bg-dark mb-4 shadow">
//                                 <div className="row g-0 p-1 align-items-center">
//                                     <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
//                                         <Link to={`/show_movie/${curMovie._id}`} className="sliding_movie">
//                                             <img
//                                                 src={`/content/${curMovie.folderName}/${curMovie.hori_folderName}/${curMovie.hori_imageName}.jpg`}
//                                                 className="horizontal_movie_img img-fluid rounded"
//                                                 alt="..."
//                                             />
//                                         </Link>
//                                     </div>
//                                     <div className="col-md-7 px-md-3">
//                                         <h4 className="fw-bold h-font text-center mt-0 mb-2">{curMovie.movieName}</h4>
//                                         <p className="mt-4">{curMovie.aboutMovie.substring(0, 150)} ....</p>
//                                         <div className="features">
//                                             <span className="badge rounded-pill bg-light text-dark text-wrap">{curMovie.rating}</span> |
//                                             <span className="badge rounded-pill bg-light text-dark text-wrap">{curMovie.duration} h</span> |
//                                             <span className="badge rounded-pill bg-light text-dark text-wrap">{curMovie.language}</span> |
//                                             <span className="badge rounded-pill bg-light text-dark text-wrap">{curMovie.age_limit}</span>
//                                             <h6 className="mt-4">
//                                                 {curMovie.tags.map((tag, i) => (
//                                                     <span className="badge rounded-pill bg-light text-dark text-wrap" key={i}>
//                                                         {tag}
//                                                     </span>
//                                                 ))}
//                                             </h6>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </>
//     );
// };



// import { useEffect, useState } from "react";
// import { IoSearch } from "react-icons/io5";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from "../store/auth";
// import { Link } from "react-router-dom";
// export const Search = () => {
//     const [movie_name, setMovieName] = useState("");
//     const [MovieDetails,setMovieDetails]=useState([]);
//     const {isLoggedIn}= useAuth();
//     const navigate=useNavigate();



//     const getsearchedMovies=async()=>{
//         try {
//             const response=await fetch(`http://localhost:8000/api/content/searchmovie/${movie_name}`,{
//                 method:"GET"
//             })
//             if(response.ok)
//             {
//                 const data=await response.json();
//                 // console.log(data);
//                 setMovieDetails(data);
//             }
//             else{
//                 console.log("error is coming");
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }



//     useEffect(()=>{
//         if(!isLoggedIn)
//         {
//             navigate("/login")
//         }
//         getsearchedMovies();
//     },[movie_name]);



//     if(!isLoggedIn) return null;


//     const handleInput = (e) => {
//         const value = e.target.value;
//         setMovieName(value);
//     }




//     return (
//         <>
//             <div className="getInputvalue">
//                 <input type="text" className="text-dark" placeholder="enter movie name" onChange={handleInput} value={movie_name} id="movie_name" name="movie_name" />
//                 <NavLink><IoSearch className="search_icon"/></NavLink>
//             </div>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             {MovieDetails.map((curMovie, index) => {
//                 return (<>
//                     <div className="text-white web_series_episodes mt-2" key={index}>
//                         <div className="justify-content-center row">
//                             <div id="search_items_1" className="col-lg-11 col-md-12 px-4">
//                                 <div style={{ border: "2px solid white" }} className="card pop bg-dark mb-4 shadow">
//                                     <div className="row g-0 p-1 align-items-center">
//                                         <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
//                                             <Link to={`/show_movie/${curMovie._id}`} className="sliding_movie">
//                                                 <img src={`/content/${curMovie.folderName}/${curMovie.hori_folderName}/${curMovie.hori_imageName}.jpg`} className="horizontal_movie_img img-fluid rounded" alt="..." />
//                                             </Link>
//                                         </div>
//                                         <div className="col-md-7 px-md-3">
//                                             <h4 className="fw-bold h-font text-center mt-0 mb-2">{curMovie.movieName}</h4>
//                                             <p className="mt-4">{curMovie.aboutMovie.substring(0, 150)} ....</p>
//                                             <div className="features">
//                                                 <span className="badge rounded-pill bg-light text-dark text-wrap ">
//                                                     {curMovie.rating}
//                                                 </span> |
//                                                 <span className="badge rounded-pill bg-light text-dark text-wrap ">
//                                                     {curMovie.duration} h
//                                                 </span> |
//                                                 <span className="badge rounded-pill bg-light text-dark text-wrap ">
//                                                     {curMovie.language}
//                                                 </span> |
//                                                 <span className="badge rounded-pill bg-light text-dark text-wrap ">
//                                                     {curMovie.age_limit}
//                                                 </span>
//                                                 <h6 className="mt-4">
//                                                     {curMovie.tags.map((tag, i) => {
//                                                         return (<>
//                                                             <span className="badge rounded-pill bg-light text-dark text-wrap " key={i}>
//                                                                 {tag}
//                                                             </span>|
//                                                         </>)
//                                                     })}
//                                                 </h6>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </>)
//             })}
//         </>
//     )
// }




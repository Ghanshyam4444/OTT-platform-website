import React from "react";
import { NavLink } from 'react-router-dom';
const Category = () => {
    const availableTags = ["Action", "Comedy", "Crime", "Family", "Horror", "Latest", "MostPopular", "Romance", "SuperHero", "Thriller", "ViewVibeSpecial"];
    return (
        <>
            <div className="Movie_type_description">
                <h2 className="h-font">Catogries</h2>
            </div>
            <div className="category_container">
                <NavLink to="movie_type/Action">
                    <img src={`content/action_movies/Action.png`} className="grid-item" alt="Movie Thumbnail" />
                </NavLink>
                <NavLink to="movie_type/Comedy" >
                    <img src={`content/comedy_movies/Comedy.png`} className="grid-item" alt="Movie Thumbnail" />
                </NavLink>
                <NavLink to="movie_type/Crime">
                    <img src={`content/crime/Crime.png`} className="grid-item" alt="Movie Thumbnail" />
                </NavLink>
                <NavLink to="movie_type/Family">
                    <img src={`content/family/Family.png`} className="grid-item" alt="Movie Thumbnail" />
                </NavLink>
                <NavLink to="movie_type/Horror">
                    <img src={`content/horror/horror.png`} className="grid-item" alt="Movie Thumbnail" />
                </NavLink>
                <NavLink to="movie_type/Latest" className="bg-secondary grid-item text-decoration-none">
                    <div className="d-flex"><h1 className="p-4 align-items-end h-font">Latest Released</h1></div>
                </NavLink>
                <NavLink to="movie_type/Romance">
                    <img src={`content/romance/Romance.png`} className="grid-item" alt="Movie Thumbnail" />
                </NavLink>
                
                <NavLink to="movie_type/ViewVibeSpecial" className="bg-danger grid-item text-decoration-none">
                    <div className="d-flex"><h1 className="p-4 align-items-end h-font">ViewVibe Special</h1></div>
                </NavLink>
                <NavLink to="movie_type/MostPopular" className="bg-primary grid-item text-decoration-none">
                    <div className="d-flex"><h1 className="p-4 align-items-end h-font">Most Popular</h1></div>
                </NavLink>
                <NavLink to="webseries_type/web_series" className="bg-dark grid-item text-decoration-none">
                    <div className="d-flex"><h1 className="p-4 align-items-end h-font">Web Series</h1></div>
                </NavLink>
                <NavLink to="movie_type/SuperHero">
                    <img src={`content/superhero/Superhero.png`} className="grid-item" alt="Movie Thumbnail" />
                </NavLink>
                <NavLink to="movie_type/Thriller" className="bg-dark grid-item text-decoration-none">
                    <div className="d-flex"><h1 className="p-4 align-items-end h-font">Thriller</h1></div>
                </NavLink>
                
            </div>


        </>
    )
}
export default Category;
// {/* <div className="container">
//                 <div className="row">
//                     <div className="col-lg-4 col-md-4 my-3 pop">
//                         <div className="card border-0 shadow" style={{ maxWidth: "350px", margin: "auto" }}>
//                             <NavLink
//                                 className={({ isActive }) => (isActive ? "active_class text-decoration-none" : "text-decoration-none")}
//                                 to="/action"
//                             >
//                                 <img src={`content/action_movies/Action.png`} className="h-100 w-100 d-block rounded" alt="Movie Thumbnail" />
//                             </NavLink>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-4 my-3 pop">
//                         <div className="card border-0 shadow" style={{ maxWidth: "350px", margin: "auto" }}>
//                             <NavLink
//                                 className={({ isActive }) => (isActive ? "active_class text-decoration-none" : "text-decoration-none")}
//                                 to="/comedy"
//                             >
//                                 <img src={`content/comedy_movies/Comedy.png`} className="h-100 w-100 d-block rounded" alt="Movie Thumbnail" />
//                             </NavLink>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-4 my-3 pop">
//                         <div className="c3 card border-0 shadow " style={{ maxWidth: "350px", margin: "auto" }}>
//                             {/* <a href="web_series.php" className="text-decoration-none text-white"><h2 className="t1 h-font fw-bold d-flex justify-content-center">Web series</h2></a> */}
//                             <NavLink
//                                 className={({ isActive }) => (isActive ? "active_class text-decoration-none" : "text-decoration-none")}
//                                 to="/webseries"
//                             >
//                                 <h2 className="t1 text-white h-font fw-bold d-flex justify-content-center">Web series</h2>
//                             </NavLink>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-4 my-3 pop">
//                         <div className="c2 card border-0 shadow " style={{ maxWidth: "350px", margin: "auto" }}>
//                             {/* <a href="most_popular.php" className="text-decoration-none text-white"><h2 className="t1 h-font fw-bold d-flex justify-content-center">Most Popular</h2></a> */}
//                             <NavLink
//                                 className={({ isActive }) => (isActive ? "active_class text-decoration-none" : "text-decoration-none")}
//                                 to="/most_popular"
//                             >
//                                 <h2 className="t1 text-white h-font fw-bold d-flex justify-content-center">Most Popular</h2>
//                             </NavLink>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-4 my-3 pop">
//                         <div className="card border-0 shadow" style={{ maxWidth: "350px", margin: "auto" }}>
//                             <NavLink
//                                 className={({ isActive }) => (isActive ? "active_class text-decoration-none" : "text-decoration-none")}
//                                 to="/family"
//                             >
//                                 <img src={`content/family/Family.png`} className="h-100 w-100 d-block rounded" alt="Movie Thumbnail" />
//                             </NavLink>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-4 my-3 pop">
//                         <div className="card border-0 shadow" style={{ maxWidth: "350px", margin: "auto" }}>
//                             <NavLink
//                                 className={({ isActive }) => (isActive ? "active_class text-decoration-none" : "text-decoration-none")}
//                                 to="/romance"
//                             >
//                                 <img src={`content/romance/Romance.png`} className="h-100 w-100 d-block rounded" alt="Movie Thumbnail" />
//                             </NavLink>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-4 my-3 pop">
//                         <div className="card border-0 shadow" style={{ maxWidth: "350px", margin: "auto" }}>
//                             {/* <a href="Crime.php"><img src="images/content/crime/Crime.png" className="card-img-top" /></a> */}
//                             <NavLink
//                                 className={({ isActive }) => (isActive ? "active_class text-decoration-none" : "text-decoration-none")}
//                                 to="/crime"
//                             >
//                                 <img src={`content/crime/Crime.png`} className="h-100 w-100 d-block rounded" alt="Movie Thumbnail" />
//                             </NavLink>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-4 my-3 pop">
//                         <div className="c1 card border-0 shadow " style={{ maxWidth: "350px", margin: "auto" }}>
//                             <NavLink
//                                 className={({ isActive }) => (isActive ? "active_class text-decoration-none" : "text-decoration-none")}
//                                 to="/latest"
//                             >
//                                 <h2 className="t1 text-white h-font fw-bold d-flex justify-content-center">Latest</h2>
//                             </NavLink>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-4 my-3 pop">
//                         <div className="card border-0 shadow" style={{ maxWidth: "350px", margin: "auto" }}>
//                             <NavLink
//                                 className={({ isActive }) => (isActive ? "active_class text-decoration-none" : "text-decoration-none")}
//                                 to="/thriller"
//                             >
//                                 <img src={`content/Thriller/Thriller.png`} className="h-100 w-100 d-block rounded" alt="Movie Thumbnail" />
//                             </NavLink>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-4 my-3 pop">
//                         <div className="card border-0 shadow" style={{ maxWidth: "350px", margin: "auto" }}>
//                             <NavLink
//                                 className={({ isActive }) => (isActive ? "active_class text-decoration-none" : "text-decoration-none")}
//                                 to="/superhero"
//                             >
//                                 <img src={`content/Superhero/Superhero.png`} className="h-100 w-100 d-block rounded" alt="Movie Thumbnail" />
//                             </NavLink>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-4 my-3 pop">
//                         <div className="card border-0 shadow" style={{ maxWidth: "350px", margin: "auto" }}>
//                             <NavLink
//                                 className={({ isActive }) => (isActive ? "active_class text-decoration-none" : "text-decoration-none")}
//                                 to="/horror"
//                             >
//                                 <img src={`content/horror/Horror.png`} className="h-100 w-100 d-block rounded" alt="Movie Thumbnail" />
//                             </NavLink>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-4 my-3 pop">
//                         <div className="c4 card border-0 shadow " style={{ maxWidth: "350px", margin: "auto" }}>
//                             <NavLink
//                                 className={({ isActive }) => (isActive ? "active_class text-decoration-none" : "text-decoration-none")}
//                                 to="/viewvibe"
//                             >
//                                 <h2 className="t1 text-white h-font fw-bold d-flex justify-content-center">ViewVibe Special</h2>
//                             </NavLink>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}
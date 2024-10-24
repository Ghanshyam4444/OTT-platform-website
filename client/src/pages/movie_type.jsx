import { Link, useParams } from "react-router-dom";
import { useAuth } from "../store/auth"

export const MovieType = () => {
    const { MovieDetails } = useAuth();
    const params = useParams();
    const typeofmovie = params.type;
    const { isSubscriber } = useAuth();
    const {user}=useAuth();
    return (<>
        <div className="mt-5" >
            {MovieDetails.filter((curMovie) => curMovie.tags.includes(typeofmovie)).map((curMovie, index) => {
                if (!isSubscriber && curMovie.isPremium) {
                    return (<>
                        <div className="text-white web_series_episodes mt-2" key={index}>
                            <div className="justify-content-center row">
                                <div id="search_items_1" className="col-lg-11 col-md-12 px-4">
                                    <div style={{ border: "4px solid red" }} className="card pop bg-dark mb-4 shadow">
                                        <div className="row g-0 p-1 align-items-center">
                                            <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                                                <Link to={`/subscriber_plans/${user._id}`} className="sliding_movie">
                                                    <img src={`/content/${curMovie.folderName}/${curMovie.hori_folderName}/${curMovie.hori_imageName}.jpg`} className="horizontal_movie_img img-fluid rounded" alt="..." />
                                                </Link>
                                            </div>
                                            <div className="col-md-7 px-md-3">
                                                <h4 className="fw-bold h-font text-center mt-0 mb-2">{curMovie.movieName}</h4>
                                                <p className="mt-4">{curMovie.aboutMovie.substring(0, 150)} ....</p>
                                                <div className="features">
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                        {curMovie.rating}
                                                    </span> |
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                        {curMovie.duration} h
                                                    </span> |
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                        {curMovie.language}
                                                    </span> |
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                        {curMovie.age_limit}
                                                    </span>
                                                    <h6 className="mt-4">
                                                        {curMovie.tags.map((tag, i) => {
                                                            return (<>
                                                                <span className="badge rounded-pill bg-light text-dark text-wrap " key={i}>
                                                                    {tag}
                                                                </span>|
                                                            </>)
                                                        })}
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
                else {
                    return (<>
                        <div className="text-white web_series_episodes mt-2" key={index}>
                            <div className="justify-content-center row">
                                <div id="search_items_1" className="col-lg-11 col-md-12 px-4">
                                    <div style={{ border: "4px solid white" }} className="card pop bg-dark mb-4 shadow">
                                        <div className="row g-0 p-1 align-items-center">
                                            <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                                                <Link to={`/show_movie/${curMovie._id}`} className="sliding_movie">
                                                    <img src={`/content/${curMovie.folderName}/${curMovie.hori_folderName}/${curMovie.hori_imageName}.jpg`} className="horizontal_movie_img img-fluid rounded" alt="..." />
                                                </Link>
                                            </div>
                                            <div className="col-md-7 px-md-3">
                                                <h4 className="fw-bold h-font text-center mt-0 mb-2">{curMovie.movieName}</h4>
                                                <p className="mt-4">{curMovie.aboutMovie.substring(0, 150)} ....</p>
                                                <div className="features">
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                        {curMovie.rating}
                                                    </span> |
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                        {curMovie.duration} h
                                                    </span> |
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                        {curMovie.language}
                                                    </span> |
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                        {curMovie.age_limit}
                                                    </span>
                                                    <h6 className="mt-4">
                                                        {curMovie.tags.map((tag, i) => {
                                                            return (<>
                                                                <span className="badge rounded-pill bg-light text-dark text-wrap " key={i}>
                                                                    {tag}
                                                                </span>|
                                                            </>)
                                                        })}
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
        </div>
    </>)
}
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../store/auth"

export const WebSeriesType = () => {
    const { WebSeries } = useAuth();
    const { isSubscriber } = useAuth();
    const {user}=useAuth();
    return (<>
        <div className="mt-5" >
            {WebSeries.map((curMovie, index) => {
                if (!isSubscriber && curMovie.isPremiumWebSeries) {
                    return (<>
                        <div className="text-white web_series_episodes mt-2" key={index}>
                            <div className="justify-content-center row">
                                <div id="search_items_1" className="col-lg-11 col-md-12 px-4">
                                    <div style={{ border: "4px solid red" }} className="card pop bg-dark mb-4 shadow">
                                        <div className="row g-0 p-1 align-items-center">
                                            <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                                                <Link to={`/subscriber_plans/${user._id}`} className="sliding_movie">
                                                    <img src={`/content/web_series/${curMovie.seasons[0].seasonFolderName}/${curMovie.seasons[0].seasonHoriImageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                                </Link>
                                            </div>
                                            <div className="col-md-7 px-md-3">
                                                <h4 className="fw-bold h-font text-center mt-0 mb-2">{curMovie.webSeriesName}</h4>
                                                <p className="mt-4">{curMovie.description.substring(0, 150)} ....</p>
                                                <div className="features">
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                        {curMovie.rating}
                                                    </span> |
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                        total seasons {curMovie.seasons.length}
                                                    </span> |
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                        {curMovie.language}
                                                    </span> |
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                        {curMovie.ageLimit}
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
                                    <div style={{ border: "2px solid white" }} className="card pop bg-dark mb-4 shadow">
                                        <div className="row g-0 p-1 align-items-center">
                                            <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                                                <Link to={`/show_webseries/${curMovie._id}`} className="sliding_movie">
                                                    <img src={`/content/web_series/${curMovie.seasons[0].seasonFolderName}/${curMovie.seasons[0].seasonHoriImageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                                </Link>
                                            </div>
                                            <div className="col-md-7 px-md-3">
                                                <h4 className="fw-bold h-font text-center mt-0 mb-2">{curMovie.webSeriesName}</h4>
                                                <p className="mt-4">{curMovie.description.substring(0, 150)} ....</p>
                                                <div className="features">
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                        {curMovie.rating}
                                                    </span> |
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                        total seasons {curMovie.seasons.length}
                                                    </span> |
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                        {curMovie.language}
                                                    </span> |
                                                    <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                        {curMovie.ageLimit}
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
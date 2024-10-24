import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';
export const ShowWebSeries = () => {
    const [WebSeriesInfo, setWebSeriesInfo] = useState();
    const { WebSeries } = useAuth();//all web series
    const [seasonIndex, setSeasonIndex] = useState(0);
    const [EpisodeIndex, setEpisodeIndex] = useState(0);
    const [currEpisodeDetail, setcurrEpisodeDetail] = useState(0);
    const [overflowValue,setoverflowValue] = useState('overflow-hidden');
    const [overflowtextvalue,setoverflowtextvalue] = useState('See More');
    const params = useParams();
    const videoRef = useRef(null);


    const getWebSeriesInfo = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/content/show_webseries/${params.id}`, {
                method: "GET"
            })
            if (response.ok) {
                const data = await response.json();
                setWebSeriesInfo(data);
            }
            else {
                console.log("some error is coming");
            }
        } catch (error) {
            console.log(error);
        }
    }


    const changescrolltype=()=>{
        if(overflowValue=='overflow-hidden')
        {
            setoverflowValue('overflow-auto');
            setoverflowtextvalue('See Less');
        }
        else
        {
            setoverflowValue('overflow-hidden');
            setoverflowtextvalue('See More');
        }
    }

    const getSeasonDetail = (id, index) => {
        setSeasonIndex(index);
    }
    const setEpisodeDetail = (id, index) => {
        setEpisodeIndex(index);
        setcurrEpisodeDetail(seasonIndex);
        if (videoRef.current) {
            videoRef.current.load(); // Reload the video
        }
    }



    useEffect(() => {
        getWebSeriesInfo();
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [params.id, EpisodeIndex])





    if (!WebSeriesInfo) {
        return <div className="text-white">Loading...</div>; // Loading state
    }





    // const suggestions = MovieDetails.filter(curMovie =>
    //     curMovie._id !== MovieInfo._id &&
    //     curMovie.tags.some(tag => MovieInfo.tags.includes(tag))
    //     // curMovie.tags.filter(tag => MovieInfo.tags.includes(tag)).length > 0          // can be done by this rather than above
    // );
    return (
        <>
            <div className="show_web_series_container">
                {/* <!-- movie video --> */}
                <div className="">
                    <video ref={videoRef} id="replace_movie" className="img-fluid" controls="controls" onmouseenter="showProgress()" onmouseleave="hideProgress()">{/*   */}
                        <source src={`/content/web_series/${WebSeriesInfo.seasons[seasonIndex].seasonFolderName}/${WebSeriesInfo.seasons[seasonIndex].episodes[EpisodeIndex].videoUrl}.mkv`} type="video/mp4" />
                    </video>
                </div>

                {/* <!-- movie name come here --> */}
                <div className="features mt-2 d-flex ">
                    <h4 id="webSeriesName" className="ms-4 h-font fw-bold">{WebSeriesInfo.webSeriesName}</h4>
                    <h4 id="seasonNumber" className="ms-4 h-font fw-bold">(Season {WebSeriesInfo.seasons[currEpisodeDetail].seasonNumber})</h4>
                    <h4 id="episodeNumber" className="ms-4 h-font fw-bold">(Episodes {WebSeriesInfo.seasons[currEpisodeDetail].episodes[EpisodeIndex].episodeNumber})</h4>
                </div>

                {/* <!-- movie description --> */}
                <div className="mt-2 features p-font ms-4">
                    <span className="ms-1 badge rounded-pill bg-light text-dark text-wrap ">
                        Duration: {WebSeriesInfo.seasons[currEpisodeDetail].episodes[EpisodeIndex].duration} h
                    </span> |
                    <span className="ms-2 badge rounded-pill bg-light text-dark text-wrap ">
                        Lang: {WebSeriesInfo.language}
                    </span> |
                    <span className="ms-2 badge rounded-pill bg-light text-dark text-wrap ">
                        age: {WebSeriesInfo.ageLimit}
                    </span> |
                    <span className="ms-2 badge rounded-pill bg-light text-dark text-wrap ">
                        rating: {WebSeriesInfo.rating}
                    </span>
                    <span className='d-flex'>
                        {WebSeriesInfo.tags.map((curTag, index) => {
                            return (<>
                                <h6 key={index} className="mt-4 m-2 badge rounded-5 bg-light text-dark text-wrap p-font mb-4">
                                    {curTag}
                                </h6>
                            </>)
                        })}

                    </span>
                </div>
                <hr />
                <h6 className="ms-4 p-font me-2 mt-3">description:</h6>
                <p className='ms-5'>{WebSeriesInfo.seasons[currEpisodeDetail].episodes[EpisodeIndex].description}</p>
                <br />
                <br />


                {/*   Seasons and episodes  */}


                <div className='ms-5 seasons_container'>
                    <div className='ms-5 seasonsInfo d-flex'>
                        {WebSeriesInfo.seasons.map((curSeason, index) => {
                            return (<>
                                <div className='season_number'>
                                    <h4 className='ms-5' key={index} onClick={() => getSeasonDetail(curSeason._id, index)}>Season {curSeason.seasonNumber}</h4>
                                </div>
                            </>)
                        })}
                    </div>
                    <hr />
                    <div className={`webSeriesSeasonEpisodes bg-dark ${overflowValue}`}>
                    {WebSeriesInfo.seasons[seasonIndex].episodes.map((curEpisode, index) => {
                        return (<>
                            <div className="text-white web_series_episodes mt-2" key={index}>
                                <div className="justify-content-center row">
                                    <div id="search_items_1" className="col-lg-11 col-md-12 px-4">
                                        <div style={{ border: "2px solid white" }} className="card pop bg-dark mb-4 shadow">
                                            <div className="row g-0 p-1 align-items-center">
                                                <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                                                    <img onClick={()=>setEpisodeDetail(curEpisode._id,index)} src={`/content/web_series/${WebSeriesInfo.seasons[seasonIndex].seasonFolderName}/${WebSeriesInfo.seasons[seasonIndex].seasonHoriImageName}.jpg`} className="horizontal_movie_img img-fluid rounded" alt="..." />
                                                </div>
                                                <div className="col-md-7 px-md-3">
                                                    <h4 className="fw-bold h-font text-center mt-0 mb-2">{curEpisode.title}</h4>
                                                    <p className="mt-4">{curEpisode.description.substring(0,150)} ....</p>
                                                    <div className="features">
                                                        <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                            {curEpisode.rating}
                                                        </span> |
                                                        <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                        {curEpisode.duration} h
                                                        </span> |
                                                        <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                            {WebSeriesInfo.language}
                                                        </span> |
                                                        <span className="badge rounded-pill bg-light text-dark text-wrap ">
                                                            {WebSeriesInfo.ageLimit}
                                                        </span>
                                                        <h6 className="mt-4">
                                                    {WebSeriesInfo.tags.map((tag,i)=>{
                                                        return(<>
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
                    })}
                    </div>
                </div>
                        <span className='d-flex justify-content-center mt-4 p-font' style={{cursor:"pointer"}}><h4 className='see_all_episode_button rounded' onClick={()=>changescrolltype()} style={{border:"1px solid white",padding:"6px",backgroundColor:'lightseagreen'}}>{overflowtextvalue}</h4></span>




                {/* Suggestions */}
                <div className='suggestion_container ms-5 mt-5'>
                    <h1 className='h-font'>Suggestions</h1>
                    <hr />

                    <div className='action_movie_container'>
                        <Swiper
                            slidesPerView={5.5}
                            spaceBetween={1}
                            loop="true"
                            // pagination={{
                            //   clickable: true,
                            //   el: ".swiper-pagination",
                            // }}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5.5,
                                    spaceBetween: 1,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper1"
                        >{WebSeries.map((curWebSeries, index) => {
                            return (
                                <>
                                    <SwiperSlide key={index}>
                                        <div className="swiper-slide sliding_movie1">
                                            <Link to={`/show_webseries/${curWebSeries._id}`} className="sliding_movie">
                                                <img src={`/content/web_series/${curWebSeries.WebSeriesImageURL}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        })}
                        </Swiper>
                    </div>
                </div>



            </div>
        </>
    )
}
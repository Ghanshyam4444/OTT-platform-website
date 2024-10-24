import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';
export const ShowMovie = () => {
    const [MovieInfo, setMovieInfo] = useState();
    const { MovieDetails } = useAuth();
    const params = useParams();
    const getMovieInfo = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/content/show_movie/${params.id}`, {
                method: "GET"
            })
            if (response.ok) {
                const data = await response.json();
                setMovieInfo(data);
            }
            else {
                console.log("some error is coming");
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getMovieInfo();
    }, [params.id])
    if (!MovieInfo) {
        return <div className="text-white">Loading...</div>; // Loading state
    }
    const suggestions = MovieDetails.filter(curMovie =>
        curMovie._id !== MovieInfo._id &&
        curMovie.tags.some(tag => MovieInfo.tags.includes(tag))
        // curMovie.tags.filter(tag => MovieInfo.tags.includes(tag)).length > 0          // can be done by this rather than above
    );
    return (
        <>
            <div className="">
                {/* <!-- movie video --> */}
                <div className="">
                    <video id="replace_movie" className="img-fluid" controls="controls" onmouseenter="showProgress()" onmouseleave="hideProgress()">{/*   */}
                        <source src={`/content/${MovieInfo.folderName}/${MovieInfo.movieVideoName}.mkv`} type="video/mp4" />
                    </video>
                </div>

                {/* <!-- movie name come here --> */}
                <div className="features ms-4 mt-2">
                    <h2 id="movie_name" className="ms-4 container1 h-font fw-bold">{MovieInfo.movieName}</h2>
                </div>

                {/* <!-- movie description --> */}
                <div className="features p-font ms-4">
                    <span className="ms-1 badge rounded-pill bg-light text-dark text-wrap ">
                        Duration: {MovieInfo.duration} h
                    </span> |
                    <span className="ms-2 badge rounded-pill bg-light text-dark text-wrap ">
                        Lang: {MovieInfo.language}
                    </span> |
                    <span className="ms-2 badge rounded-pill bg-light text-dark text-wrap ">
                        age: {MovieInfo.age_limit}
                    </span> |
                    <span className="ms-2 badge rounded-pill bg-light text-dark text-wrap ">
                        rating: {MovieInfo.rating}
                    </span>
                    <span className='d-flex'>
                        {MovieInfo.tags.map((curTag, index) => {
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
                <p className='ms-5'>{MovieInfo.aboutMovie}</p>
                <br />
                <br />


                {/* Suggestions */}
                <div className='suggestion_container'>
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
                        >{suggestions.map((curMovie, index) => (
                            <SwiperSlide key={index}>
                                <div className="swiper-slide sliding_movie1">
                                    <Link to={`/show_movie/${curMovie._id}`} className="sliding_movie">
                                        <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>
                </div>



                {/* comments */}
            </div>
        </>
    )
}
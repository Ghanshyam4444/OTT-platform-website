import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useAuth } from "../store/auth";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
export const Home = () => {
    const { MovieDetails } = useAuth();
    const { isLoggedIn } = useAuth();
    const { isSubscriber } = useAuth();
    const { WebSeries } = useAuth();
    const navigate = useNavigate();
    const {user}=useAuth();
    const MoviefullDetail = MovieDetails;
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn, navigate])
    if (!isLoggedIn) return null;



    return (
        <>
            {/* Carousel */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                    effect: "fade"
                }}
                // pagination={{
                //   clickable: true,
                // }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className="swiper-slide caro">
                        <img src="/content/Latest_released/latest_released_movie_poster/12th_fail_i1.jpg" width="100%" height="100%" className="carousel_img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide caro">
                        <img src="/content/Latest_released/latest_released_movie_poster/12th_fail_i1.jpg" width="100%" height="100%" className="carousel_img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide caro">
                        <img src="/content/Latest_released/latest_released_movie_poster/12th_fail_i1.jpg" width="100%" height="100%" className="carousel_img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide caro">
                        <img src="/content/Latest_released/latest_released_movie_poster/12th_fail_i1.jpg" width="100%" height="100%" className="carousel_img" />
                    </div>
                </SwiperSlide>
            </Swiper>



            {/* Action movies */}
            <div className='action_movie_container'>
                <div className='Movie_type_description h-font'>
                    <h1>Action Movies</h1>
                </div>
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
                >
                    {MovieDetails.filter((curMovie) => curMovie.tags.includes("Action")).map((curMovie, index) => {
                        if (!isSubscriber && curMovie.isPremium) {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1" style={{ border: "4px solid red" }}>
                                        <Link to={`/subscriber_plans/${user._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                        else {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1">
                                        <Link to={`/show_movie/${curMovie._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                    })}
                </Swiper>
            </div>


            {/* comedy movies */}
            <div className='action_movie_container'>
                <div className='Movie_type_description h-font'>
                    <h1>comedy Movies</h1>
                </div>
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
                >
                    {MovieDetails.filter((curMovie) => curMovie.tags.includes("Comedy")).map((curMovie, index) => {
                        if (!isSubscriber && curMovie.isPremium) {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1" style={{ border: "4px solid red" }}>
                                        <Link to={`/subscriber_plans/${user._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                        else {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1">
                                        <Link to={`/show_movie/${curMovie._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                    })}
                </Swiper>
            </div>


            {/* Crime */}
            <div className='action_movie_container'>
                <div className='Movie_type_description h-font'>
                    <h1>Crime</h1>
                </div>
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
                >

                    {MovieDetails.filter((curMovie) => curMovie.tags.includes("Crime")).map((curMovie, index) => {
                        if (!isSubscriber && curMovie.isPremium) {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1" style={{ border: "4px solid red" }}>
                                        <Link to={`/subscriber_plans/${user._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                        else {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1">
                                        <Link to={`/show_movie/${curMovie._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                    })}
                </Swiper>
            </div>


            {/* family */}
            <div className='action_movie_container'>
                <div className='Movie_type_description h-font'>
                    <h1>
                        family</h1>
                </div>
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
                >
                    {MovieDetails.filter((curMovie) => curMovie.tags.includes("Family")).map((curMovie, index) => {
                        if (!isSubscriber && curMovie.isPremium) {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1" style={{ border: "4px solid red" }}>
                                        <Link to={`/subscriber_plans/${user._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                        else {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1">
                                        <Link to={`/show_movie/${curMovie._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                    })}
                </Swiper>
            </div>

            {/* horror */}
            <div className='action_movie_container'>
                <div className='Movie_type_description h-font'>
                    <h1>
                        horror
                    </h1>
                </div>
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
                >

                    {MovieDetails.filter((curMovie) => curMovie.tags.includes("Horror")).map((curMovie, index) => {
                        if (!isSubscriber && curMovie.isPremium) {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1" style={{ border: "4px solid red" }}>
                                        <Link to={`/subscriber_plans/${user._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                        else {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1">
                                        <Link to={`/show_movie/${curMovie._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                    })}
                </Swiper>
            </div>


            {/* Latest Released */}
            <div className='action_movie_container'>
                <div className='Movie_type_description h-font'>
                    <h1>
                        Latest Released
                    </h1>
                </div>
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
                >
                    {MovieDetails.filter((curMovie) => curMovie.tags.includes("Latest")).map((curMovie, index) => {
                        if (!isSubscriber && curMovie.isPremium) {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1" style={{ border: "4px solid red" }}>
                                        <Link to={`/subscriber_plans/${user._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                        else {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1">
                                        <Link to={`/show_movie/${curMovie._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                    })}
                </Swiper>
            </div>

            {/* Most popular */}
            <div className='action_movie_container'>
                <div className='Movie_type_description h-font'>
                    <h1>
                        Most popular
                    </h1>
                </div>
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
                >

                    {MovieDetails.filter((curMovie) => curMovie.tags.includes("MostPopular")).map((curMovie, index) => {
                        if (!isSubscriber && curMovie.isPremium) {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1" style={{ border: "4px solid red" }}>
                                        <Link to={`/subscriber_plans/${user._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                        else {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1">
                                        <Link to={`/show_movie/${curMovie._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                    })}
                </Swiper>
            </div>


            {/* Romance */}
            <div className='action_movie_container'>
                <div className='Movie_type_description h-font'>
                    <h1>
                        Romance
                    </h1>
                </div>
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
                >
                    {MovieDetails.filter((curMovie) => curMovie.tags.includes("Romance")).map((curMovie, index) => {
                        if (!isSubscriber && curMovie.isPremium) {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1" style={{ border: "4px solid red" }}>
                                        <Link to={`/subscriber_plans/${user._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                        else {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1">
                                        <Link to={`/show_movie/${curMovie._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                    })}
                </Swiper>
            </div>

            {/* superhero */}
            <div className='action_movie_container'>
                <div className='Movie_type_description h-font'>
                    <h1>
                        superhero
                    </h1>
                </div>
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
                >

                    {MovieDetails.filter((curMovie) => curMovie.tags.includes("SuperHero")).map((curMovie, index) => {
                        if (!isSubscriber && curMovie.isPremium) {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1" style={{ border: "4px solid red" }}>
                                        <Link to={`/subscriber_plans/${user._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                        else {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1">
                                        <Link to={`/show_movie/${curMovie._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                    })}
                </Swiper>
            </div>


            {/* thriller */}
            <div className='action_movie_container'>
                <div className='Movie_type_description h-font'>
                    <h1>
                        thriller</h1>
                </div>
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
                >
                    {MovieDetails.filter((curMovie) => curMovie.tags.includes("Thriller")).map((curMovie, index) => {
                        if (!isSubscriber && curMovie.isPremium) {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1" style={{ border: "4px solid red" }}>
                                        <Link to={`/subscriber_plans/${user._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                        else {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1">
                                        <Link to={`/show_movie/${curMovie._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                    })}
                </Swiper>
            </div>

            {/* ViewVibeSpecial */}
            <div className='action_movie_container'>
                <div className='Movie_type_description h-font'>
                    <h1>
                        ViewVibeSpecial</h1>
                </div>
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
                >

                    {MovieDetails.filter((curMovie) => curMovie.tags.includes("ViewVibeSpecial")).map((curMovie, index) => {
                        if (!isSubscriber && curMovie.isPremium) {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1" style={{ border: "4px solid red" }}>
                                        <Link to={`/subscriber_plans/${user._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                        else {
                            return (<>
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide sliding_movie1">
                                        <Link to={`/show_movie/${curMovie._id}`} className="sliding_movie">
                                            <img src={`/content/${curMovie.folderName}/${curMovie.imageName}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                    })}
                </Swiper>
            </div>


            {/* Webseries */}
            <div className='action_movie_container'>
                <div className='Movie_type_description h-font'>
                    <h1>Webseries</h1>
                </div>
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
                >
                    {WebSeries.map((curWebSeries, index) => {
                        if (curWebSeries.isPremiumWebSeries && !isSubscriber) {
                            return (
                                <>
                                    <SwiperSlide key={index}>
                                        <div className="swiper-slide sliding_movie1" style={{ border: "4px solid red" ,borderRadius:"10px"}}>
                                            <Link to={`/subscriber_plans/${user._id}`} className="sliding_movie">
                                                <img src={`/content/web_series/${curWebSeries.WebSeriesImageURL}.jpg`} className='sliding_movie_img' alt="Movie Thumbnail" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        }
                        else {
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
                        }
                    })}
                </Swiper>
            </div>




        </>
    )
}
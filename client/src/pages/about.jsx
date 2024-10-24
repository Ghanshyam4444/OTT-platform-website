import React from "react";
import { NavLink } from 'react-router-dom';
export const About = () => {
    return (
        <>
            <div className="about_us_description">
                <h1 className="h-font">ABOUT US</h1>
                <p className="h-font">Welcome to our ViewVibe website</p>
            </div>
            <div className="about_ourself">
                <div className="about_ourself_description">
                    <h1>WELCOME TO OUR OTT-Platform WEBSITE</h1>
                    <p>"Welcome to our OTT platform, where entertainment meets convenience! Discover a vast library of movies, TV shows, and original content curated just for you. With seamless streaming on any device, immerse yourself in high-quality entertainment anytime, anywhere. From gripping dramas to laugh-out-loud comedies, there's something for everyone. Join us today and elevate your viewing experience to the next level!" please share your experience by giving rating and review.
                        thanks a lot....</p>
                    <p>--GHANSHYAM MANGLA--</p>
                </div>
                <div className="about_ourself_image"><img src="content/action_movies/Action.png" width={200} height={200} /></div>
            </div>
            <div className="our_facilities">
                <div className="facilities">
                    100+Support Assists
                </div>
                <div className="facilities">
                    100M+ Subscriber
                </div>
                <div className="facilities">
                    50K+ Staff
                </div>
                <div className="facilities">
                    1M+ Reviews
                </div>
            </div>
        </>
    )
}

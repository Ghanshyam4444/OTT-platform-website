import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../store/auth';

export const AddWebSeries = () => {
    const { authorization_token } = useAuth();
    const [webSeries, setWebSeries] = useState({
        webSeriesName: '',
        WebSeriesImageURL: '',
        description: '',
        tags: [],
        ageLimit: '',
        isPremiumWebSeries: '',
        rating: '',
        language: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setWebSeries((prev) => {
                const tags = checked
                    ? [...prev.tags, value]
                    : prev.tags.filter((tag) => tag !== value);
                return { ...prev, tags };
            });
        } else {
            setWebSeries({
                ...webSeries,
                [name]: value
            });
        }
    };

    const [seasons, setSeasons] = useState([{
        seasonNumber: '',
        seasonFolderName: '',
        seasonImageName: '',
        seasonHoriImageName: '',
        episodes: [{
            episodeNumber: '',
            title: '',
            description: '',
            duration: '',
            rating: '',
            videoUrl: ''
        }]
    }]);

    const handleSeasonChange = (index, e) => {
        const { name, value } = e.target;
        const newSeasons = [...seasons];
        newSeasons[index][name] = value;
        setSeasons(newSeasons);
    };

    const addSeason = () => {
        setSeasons([...seasons, {
            seasonNumber: '',
            seasonFolderName: '',
            seasonImageName: '',
            seasonHoriImageName: '',
            episodes: [{
                episodeNumber: '',
                title: '',
                description: '',
                duration: '',
                rating: '',
                videoUrl: ''
            }]
        }]);
    };

    const removeSeason = (index) => {
        const newSeasons = [...seasons];
        newSeasons.splice(index, 1); // Remove the season
        setSeasons(newSeasons);
    };

    const handleEpisodeChange = (seasonIndex, episodeIndex, e) => {
        const { name, value } = e.target;
        const newSeasons = [...seasons];
        newSeasons[seasonIndex].episodes[episodeIndex][name] = value;
        setSeasons(newSeasons);
    };

    const addEpisode = (seasonIndex) => {
        const newSeasons = [...seasons];
        newSeasons[seasonIndex].episodes.push({
            episodeNumber: '',
            title: '',
            description: '',
            duration: '',
            rating: '',
            videoUrl: ''
        });
        setSeasons(newSeasons);
    };

    const removeEpisode = (seasonIndex, episodeIndex) => {
        const newSeasons = [...seasons];
        newSeasons[seasonIndex].episodes.splice(episodeIndex, 1); // Remove the episode
        setSeasons(newSeasons);
    };

    // const store_web_series_data = async () => {
    //     try {
    //         const bodyData = {
    //             ...webSeries,
    //             seasons: seasons
    //         };
    //         console.log(bodyData);//dshfjhsdjkhfdj

    //         const response = await fetch("http://localhost:8000/api/admin/webseries", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization: authorization_token,
    //             },
    //             body: JSON.stringify(bodyData)
    //         });
    //         if (!response.ok) {
    //             console.log("error is coming")
    //             throw new Error('Network response was not ok');
    //         }
    //         else
    //         {
    //             console.log("error is not coming")
    //         }
    //         const data = await response.json();
    //         console.log(data);
    //     } catch (error) {
    //         console.log("error")
    //         console.log(error);
    //     }
    // };

    const store_web_series_data = async () => {
        try {
            // const bodyData = {
            //     ...webSeries,
            //     seasons: seasons,
            // };
            const bodyData = {
                webSeriesName: webSeries.webSeriesName,
                WebSeriesImageURL: webSeries.WebSeriesImageURL,
                description: webSeries.description,
                tags: webSeries.tags, // Ensure tags is an array
                ageLimit: webSeries.ageLimit,
                isPremiumWebSeries: webSeries.isPremiumWebSeries === 'true', // Convert to boolean
                rating: webSeries.rating,
                language: webSeries.language,
                seasons: seasons.map(season => ({
                    seasonNumber: season.seasonNumber,
                    seasonFolderName: season.seasonFolderName,
                    seasonImageName: season.seasonImageName,
                    seasonHoriImageName: season.seasonHoriImageName,
                    episodes: season.episodes.map(episode => ({
                        episodeNumber: episode.episodeNumber,
                        title: episode.title,
                        description: episode.description,
                        duration: episode.duration,
                        rating: episode.rating,
                        videoUrl: episode.videoUrl
                    }))
                }))
            };
            const response = await fetch("http://localhost:8000/api/admin/webseries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorization_token,
                },
                body: JSON.stringify(bodyData)
            });
            if (!response.ok) {
                console.log("error is coming");
                throw new Error('Network response was not ok');
            }
            else
            {
                setWebSeries({
                    webSeriesName: '',
                    WebSeriesImageURL: '',
                    description: '',
                    tags: [],
                    ageLimit: '',
                    isPremiumWebSeries: '',
                    rating: '',
                    language: '',
                });
                setSeasons([{
                    seasonNumber: '',
                    seasonFolderName: '',
                    seasonImageName: '',
                    seasonHoriImageName: '',
                    episodes: [{
                        episodeNumber: '',
                        title: '',
                        description: '',
                        duration: '',
                        rating: '',
                        videoUrl: ''
                    }]
                }]);
            }

        } catch (error) {
            console.error('Error in store_web_series_data:', error);
        }
    };

    const handleFinalSubmit = (e) => {
        e.preventDefault();
        store_web_series_data();
    };

    const availableTags = ["Action", "Comedy", "Crime", "Family", "Horror", "Latest", "MostPopular", "Romance", "SuperHero", "Thriller", "ViewVibeSpecial"];

    return (<>

        <div className="container mt-5">
            <h1 className="mb-4">Add Web Series</h1>
            <form onSubmit={handleFinalSubmit}>
                {/* Basic Web Series Info */}
                <div className="form-group">
                    <label htmlFor="webSeriesName">Web Series Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="webSeriesName"
                        name="webSeriesName"
                        value={webSeries.webSeriesName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="WebSeriesImageURL">Web Series Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="WebSeriesImageURL"
                        name="WebSeriesImageURL"
                        value={webSeries.WebSeriesImageURL}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        rows="3"
                        value={webSeries.description}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <label className="form-label">Tags:</label>
                <div className="tags-container" id="tagscontainer">
                    {availableTags.map((tag) => (
                        <div className="checkbox" key={tag}>
                            <input
                                type="checkbox"
                                name="tags"
                                value={tag}
                                checked={webSeries.tags.includes(tag)}
                                onChange={handleInputChange}
                            />
                            <label className="checkbox-label">{tag}</label>
                        </div>
                    ))}
                </div>
                <div className="form-group">
                    <label htmlFor="ageLimit">Age Limit</label>
                    <input
                        type="number"
                        className="form-control"
                        id="ageLimit"
                        name="ageLimit"
                        value={webSeries.ageLimit}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="isPremiumWebSeries">Is Premium Web Series?</label>
                    <select
                        className="form-control"
                        id="isPremiumWebSeries"
                        name="isPremiumWebSeries"
                        value={webSeries.isPremiumWebSeries}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select...</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating (0-10)</label>
                    <input
                        type="text"
                        className="form-control"
                        id="rating"
                        name="rating"
                        value={webSeries.rating}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="language">Language</label>
                    <input
                        type="text"
                        className="form-control"
                        id="language"
                        name="language"
                        value={webSeries.language}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <h3 className='mt-5'>Seasons</h3>
                {seasons.map((season, seasonIndex) => (
                    <div key={seasonIndex} className="season mt-4 mb-4">
                        <h4>Season {seasonIndex + 1}</h4>
                        <button type="button" className="btn btn-danger mb-3" onClick={() => removeSeason(seasonIndex)}>
                            Remove Season {seasonIndex + 1}
                        </button>
                        <div className="form-group">
                            <label htmlFor={`seasonNumber${seasonIndex}`}>Season Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="seasonNumber"
                                value={season.seasonNumber}
                                onChange={(e) => handleSeasonChange(seasonIndex, e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor={`seasonFolderName${seasonIndex}`}>Season Folder Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="seasonFolderName"
                                value={season.seasonFolderName}
                                onChange={(e) => handleSeasonChange(seasonIndex, e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor={`seasonImageName${seasonIndex}`}>Season Image Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="seasonImageName"
                                value={season.seasonImageName}
                                onChange={(e) => handleSeasonChange(seasonIndex, e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor={`seasonHoriImageName${seasonIndex}`}>Season Horizontal Image Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="seasonHoriImageName"
                                value={season.seasonHoriImageName}
                                onChange={(e) => handleSeasonChange(seasonIndex, e)}
                                required
                            />
                        </div>

                        <h5 className='mt-4'>Episodes for Season {seasonIndex + 1}</h5>
                        {season.episodes.map((episode, episodeIndex) => (
                            <div key={episodeIndex} className="episode mb-3">
                                <h6>Details of Episode {episodeIndex + 1}</h6>
                                <div className="form-group">
                                    <label htmlFor={`episodeNumber${seasonIndex}-${episodeIndex}`}>Episode Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="episodeNumber"
                                        value={episode.episodeNumber}
                                        onChange={(e) => handleEpisodeChange(seasonIndex, episodeIndex, e)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor={`episodeTitle${seasonIndex}-${episodeIndex}`}>Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        value={episode.title}
                                        onChange={(e) => handleEpisodeChange(seasonIndex, episodeIndex, e)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor={`episodeDescription${seasonIndex}-${episodeIndex}`}>Description</label>
                                    <textarea
                                        className="form-control"
                                        name="description"
                                        rows="2"
                                        value={episode.description}
                                        onChange={(e) => handleEpisodeChange(seasonIndex, episodeIndex, e)}
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor={`episodeDuration${seasonIndex}-${episodeIndex}`}>Duration (in minutes)</label>
                                    <input
                                        type="string"
                                        className="form-control"
                                        name="duration"
                                        value={episode.duration}
                                        onChange={(e) => handleEpisodeChange(seasonIndex, episodeIndex, e)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor={`episodeRating${seasonIndex}-${episodeIndex}`}>Rating (0-10)</label>
                                    <input
                                        type="string"
                                        className="form-control"
                                        name="rating"
                                        value={episode.rating}
                                        onChange={(e) => handleEpisodeChange(seasonIndex, episodeIndex, e)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor={`episodeVideoUrl${seasonIndex}-${episodeIndex}`}>Video URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="videoUrl"
                                        value={episode.videoUrl}
                                        onChange={(e) => handleEpisodeChange(seasonIndex, episodeIndex, e)}
                                        required
                                    />
                                </div>
                                <div className='d-flex justify-content-end mt-4'>

                                    <button type="button" className="btn btn-danger" onClick={() => removeEpisode(seasonIndex, episodeIndex)}>
                                        Remove Episode
                                    </button>
                                </div>
                            </div>
                        ))}

                        <button type="button" className="btn btn-secondary mb-3" onClick={() => addEpisode(seasonIndex)}>
                            Add More Episodes
                        </button>
                    </div>
                ))}
                <div className='d-flex justify-content-between'>
                    <button type="button" className="btn btn-secondary mb-3" onClick={addSeason}>
                        Add More Seasons
                    </button>
                    <button type="submit" className="btn btn-primary mb-3">Submit All</button>
                </div>
            </form>
        </div>
    </>
    );
};

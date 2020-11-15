import React, { useEffect, useState } from 'react'
import axios from "./axios"
import "./Row.css";
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
// base Url
const baseUrl = "http://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLarge }) {
    const [movies, setmovies] = useState([

    ]);
    // Used to set  the trailer url for Youtube
    const [trailerUrl, setTrailerurl] = useState("");
    // A snippet pof code runs on a specific conditions
    useEffect(() => {
        // if [] run once when the row loads and dont run again
        // if [movies] then if movies changes the n the piece of code runs again  
        // asyn function because it is going to take sometime to get the data
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setmovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    // Properties for the youtube Video bellow
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    };

    const handleClick = (movie) => {
        // Cancels the movie currently loaded

        if (trailerUrl) {
            setTrailerurl("");
        }
        else {
            movieTrailer(movie?.original_title || "").then(url => {
                // Checks if movie has name else puts a "" string
                // Sets the URL parameters and to make the search

                const urlParams = new URLSearchParams(new URL(url).search);
                // Sets the trailer URL
                setTrailerurl(urlParams.get("v"));

            }).catch(err => {

                console.log(err)
            })
        }
    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/* Severral row posters */}

                {
                    // Maps the movies into a single movie
                    movies.map(movie => (

                        <img onClick={() => {
                            handleClick(movie)

                        }} className={`row__poster ${isLarge && `row__posterLarge`}`} key={movie.id} src={baseUrl + (isLarge ? movie.poster_path : movie.backdrop_path)} alt={movie.name} />
                    ))
                }

            </div>
            {/* Sets the parameters for search and */}
            { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row

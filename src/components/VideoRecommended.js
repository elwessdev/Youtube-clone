import React, { useState,useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default function VideoRecommended({vidIdPass}){
    const [videosList, setVideosList]=useState([]);
    console.log("recom");
    // API
    const options = {
        method: 'GET',
        url: 'https://youtube-v3-alternative.p.rapidapi.com/related',
        params: {
            id: vidIdPass,
            geo: 'TN',
            lang: ''
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_APIKEY,
            'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
    };
    const getVideos = async() =>{
        try{
            const resp = await axios.request(options);
            setVideosList(resp.data.data);
            console.log("Vid Rec");
            console.log(resp.data.data);
        } catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getVideos();
    },[vidIdPass])
    return(
        <div className='vids-recommended'>
            {
                videosList.map(vid=>(
                    <Link to={`/video/${vid.videoId}`} className='vid-rec'>
                        <div className='vid-thum'>
                            <img src={vid?.thumbnail[1].url} alt={vid?.title} />
                            <p>{vid?.lengthText}</p>
                        </div>
                        <div className='vid-txt'>
                            <h3>{vid?.title}</h3>
                            <Link to={`/channel/${vid?.channelId}`}>{vid?.channelTitle}</Link>
                            <div className='vid-txt-nums'>
                                <span>{vid?.viewCount} views</span>
                                <span>{vid?.publishedTimeText}</span>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
};
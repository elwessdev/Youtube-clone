import React, { useState,useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {APIKEY} from "../api"

export default function VideoRecommended({vidIdPass}){
    const [videosList, setVideosList]=useState([]);
    console.log("recom");
    // API
    const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/video/related-contents/',
        params: {
            id: vidIdPass,
            hl: 'en',
            gl: 'US'
        },
        headers: {
            'X-RapidAPI-Key': APIKEY,
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };
    const getVideos = async() =>{
        try{
            const resp = await axios.request(options);
            setVideosList(resp.data.contents);
            console.log("Vid Rec");
            console.log(resp.data.contents);
        } catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getVideos();
    })
    return(
        <div className='vids-recommended'>
            {
                videosList.map(vid=>(
                    <Link to={`/video/${vid.video.videoId}`} className='vid-rec'>
                        <img src={vid?.video.thumbnails[0].url} alt={vid?.video.title} />
                        <div className='vid-txt'>
                            <h3>{vid?.video.title}</h3>
                            <a>{vid?.video.author.title}</a>
                            <div className='vid-txt-nums'>
                                <span>{vid?.video.stats.views} views</span>
                                <span>{vid?.videopublishedTimeText}</span>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
};
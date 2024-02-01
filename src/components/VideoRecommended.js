import React, { useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import { fetchData } from "../utils/fetchData";

export default function VideoRecommended({vidIdPass}){
    const [relatedVideos, setRelatedVideos]=useState([]);
    useEffect(()=>{
        // API
        fetchData(`related?geo=TN&lang=en&id=${vidIdPass}`).then(data=>setRelatedVideos(data.data));
    },[vidIdPass])
    return(
        <div className='vids-recommended'>
            {
                relatedVideos.map(vid=>(
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
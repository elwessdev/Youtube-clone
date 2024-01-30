import React from 'react';
import {Link} from "react-router-dom";

export default function VideoChannelShow({title,VideoId,videoThum,richVideoThum,views,date,vidLength}){
    return(
        <Link to={"/video/"+VideoId} href='#' className='video-channel-show'>
            <div className='thumbnail'>
                <img className='nrmlThum' src={videoThum} alt={title} />
                {/* <img className='richThum' src={richVideoThum} alt={title} /> */}
                <p className='video-duration'>{vidLength}</p>
            </div>
            <div className='video-details'>
                <h3>{title}</h3>
                <div className='vid-txt-nums'>
                    <span>{views} views</span>
                    <span>{date}</span>
                </div>
            </div>
        </Link>
    )
};
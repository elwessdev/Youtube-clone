import React from 'react';
import {Link} from "react-router-dom";

export default function Shorts({title,channelThum,views,VideoId,ChannelId}){
    return(
        <div className='short'>
            <div className='short-vid'>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${VideoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <Link to={`/channel/${ChannelId}`} className='video-details'>
                <img className='channel-img' src={channelThum} alt={""} />
                <div className='vid-txt'>
                    <h3>{title}</h3>
                    <span>{views} views</span>
                </div>
            </Link>
        </div>
    )
};
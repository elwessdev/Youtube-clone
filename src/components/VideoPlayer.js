import React from 'react';
import { Link } from 'react-router-dom';

export default function VideoPlayer({url,title,likes,views,channelName,channelSubs,channelPic,channelId}){
    return(
        <div className='video-player'>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+url+"?autoplay=1"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='video-infos'>
                <h2>{title}</h2>
                <div className='vid-btm'>
                    <Link to={"/channel/"+channelId} className='channel-box'>
                        <img src={channelPic} alt={channelName} />
                        <div className='chnl-info'>
                            <p>{channelName}</p>
                            <span>{channelSubs}</span>
                        </div>
                    </Link>
                    <div className='vid-cnt'>
                        <span>{views} views</span>
                        {/* <span>{likes} likes</span> */}
                    </div>
                </div>
            </div>
        </div>
    )
};
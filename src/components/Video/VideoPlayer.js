import React from 'react';
import { Link } from 'react-router-dom';

export default function VideoPlayer({url,title,likes,views,channelName,channelSubs,channelPic,channelId,channelBadge}){
    return(
        <div className='video-player'>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+url+"?autoplay=1"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='video-infos'>
                <h2>{title}</h2>
                <div className='vid-btm'>
                    <Link to={"/channel/"+channelId} className='channel-box'>
                        <img src={channelPic} alt={channelName} />
                        <div className='chnl-info'>
                            <p>
                                {channelName} 
                                {channelBadge &&(
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
                                    </span>
                                )}
                            </p>
                            <span>{channelSubs}</span>
                        </div>
                    </Link>
                    <div className='vid-cnt'>
                        <span>{views} views</span>
                        <span>{likes} likes</span>
                    </div>
                </div>
            </div>
        </div>
    )
};
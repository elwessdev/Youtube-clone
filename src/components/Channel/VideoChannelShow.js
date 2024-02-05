import React from 'react';
import {Link} from "react-router-dom";

export default function VideoChannelShow({ChnlsVideos}){
    return(
        <div className='vids-part'>
                {
                    ChnlsVideos.map(vid=>(
                            <Link to={"/video/"+vid?.video_id} href='#' className='video-channel-show'>
                                <div className='thumbnail'>
                                    <img className='nrmlThum' src={vid?.thumbnails[2].url} alt={vid?.title} />
                                    <p className='video-duration'>{vid?.video_length}</p>
                                </div>
                                <div className='video-details'>
                                    <h3>{vid?.title}</h3>
                                    <div className='vid-txt-nums'>
                                        <span>{vid?.number_of_views} views</span>
                                        <span>{vid?.published_time}</span>
                                    </div>
                                </div>
                            </Link>
                    ))
                }
        </div>
        
        )
    };
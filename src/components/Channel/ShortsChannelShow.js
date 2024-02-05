import React from 'react';
import {Link} from "react-router-dom";

export default function ShortsChannelShow({ChnlsShorts}){
    return(
        <div className='shorts-part'>
                {
                    ChnlsShorts.map(vid=>(
                            <Link to={"/video/"+vid?.video_id} href='#' className='video-channel-show'>
                                <div className='thumbnail'>
                                    <img className='nrmlThum' src={vid?.thumbnails[0].url} alt={vid?.title} />
                                </div>
                                <div className='video-details'>
                                    <h3>{vid?.title}</h3>
                                    <div className='vid-txt-nums'>
                                        <span>{vid?.number_of_views} views</span>
                                    </div>
                                </div>
                            </Link>
                    ))
                }
        </div>
        )
    };
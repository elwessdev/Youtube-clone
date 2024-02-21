import React,{useRef} from 'react';
import {Link} from "react-router-dom";

export default function VideoShow({vidsList}){
    // console.log("video Show Props:",vidsList)
    return(
    <div className='videosList'>
        {
            vidsList?.map(vid=>{
                if(vid?.type!=="channel"){
                    return (
                        <Link to={"/video/"+vid?.videoId} href='#' className='video-show'>
                            <div className='thumbnail'>
                                <img src={vid?.thumbnail[0].url} alt={vid?.title} />
                                <p className='video-duration'>{vid?.lengthText}</p>
                            </div>
                            <div className='video-details'>
                                {/* <img className='channel-img' src={vid?.channelThumbnail.length!==0 ? vid?.channelThumbnail[0].url :" "} alt={vid?.channelTitle} /> */}
                                <div className='vid-txt'>
                                    <h3>{vid?.title}</h3>
                                    <Link to={"/channel/"+vid?.channelId}>{vid?.channelTitle}</Link>
                                    <div className='vid-txt-nums'>
                                        <span>{vid?.viewCount}K views</span>
                                        <span>{vid?.publishedText}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            })
        }
    </div>
    )
};
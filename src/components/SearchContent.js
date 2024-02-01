import React, { useEffect, useState } from 'react';
import { fetchData } from "../utils/fetchData";

// Components
import VideoShow from "./VideoShow";
import ChannelProfileShow from "./ChannelProfileShow";
export default function SearchContent({searchTxtQQ}){
    const [videosList, setVideosList]=useState([]);
    useEffect(()=>{
        fetchData(`search?geo=TN&lang=en&query=${searchTxtQQ}`).then(data=>setVideosList(data.data));
    },[searchTxtQQ])
    return(
        <div className='search-content'>
            <h2 className='search-title'>Search Results For <span>{searchTxtQQ}</span></h2>
            <div className='search-result'>
                <div className='chanls'>
                {
                    videosList.map(vid=>{
                        if(vid.type==="channel"){
                            return <ChannelProfileShow 
                                    channelID={vid?.channelId}
                                    channelPic={vid?.thumbnail[0].url}
                                    channelName={vid?.title}
                                    channelSubs={vid?.subscriberCount} 
                                    />
                                }
                    })
                }
                </div>
                <div className='vids'>
                {
                    videosList.map(vid=>{
                        if(vid.type==="video"){
                            return <VideoShow
                                    title={vid?.title}
                                    channelName={vid?.channelTitle}
                                    channelThum={vid?.channelThumbnail[0].url}
                                    videoThum={vid?.thumbnail[0].url}
                                    views={vid?.viewCount}
                                    date={vid?.publishedText}
                                    VideoId={vid?.videoId}
                                    ChannelId={vid?.channelId}
                                    vidLength={vid?.lengthText}
                                />
                        }
                    })
                }
                </div>
            </div>
        </div>
    )
};
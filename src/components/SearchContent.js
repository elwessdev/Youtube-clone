import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import VideoShow from "./VideoShow";
import ChannelProfileShow from "./ChannelProfileShow";

export default function SearchContent({searchTxtQQ}){
    const [videosList, setVideosList]=useState([]);
    // API
    const options = {
        method: 'GET',
        url: 'https://youtube-v3-alternative.p.rapidapi.com/search',
        params: {
            query: searchTxtQQ,
            geo: 'TN',
            lang: ''
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_APIKEY,
            'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
    };
    const getVideo = async() =>{
        try{
            const resp = await axios.request(options);
            setVideosList(resp.data.data);
            console.log(resp.data.data)
        } catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getVideo();
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
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {APIKEY} from "../api"

// Components
import VideoShow from "./VideoShow";
import ChannelProfileShow from "./ChannelProfileShow";

export default function SearchContent({searchTxtQQ}){
    const [videosList, setVideosList]=useState([]);
    // API
    const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/search/',
        params: {
            q: searchTxtQQ,
            hl: 'en',
            gl: 'US'
        },
        headers: {
            'X-RapidAPI-Key': APIKEY,
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };
    const getVideo = async() =>{
        try{
            const resp = await axios.request(options);
            setVideosList(resp.data.contents);
            console.log(resp.data.contents)
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
                                    channelID={vid?.channel.channelId}
                                    channelPic={vid?.channel.avatar[0].url}
                                    channelName={vid?.channel.title}
                                    channelSubs={vid?.channel.stats.subscribersText} 
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
                                    title={vid?.video.title}
                                    channelName={vid?.video.author.title}
                                    channelImg={vid?.video.author.avatar[0].url}
                                    thum={vid?.video.thumbnails[0].url}
                                    // movingThumbnails={vid?.video.movingThumbnails[0].url}
                                    views={vid?.video.stats.views}
                                    date={vid?.video.publishedTimeText}
                                    VideoId={vid?.video.videoId}
                                    ChannelId={vid?.video.author.channelId}
                                />
                        }
                    })
                }
                </div>
            </div>
        </div>
    )
};
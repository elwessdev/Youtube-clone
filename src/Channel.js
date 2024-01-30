import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {APIKEY} from "./api"

// Components
import SearchBar from "./components/SearchBar";
import VideoShow from "./components/VideoShow";

export default function Channel(){
    const params = useParams();
    const channelId = params.channelId;
    console.log("channel id:",channelId);
    // 
    const [channelDetails, setChannelDetails]=useState();
    const [videosList, setVideosList]=useState();
    // API Get Channel Details
    const APIChannelDetails = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/channel/details/',
        params: {
            id: channelId,
            hl: 'en',
            gl: 'US'
        },
        headers: {
            'X-RapidAPI-Key': APIKEY,
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };
    const getChannelDetails = async() =>{
        try{
            const resp = await axios.request(APIChannelDetails);
            setChannelDetails(resp.data);
            console.log("channel Details")
            console.log(resp.data)
        } catch(error){
            console.log(error)
        }
    }
    // API Get Channel Videos
    const APIChannelVideos = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/channel/videos/',
        params: {
            id: channelId,
            hl: 'en',
            gl: 'US'
        },
        headers: {
            'X-RapidAPI-Key': APIKEY,
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };
    const getChannelVideos = async() =>{
        try{
            const resp = await axios.request(APIChannelVideos);
            setVideosList(resp.data.contents);
            console.log("channel videos");
            console.log(resp.data.contents);
        } catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getChannelDetails();
        // getChannelVideos();
    },[channelId])
    return(
        <div className='channel-page'>
            <SearchBar />
            <div className='channel-page-content'>
                <div className='top-part'>
                    <img className='cover' src={channelDetails?.banner.desktop[2].url} alt='' />
                    <div className='channel-profile'>
                        <img src={channelDetails?.avatar[2].url} alt={channelDetails?.title} />
                        <h3>{channelDetails?.title}</h3>
                        <p>
                            <span>{channelDetails?.stats.subscssribersText}</span>
                            <span>775 videos</span>
                        </p>
                    </div>
                </div>
                <div className='vids-part'>
                {/* {
                    videosList.map(vid=>{
                        if(vid.type==="video"){
                            return <VideoShow
                                    title={vid?.title}
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
                } */}
                </div>
            </div>
        </div>
    )
};
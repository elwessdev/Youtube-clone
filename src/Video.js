import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Components
import SearchBar from "./components/SearchBar";
import VideoRecommended from "./components/VideoRecommended";
import VideoPlayer from "./components/VideoPlayer";

export default function Video(){
    const [videoDetails, setVideoDetails]=useState();
    // Video ID
    const params = useParams();
    const videoIdRP = params.vidId;
    console.log("video id:", videoIdRP)
    // API
    const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/video/details/',
        params: {
            id: videoIdRP,
            hl: 'en',
            gl: 'US'
        },
        headers: {
            'X-RapidAPI-Key': '4fc06a7021msh6cf3288f3aaa3d3p13eb0bjsn5983187488d0',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };
    const getVideo = async() =>{
        try{
            const resp = await axios.request(options);
            setVideoDetails(resp.data);
            console.log(resp.data)
        } catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoIdRP])
    return(
        <div className='video-page'>
            <SearchBar />
            <div className='video-page-content'>
                <VideoPlayer 
                    url={videoIdRP} title={videoDetails?.title} likes={videoDetails?.stats.likes} views={videoDetails?.stats.views} channelName={videoDetails?.author.title} channelSubs={videoDetails?.author.stats.subscribersText} channelPic={videoDetails?.author.avatar[0].url} channelId={videoDetails?.author.channelId}
                />
                <VideoRecommended vidIdPass={videoIdRP} />
            </div>
        </div>
    )
};
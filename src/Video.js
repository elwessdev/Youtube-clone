import React,{useEffect, useState, Suspense} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Components
import SearchBar from "./components/SearchBar";
// import VideoRecommended from "./components/VideoRecommended";
// import VideoPlayer from "./components/VideoPlayer";
const LazyVideoPlayer = React.lazy(()=>import("./components/VideoPlayer"));
const LazyVideoRecommended = React.lazy(()=>import("./components/VideoRecommended"));

export default function Video(){
    const [videoDetails, setVideoDetails]=useState();
    // Video ID
    const params = useParams();
    const videoIdRP = params.vidId;
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
            'X-RapidAPI-Key': 'd6b90ba949msh1b632d2b88ff181p1b5fd1jsn244301737341',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };
    const getVideo = async() =>{
        try{
            const resp = await axios.request(options);
            setVideoDetails(resp.data);
            console.log("video details:", resp.data)
        } catch(error){
            console.log("video details:", error)
        }
    }
    useEffect(()=>{
        getVideo();
    }, [videoIdRP])
    return(
        <div className='video-page'>
            <SearchBar />
            <div className='video-page-content'>
            <Suspense>
                <LazyVideoPlayer 
                    url={videoIdRP} title={videoDetails?.title} likes={videoDetails?.stats.likes} views={videoDetails?.stats.views} channelName={videoDetails?.author.title} channelSubs={videoDetails?.author.stats.subscribersText} channelPic={videoDetails?.author.avatar[0].url} channelId={videoDetails?.author.channelId} channelBadge={videoDetails?.author.badges.length === 1}
                />
                <LazyVideoRecommended vidIdPass={videoIdRP} />
            </Suspense>
            </div>
        </div>
    )
};
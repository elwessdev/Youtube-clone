import React from 'react';

// Components
import SearchBar from "./components/SearchBar";
import VideoRecommended from "./components/VideoRecommended";
import VideoPlayer from "./components/VideoPlayer";

export default function Video(){
    return(
        <div className='video-page'>
            <SearchBar />
            <div className='video-page-content'>
                <VideoPlayer />
                <div className='vids-recommended'>
                    <VideoRecommended />
                    <VideoRecommended />
                    <VideoRecommended />
                    <VideoRecommended />
                    <VideoRecommended />
                    <VideoRecommended />
                    <VideoRecommended />
                    <VideoRecommended />
                    <VideoRecommended />
                    <VideoRecommended />
                    <VideoRecommended />
                    <VideoRecommended />
                    <VideoRecommended />
                    <VideoRecommended />
                    <VideoRecommended />
                    <VideoRecommended />
                    <VideoRecommended />
                </div>
            </div>
        </div>
    )
};
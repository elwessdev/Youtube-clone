import React from 'react';

// Components
import VideoShow from "./VideoShow";
import ChannelProfileShow from "./ChannelProfileShow";

export default function HomeContent(){
    return(
        <div className='search-content'>
            <h2 className='search-title'>Search Results For <span>games</span></h2>
            <div className='search-result'>
                <div className='chanls'>
                    <ChannelProfileShow />
                    <ChannelProfileShow />
                    <ChannelProfileShow />
                    <ChannelProfileShow />
                    <ChannelProfileShow />
                </div>
                <div className='vids'>
                    <VideoShow />
                    <VideoShow />
                    <VideoShow />
                    <VideoShow />
                    <VideoShow />
                    <VideoShow />
                    <VideoShow />
                    <VideoShow />
                    <VideoShow />
                    <VideoShow />
                    <VideoShow />
                    <VideoShow />
                </div>
            </div>
        </div>
    )
};
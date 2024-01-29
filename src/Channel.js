import React from 'react';

// Components
import SearchBar from "./components/SearchBar";
import VideoShow from "./components/VideoShow";

export default function Channel(){
    return(
        <div className='channel-page'>
            <SearchBar />
            <div className='channel-page-content'>
                <div className='top-part'>
                    <img className='cover' src='https://yt3.googleusercontent.com/NP3nTQ3kxLiXV-kLXKS2zaNL6ESMMBv74m-d5a--q5ThgLD6I-IyqLwAbj-AbClWNbORBg3Pcg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj' />
                    <div className='channel-profile'>
                        <img src='https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s176-c-k-c0x00ffffff-no-rj-mo' />
                        <h3>MrBeast</h3>
                        <p>
                            <span>235M subscribers</span>
                            <span>775 videos</span>
                        </p>
                    </div>
                </div>
                <div className='vids-part'>
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
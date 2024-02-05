import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from "./utils/fetchData";

// Components
import SearchBar from "./components/SearchBar";
// import VideoChannelShow from "./components/VideoChannelShow";
const LazyVideoChannelShow = React.lazy(()=>import("./components/VideoChannelShow"));

export default function Channel(){
    const params = useParams();
    const channelId = params.channelId;
    console.log("channel id:",channelId);
    const [channelDetails, setChannelDetails]=useState();
    const [channelVids, setChannelVids]=useState([]);
    
    useEffect(()=>{
        // API Get Channel Details
        fetchData(`channel?id=${channelId}`).then(data=>{
            setChannelDetails(data.meta);
            setChannelVids(data.data);
            console.log(data.meta)
        });
    },[channelId])
    return(
        <div className='channel-page'>
            <SearchBar />
            <div className='channel-page-content'>
                <div className='top-part'>
                    <img className='cover' src={channelDetails?.image.banner[2].url} alt='' />
                    <div className='channel-profile'>
                        <img src={channelDetails?.thumbnail[2].url} alt={channelDetails?.title} />
                        <h3>
                            {channelDetails?.title}
                            {(channelDetails?.subscriberCount.slice(-1) === "K" || channelDetails?.subscriberCount.slice(-1) === "M") &&(
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
                            )}
                        </h3>
                        <p>{channelDetails?.subscriberCount} subscribers</p>
                        {/* <p>{channelDetails?.description}</p> */}
                    </div>
                </div>
                <div className='cat-switch'>
                    <a>Videos</a>
                    <a>Shorts</a>
                    <a>About</a>
                </div>
                <div className='vids-part'>
                {
                    channelVids.map(vid=>(
                        <Suspense fallback="Loading...">
                            <LazyVideoChannelShow
                                title={vid?.title}
                                VideoId={vid?.videoId}
                                videoThum={vid?.thumbnail[2].url}
                                // richVideoThum={vid?.richThumbnail[0].url}
                                views={vid?.viewCount}
                                date={vid?.publishedText}
                                vidLength={vid?.lengthText}
                            />
                        </Suspense>
                    ))
                }
                </div>
            </div>
        </div>
    )
};
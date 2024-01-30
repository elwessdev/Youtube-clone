import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Components
import SearchBar from "./components/SearchBar";
import VideoChannelShow from "./components/VideoChannelShow";

export default function Channel(){
    const params = useParams();
    const channelId = params.channelId;
    console.log("channel id:",channelId);
    // 
    const [channelDetails, setChannelDetails]=useState();
    const [channelVids, setChannelVids]=useState([]);
    // API Get Channel Details
    const options = {
        method: 'GET',
        url: 'https://youtube-v3-alternative.p.rapidapi.com/channel',
        params: {id: channelId},
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_APIKEY,
            'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
    };
    const getChannelDetails = async() =>{
        try{
            const resp = await axios.request(options);
            setChannelDetails(resp.data.meta);
            console.log(resp.data.meta)
            setChannelVids(resp.data.data);
            console.log(resp.data.data)
        } catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getChannelDetails();
    },[channelId])
    return(
        <div className='channel-page'>
            <SearchBar />
            <div className='channel-page-content'>
                <div className='top-part'>
                    <img className='cover' src={channelDetails?.image.banner[2].url} alt='' />
                    <div className='channel-profile'>
                        <img src={channelDetails?.thumbnail[2].url} alt={channelDetails?.title} />
                        <h3>{channelDetails?.title}</h3>
                        <p>{channelDetails?.subscriberCount}</p>
                        {/* <p>{channelDetails?.description}</p> */}
                    </div>
                </div>
                <div className='vids-part'>
                {
                    channelVids.map(vid=>(
                        <VideoChannelShow
                            title={vid?.title}
                            VideoId={vid?.videoId}
                            videoThum={vid?.thumbnail[2].url}
                            // richVideoThum={vid?.richThumbnail[0].url}
                            views={vid?.viewCount}
                            date={vid?.publishedText}
                            vidLength={vid?.lengthText}
                        />
                    ))
                }
                </div>
            </div>
        </div>
    )
};
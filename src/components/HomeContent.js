import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {APIKEY} from "../api"

// Components
import VideoShow from "./VideoShow";


export default function HomeContent(){
    const [vids, setVids]=useState([]);
    // API
    const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/home/',
        params: {hl: 'en', gl: 'US',cursor: '',},
        headers: {
            'X-RapidAPI-Key': APIKEY,
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };
    const getVids = async() =>{
        try{
            const resp = await axios.request(options);
            // console.log(resp.data.contents[0].video.publishedTimeText)
            setVids(resp.data.contents);
        } catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getVids();
    },[])
    return(
        <div className='home-content'>
            {vids.map(vid=>(<VideoShow
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
            ))}
        </div>
    )
};
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import {SideContext} from "../Home";

// Components
import VideoShow from "./VideoShow";


export default function HomeContent({page}){
    const [vids, setVids]=useState([]);
    const [trendVidsList, setTrendVidsList]=useState([]);
    // const {SidePage} = useContext(SideContext);
    console.log(page)
    // API Home Videos
    const options = {
        method: 'GET',
        url: 'https://youtube-v3-alternative.p.rapidapi.com/search',
        params: {
            query: page,
            geo: 'TN',
            lang: 'en'
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_APIKEY,
            'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
    };
    const getHomeVids = async() =>{
        try{
            const resp = await axios.request(options);
            setVids(resp.data.data);
            console.log(resp.data.data);
        } catch(error){
            console.log(error)
        }
    }
    // API Trading
    const trendVids = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/trending',
        params: {
            geo: 'TN',
            lang: 'en'
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_APIKEY,
            'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
    };
    const getTrendVids = async() =>{
        try{
            const resp = await axios.request(trendVids);
            setTrendVidsList(resp.data.data);
            console.log(resp.data.data);
        } catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        if(page==="trending"){
            getTrendVids();
        } else {
            getHomeVids();
        }
    },[page])
    return(
        <div className='home-content'>
            {page!=="all"&&(
                <h1 className='titlePage'><span>{page}</span> videos</h1>
            )}
            {page!=="trending"&&(
                <div className='videosList'>
                    {vids?.map(vid=>{
                        if(vid?.type!=="channel"){
                            return <VideoShow
                                title={vid?.title}
                                channelName={vid?.channelTitle}
                                channelThum={vid?.channelThumbnail[0].url}
                                videoThum={vid?.thumbnail[0].url}
                                views={vid?.viewCount}
                                date={vid?.publishedText}
                                VideoId={vid?.videoId}
                                ChannelId={vid?.channelId}
                                vidLength={vid?.lengthText}
                            />
                        }
                    })}
                </div>
            )}
            {page==="trending"&&(
                <div className='videosList'>
                    {
                        trendVidsList?.map(vid=>(
                            <VideoShow
                                title={vid?.title}
                                channelName={vid?.channelTitle}
                                channelThum={vid?.channelThumbnail[0].url}
                                videoThum={vid?.thumbnail[0].url}
                                views={vid?.viewCount}
                                date={vid?.publishedText}
                                VideoId={vid?.videoId}
                                ChannelId={vid?.channelId}
                                vidLength={vid?.lengthText}
                            />
                    ))}
                </div>
            )}
        </div>
    )
};
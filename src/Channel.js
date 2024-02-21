import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
// import { fetchData } from "./utils/fetchData";
import axios from "axios";
import TopSection from "./components/Channel/TopSection";
import ShortsChannelShow from "./components/Channel/ShortsChannelShow"
import VideoChannelShow from "./components/Channel/VideoChannelShow"
import AboutChannelShow from "./components/Channel/AboutChannelShow"
// import { useGetData } from "./components/Channel/useGetData";

// Components
import SearchBar from "./components/SearchBar";
const LazyVideoChannelShow = React.lazy(()=>import("./components/Channel/VideoChannelShow"));
const LazyShortsChannelShow = React.lazy(()=>import("./components/Channel/ShortsChannelShow"));
const LazyAboutChannelShow = React.lazy(()=>import("./components/Channel/AboutChannelShow"));
const LazyTopSection = React.lazy(()=>import("./components/Channel/TopSection"));


export default function Channel(){
    const params = useParams();
    const channelId = params.channelId;


    const [channelVids, setChannelVids]=useState([]);
    const [channelShorts, setChannelShorts]=useState([]);
    const [channelDetails, setChannelDetails]=useState();
    const [pageState, setPageState]=useState("videos");

    const options = {
        method: 'GET',
        url: `https://youtube-v2.p.rapidapi.com/channel/${pageState}`,
        params: {channel_id: channelId},
        headers: {
            'X-RapidAPI-Key': '87b93ad1bemshde292e3554a25dfp1f5e5ejsn73b7a78f7e8e',
            'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
        }
    };
    const getData = async () => {
        try {
            const resp = await axios.request(options);
            if(pageState==="videos"){
                setChannelVids(resp.data.videos);
                // console.log(pageState, resp.data.videos);
            } else if(pageState==="shorts"){
                setChannelShorts(resp.data.videos);
                // console.log(pageState, resp.data.videos);
            } else if(pageState==="details") {
                setChannelDetails(resp.data);
                // console.log(pageState, resp.data);
            }
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        getData();
    },[pageState])
    return(
        <div className='channel-page'>
            <SearchBar />
            <div className='channel-page-content'>
                <Suspense fallback="Loading...">
                    <LazyTopSection chanID={channelId} />
                </Suspense>
                {/* <TopSection chanID={channelId} /> */}
                <div className='cat-switch'>
                    <ul className='links'>
                        <li onClick={e=>setPageState("videos")} className={pageState==="videos" ?"active" :""}>Videos</li>
                        <li onClick={e=>setPageState("shorts")} className={pageState==="shorts" ?"active" :""}>Shorts</li>
                        <li onClick={e=>setPageState("details")} className={pageState==="details" ?"active" :""}>About</li>
                    </ul>
                </div>
                {pageState==="videos" &&
                    // <Suspense fallback="Loading...">
                    //     <LazyVideoChannelShow ChnlsVideos={channelVids}/>
                    // </Suspense>
                    <VideoChannelShow ChnlsVideos={channelVids}/>
                }
                {pageState==="shorts" &&
                    <>
                        {channelShorts.length > 0&&(
                            // <Suspense fallback="Loading...">
                            //     <LazyShortsChannelShow ChnlsShorts={channelShorts}/>
                            // </Suspense>
                            <ShortsChannelShow ChnlsShorts={channelShorts}/>
                        )}
                        {channelShorts.length === 0&&(
                            <h1 className='short_nothing'>This channel doesn't have shorts</h1>
                        )}
                    </>
                }
                {pageState==="details" &&
                    // <Suspense fallback="Loading...">
                    //     <LazyAboutChannelShow ChnlsAbout={channelDetails} links={channelDetails?.links}/>
                    // </Suspense>
                    <AboutChannelShow ChnlsAbout={channelDetails} links={channelDetails?.links}/>
                }
            </div>
        </div>
    )
};
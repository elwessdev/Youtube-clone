/* eslint-disable array-callback-return */
import React, { useEffect, useState, Suspense } from 'react';
import { fetchData } from "../utils/fetchData";

// Components
// import VideoShow from "./VideoShow";
const LazyVideoShow = React.lazy(()=>import("./VideoShow"));


export default function HomeContent({page}){
    const [vids, setVids]=useState([]);
    const [trendVidsList, setTrendVidsList]=useState([]);
    useEffect(()=>{
        if(page==="trending"){
            fetchData(`trending`).then(data=>setTrendVidsList(data.data));
        } else {
            fetchData(`search?query=${page}`).then(data=>setVids(data.data)).catch(err=>console.log(err));
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
                            return (
                                <Suspense>
                                    <LazyVideoShow
                                        title={vid?.title}
                                        channelName={vid?.channelTitle}
                                        channelThum={vid?.channelThumbnail[0].url}
                                        videoThum={vid?.thumbnail[0].url}
                                        views={vid?.viewCount}
                                        date={vid?.publishedText}
                                        VideoId={vid?.videoId}
                                        ChannelId={vid?.channelId}
                                        vidLength={vid?.lengthText}
                                        // verifyChannel={vid?.lengthText}
                                    />
                                </Suspense>
                            )
                        }
                    })}
                </div>
            )}
            {page==="trending"&&(
                <div className='videosList'>
                    {
                        trendVidsList?.map(vid=>(
                            <Suspense>
                                <LazyVideoShow
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
                            </Suspense>
                    ))}
                </div>
            )}
        </div>
    )
};
/* eslint-disable array-callback-return */
import React, { useEffect, useState, Suspense, useRef } from 'react';
import { fetchData } from "../../utils/fetchData";
// import Slider from "react-slick";

// Components
// import VideoShow from "./VideoShow";
// const LazyShorts = React.lazy(()=>import("./Shorts"));
const LazyVideoShow = React.lazy(()=>import("../VideoShow"));


export default function HomeContent({page}){
    const [vids, setVids]=useState([]);
    const [trendVidsList, setTrendVidsList]=useState([]);
    const elemRef = useRef();
    const toTop = () => {
        // window.scrollTo({top: 0, behavior: 'smooth'});
        // console.log(elemRef)
    }
    useEffect(()=>{
        if(page==="trending"){
            fetchData("trending").then(data=>setTrendVidsList(data.data));
            // console.log('Home trending', vids)
        } else {
            fetchData(`search?query=${page}`).then(data=>setVids(data.data)).catch(err=>{
                // console.log(err)
            });
            // console.log('Home vids', vids)
        }
        toTop();
    },[page]);
    return(
        <div className='home-content'>
            {(page!=="all"&&page!=="short")&&(
                <h1 className='titlePage'><span>{page}</span> videos</h1>
            )}
            {(page!=="trending")&&(
                <Suspense fallback="Loading...">
                    <LazyVideoShow vidsList={vids} />
                </Suspense>
            )}
            {page==="trending"&&(
                <LazyVideoShow vidsList={trendVidsList} />
            )}
        </div>
    )
};
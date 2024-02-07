import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function TopSection({chanID}){
    const [channelDetails, setChannelDetails]=useState();
    const options = {
        method: 'GET',
        url: `https://youtube138.p.rapidapi.com/channel/details/`,
        // url: `https://youtube-v2.p.rapidapi.com/channel/details`,
        params: {id: chanID},
        headers: {
            'X-RapidAPI-Key': 'c8f7f98ebamsh3f22109b4e348eap14dcd3jsndb416cd74d99',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };
    const getDetails = async () => {
        try {
            const resp = await axios.request(options);
            setChannelDetails(resp.data);
            console.log("Channel Details",resp.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        getDetails()
    },[chanID])
    return(
        <div className='top-part'>
            <img className='cover' src={channelDetails?.banner.desktop[2].url} alt='' />
            <div className='channel-profile'>
                <img src={channelDetails?.avatar[2].url} alt={channelDetails?.title} />
                <h3>
                    {channelDetails?.title}
                    {(channelDetails?.subscribers>=100000) &&(
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
                    )}
                </h3>
                <p>{channelDetails?.stats.subscribersText}</p>
            </div>
        </div>
        )
    };
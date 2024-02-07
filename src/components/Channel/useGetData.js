import React,{ useState } from "react";
import axios from "axios";

// const options = {
//     method: 'GET',
//     url: `https://youtube-v2.p.rapidapi.com/channel/${pageState}`,
//     params: {channel_id: channelId},
//     headers: {
//         'X-RapidAPI-Key': '04b6b0772dmshae4740c9ae2ed0ep1252a1jsn7423468181f9',
//         'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
//     }
// };

export const useGetData = async (channelId,value="videos") => {
    const [data, setData]=useState([]);
    try {
        const resp = await axios.request({
            method: 'GET',
            url: `https://youtube-v2.p.rapidapi.com/channel/${value}`,
            params: {channel_id: channelId},
            headers: {
                'X-RapidAPI-Key': '04b6b0772dmshae4740c9ae2ed0ep1252a1jsn7423468181f9',
                'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
            }
        });
        setData(resp.data);
        console.log(value, resp.data);
    } catch (error) {
        console.error(error);
    }
    return {data};
}
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://youtube-scraper-2023.p.rapidapi.com/related_videos',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '87b93ad1bemshde292e3554a25dfp1f5e5ejsn73b7a78f7e8e',
    'X-RapidAPI-Host': 'youtube-scraper-2023.p.rapidapi.com'
  },
  data: {
    videoId: '48h57PspBec',
    nextToken: ''
  }
};

export default function Api() {
  const [data, setData]=useState([]);
  const getData = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data.videos)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="App">
      <button onClick={getData}>Get Data</button>
      {
        data.map(vid=>(
          <div>
            <img src={vid.thumbnails[1].url} /><br />
            <a href={vid.url}>{vid.title}</a>
            <p>{vid.lengthText} - {vid.shortViewCountText} - {vid.publishedTimeText}</p>
            <br />
            <br />
          </div>
        ))
      }
    </div>
  );
}

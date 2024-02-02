import axios from 'axios';

export const API_URL = 'https://youtube-v3-alternative.p.rapidapi.com';
const options = {
    params: {
        maxResults: 50,
        geo:"TN",
        lang:"en"
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_APIKEY,
        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
};
export const fetchData = async(url) => {
    const {data} = await axios.get(`${API_URL}/${url}`, options);
    return data;
}
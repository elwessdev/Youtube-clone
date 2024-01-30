import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import SearchContent from "./components/SearchContent";

export default function Search(){
    const params = useParams();
    const qTxt = params.qTxt;
    console.log("search:",qTxt)
    return(
        <div className='search-page'>
            <SearchBar />
            <div className='search-sections'>
                {/* <SideBar /> */}
                <SearchContent searchTxtQQ={qTxt} />
            </div>
        </div>
    )
};
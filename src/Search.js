import React from 'react';

// Components
import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import SearchContent from "./components/SearchContent";

export default function Search(){
    return(
        <div className='search-page'>
            <SearchBar />
            <div className='search-sections'>
                {/* <SideBar /> */}
                <SearchContent />
            </div>
        </div>
    )
};
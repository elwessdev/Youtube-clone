import React from 'react';


// Components
import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import HomeContent from "./components/HomeContent";



export default function Home(){
    return(
        <div className='home-page'>
            <SearchBar />
            <div className='home-sections'>
                <SideBar />
                <HomeContent />
            </div>
        </div>
    )
};
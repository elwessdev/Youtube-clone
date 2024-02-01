import React, { createContext, useState } from 'react';

// Components
import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import HomeContent from "./components/HomeContent";

export const SideContext = createContext();
export default function Home(){
    const [sidePage, setSidePage]=useState("all");
    return(
        <div className='home-page'>
            <SearchBar />
            <div className='home-sections'>
                <SideBar getPage={setSidePage} />
                <HomeContent page={sidePage} />
            </div>
        </div>
    )
};
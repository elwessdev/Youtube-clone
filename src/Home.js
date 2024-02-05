import React, { createContext, useState } from 'react';

// Components
import SideBar from "./components/Home/SideBar";
import SearchBar from "./components/SearchBar";
import HomeContent from "./components/Home/HomeContent";

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
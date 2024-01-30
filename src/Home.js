import React, { createContext, useState } from 'react';
import {useParams} from "react-router-dom";


// Components
import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import HomeContent from "./components/HomeContent";


export const SideContext = createContext();
export default function Home(){
    // const params = useParams();
    // const homeCategory=params.category;
    // console.log(homeCategory)
    const [sidePage, setSidePage]=useState("all");
    return(
        <div className='home-page'>
            <SearchBar />
            <div className='home-sections'>
            {/* <SideContext.Provider value={{sidePage,setSidePage}}> */}
                <SideBar getPage={setSidePage} />
                <HomeContent page={sidePage} />
            {/* </SideContext.Provider> */}
            </div>
        </div>
    )
};
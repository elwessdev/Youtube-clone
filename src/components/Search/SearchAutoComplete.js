import React from 'react';
import {Link} from "react-router-dom";

export default function SearchAutoComplete({value,hidePope}){
    return(
        <Link to={"/search/"+value} onClick={e=>hidePope(false)}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"></path></svg>
            <p>{value}</p>
        </Link>
    )
};
import React from 'react';

export default function VideoRecommended(){
    return(
        <a href='#' className='vid-rec'>
            <img src='https://i.ytimg.com/vi/Y45DvFuO7e0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA9Hfgb8TOGvkivYQQtBbGfZff3Xg' />
            <div className='vid-txt'>
                <h3>Should You Leave Your Team Or Stay?</h3>
                <a href='#'>MrBeast</a>
                <div className='vid-txt-nums'>
                    <span>7.1K views</span>
                    <span>3 days ago</span>
                </div>
            </div>
        </a>
    )
};
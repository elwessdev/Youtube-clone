import React from 'react';

export default function VideoShow(){
    return(
        <a href='#' className='video-show'>
            <div className='thumbnail'>
                <img src='https://i.ytimg.com/vi/UxgGrO9GBvY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADPs0RSslMfEQ6laHCssXTc4lAtA' />
                <p className='video-duration'>16:42</p>
            </div>
            <div className='video-details'>
                <img className='channel-img' src='https://yt3.ggpht.com/UvdWU0jg21It27_ralQRa_Jg7VRQGTcmiG_uYukoORqdGigrQZrIqiD9xZyZKDL90Lavy67olA=s68-c-k-c0x00ffffff-no-rj'></img>
                <div className='vid-txt'>
                    <h3>Should You Leave Your Team Or Stay?</h3>
                    <a href='#'>A Life Engineered</a>
                    <div className='vid-txt-nums'>
                        <span>7.1K views</span>
                        <span>3 days ago</span>
                    </div>
                </div>
            </div>
        </a>
    )
};
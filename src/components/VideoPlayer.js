import React from 'react';

export default function VideoPlayer(){
    return(
        <div className='video-player'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/krsBRQbOPQ4?si=-YCpaST5YHcJSHCD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='video-infos'>
                <h2>$1 vs $250,000,000 Private Island!</h2>
                <div className='vid-btm'>
                    <a href='#' className='channel-box'>
                        <img src='https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s48-c-k-c0x00ffffff-no-rj' />
                        <div className='chnl-info'>
                            <p>MrBeast</p>
                            <span>230M subscribers</span>
                        </div>
                    </a>
                    <div className='vid-cnt'>
                        <span>76,310 views</span>
                        <span>1,615 likes</span>
                    </div>
                </div>
            </div>
        </div>
    )
};
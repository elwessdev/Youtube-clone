import React from 'react';

export default function AboutChannelShow({ChnlsAbout,links}){
    return(
        <div className='about-part'>
                <div className='itm'>
                    <h1>About</h1>
                    <p>{ChnlsAbout?.description}</p>
                </div>
                <div className='itm links'>
                    <h1>Links</h1>
                    <ul>
                        {
                            links?.map(link=>(
                                <li>
                                    <div className='icon'>
                                        {link.name==="Twitter"&&
                                            <img src={"https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcSMLzaESE-7RnOgJ6LhhrvrNd5nmGpbBtUd_08WpBb9-QGf_o5Kb-EiQSTksKF4yP0CyeOexQL0WB1RxwW6Q2BfTG0oxJAEV49DcQyVyLqT"} alt='' />
                                        }
                                        {link.name==="Facebook"&&
                                            <img src={"https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcTGBThtZ-3e21djNDYMEh7ecp-JqeMBC5-o9mBec1HzjZAwnKNWY9rCUanbOzMk5FoecrAJJh4CYmn8W_oqdZ_qlqB9cEDL7CONa4kfiwL1nA"} alt='' />
                                        }
                                        {link.name==="Instagram"&&
                                            <img src={"https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcRT7bLbs25kzRtg95XuqrP5BcIN_09v9NhchUsyUvmHepVLvHkha5XVvy8IcGVGk19j0hxDOh9RoZvbi4RDc4BdVP6ZD3vVSUqF5v7jnLM_tlk"} alt='' />
                                        }
                                        {link.name==="Tik Tok"&&
                                            <img src={"https://encrypted-tbn3.gstatic.com/favicon-tbn?q=tbn:ANd9GcSEII2IIRImodcWZgz02fSWMJAoch4dG8QOVwhrtt_QvRi6NJLy8IjW1yAqU5ugCsqWjUeYJzz8ETnsSGPCArXzGmknKGS3PlAQHOi_1GEZqoL3vw"} alt='' />
                                        }
                                        {link.name==="Github"&&
                                            <img src={"https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcT3siRwkYV0yRj-xMKfWr5a4owVUTWVEfHcA2IqqkYk1jOEZG6VR5j7hS6M1SAFDiHj-FAckilaVk26SQIwNWkIiJFNydpPKej965VlPVn2"} alt='' />
                                        }
                                        {link.name==="Discord"&&
                                            <img src={"https://encrypted-tbn0.gstatic.com/favicon-tbn?q=tbn:ANd9GcR3G7BpH5te5R8U-zHguWxGj6GBmWdLbw1F8f2QzSjJpHB6T9vPxs0US_XI9rAIKDUT0CC_lrZNNgyd6Eg299PrOTJ78whVf9KDppMz8thiRg"} alt='' />
                                        }
                                        {link.name==="Soundcloud"&&
                                            <img src={"https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcRH5-Y7oTiNSy6jTSmys-ip5rO6al2iOp5Fwdw5LzidxnVRSkePdmkEcaUVeN0fBg83XsB37qvdfoCPToFzmlDcHWWPmXRKhIlDgudapS7TNDDi_g"} alt='' />
                                        }
                                        {link.name==="Spotify"&&
                                            <img src={"https://encrypted-tbn1.gstatic.com/favicon-tbn?q=tbn:ANd9GcQHjC-mUGPRkOqUnk48kCPPHQQFsypPXs-iQvPm-hWGWXarJ6vBlCovAJp0ShS1b2NSFh5Ow-jdA8sUUqv7-M4MgU3BvypRZofykWP7Ind_arBlcZ4"} alt='' />
                                        }
                                        {link.name==="Apple Music"&&
                                            <img src={"https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcQPyKPPX7s1yPGte5LskwxoVwjNLDNbAF-MKmj0jCdYqAPjYvxZZ5sPcwjEm9fLzu4gpT5mNZc_4R76xPF8vNOtSNnuPHpa06Y4fkhtinzEUYCkl0U"} alt='' />
                                        }
                                    </div>
                                    <div className='in'>
                                        <p>{link?.name}</p>
                                        <a href={link?.endpoint}>{link?.endpoint}</a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='itm det'>
                    <h1>Channel details</h1>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M11.72 11.93C13.58 11.59 15 9.96 15 8c0-2.21-1.79-4-4-4S7 5.79 7 8c0 1.96 1.42 3.59 3.28 3.93C4.77 12.21 2 15.76 2 20h18c0-4.24-2.77-7.79-8.28-8.07zM8 8c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zm3 4.9c5.33 0 7.56 2.99 7.94 6.1H3.06c.38-3.11 2.61-6.1 7.94-6.1zm5.68-1.46-.48-.88C17.31 9.95 18 8.77 18 7.5s-.69-2.45-1.81-3.06l.49-.88C18.11 4.36 19 5.87 19 7.5c0 1.64-.89 3.14-2.32 3.94zm2.07 1.69-.5-.87c1.7-.98 2.75-2.8 2.75-4.76s-1.05-3.78-2.75-4.76l.5-.87C20.75 3.03 22 5.19 22 7.5s-1.24 4.47-3.25 5.63z"></path></svg>
                        <span>{ChnlsAbout?.subscriber_count}</span>
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M22 6v7h-1V7.6l-8.5 7.6-4-4-5.6 5.6-.7-.7 6.4-6.4 4 4L20.2 7H15V6h7z"></path></svg>
                        <span>{ChnlsAbout?.view_count}</span>
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M13 17h-2v-6h2v6zm0-10h-2v2h2V7zm-1-4c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path></svg>
                        <span>Joined {ChnlsAbout?.creation_date}</span>
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM3 12c0-.7.09-1.37.24-2.02L8 14.71v.79c0 1.76 1.31 3.22 3 3.46v1.98c-4.49-.5-8-4.32-8-8.94zm8.5 6C10.12 18 9 16.88 9 15.5v-1.21l-5.43-5.4C4.84 5.46 8.13 3 12 3c1.05 0 2.06.19 3 .53V5c0 .55-.45 1-1 1h-3v2c0 .55-.45 1-1 1H8v3h6c.55 0 1 .45 1 1v4h2c.55 0 1 .45 1 1v.69C16.41 20.12 14.31 21 12 21v-3h-.5zm7.47-.31C18.82 16.73 18 16 17 16h-1v-3c0-1.1-.9-2-2-2H9v-1h1c1.1 0 2-.9 2-2V7h2c1.1 0 2-.9 2-2V3.95c2.96 1.48 5 4.53 5 8.05 0 2.16-.76 4.14-2.03 5.69z"></path></svg>
                        <span>{ChnlsAbout?.country}</span>
                    </p>
                </div>
        </div>
        )
    };
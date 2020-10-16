import React from 'react';
import './VideoRow.css';

function VideoRow({ views, subs, description, timestamp, channel, image, title, link }) {
    return (
        <div className='videoRow'> 
            <a href={link}><img src={image} alt='' /></a>
            <div className='videoRow__text'>
            <a href={link}>
            <h3>{title}</h3>
            <p className='videoRow__headline'>
                {channel} . &nbsp;
                
                <span className='videoRow__subs'>
                <span className='videoRow__subsNumber'>{subs} </span>Subscribers 
                </span> 
                 &nbsp;
                {views} . {timestamp} 
            </p>
            <p className='videoRow__description'>{description}</p>
            </a>
            </div>
        </div>
    )
}

export default VideoRow
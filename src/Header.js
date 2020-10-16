import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className='header'>

            <div className="header__left">
                <MenuIcon />

                <img className='header__logo' src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' alt='' />

            </div>
            
            <div className='header__input'>
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type='text' />
                

                    <SearchIcon className='header_inputButton' />

                
            </div>
            
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar 
                alt='Hendri Helmi'
                src='https://yt3.ggpht.com/a/AATXAJxZBeIIR6uch0iGLQUP-ctimDDUuZ7dMPSziQ4k7Q=s176-c-k-c0x00ffffff-no-rj-mo'
                />
            </div>
            
        </div>
    )
}

export default Header
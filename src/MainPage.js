import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './MainPage.css';
import video1 from './img/video1.png';
import video2 from './img/video2.png';
import video3 from './img/video3.png';
import video4 from './img/video4.png';

function MainPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
                image='https://yt3.ggpht.com/a/AATXAJxZBeIIR6uch0iGLQUP-ctimDDUuZ7dMPSziQ4k7Q=s88-c-k-c0x00ffffff-no-rj'
                channel='Hendri Helmi'
                verified='true'
                subs='727'
                noOfVideos={92}
                description='This is official channel YouTube Hendri Helmi.'
            />

            <hr />

            <VideoRow 
            title="MUSTARD SIX - BHAG"
            views='32 Views'
            timestamp='2 weeks ago'
            channelImage='https://yt3.ggpht.com/a/AATXAJxZBeIIR6uch0iGLQUP-ctimDDUuZ7dMPSziQ4k7Q=s176-c-k-c0x00ffffff-no-rj-mo'
            channel='Hendri Helmi'
            image={video1}
            subs='727'
            description='BHAG stands for Big Hairy Audacious Goal, an idea conceptualized in the book, “Built to Last: Successful Habits of Visionary ...'
            link='https://www.youtube.com/watch?v=7OvL70lszSo&t=13s'
            />

            <VideoRow 
            title="PENGALAMAN BEST DI FARM IN THE CITY"
            views='20 Views'
            timestamp='2 weeks ago'
            channelImage='https://yt3.ggpht.com/a/AATXAJxZBeIIR6uch0iGLQUP-ctimDDUuZ7dMPSziQ4k7Q=s176-c-k-c0x00ffffff-no-rj-mo'
            channel='Hendri Helmi'
            image={video2}
            subs='727'
            description='Farm In The City merupakan petting zoo terkenal di negara kita Malaysia. Haaa bukan zoo biasa-biasa yang kita pergi dan ...'
            link='https://www.youtube.com/watch?v=tvAU0Ekm9EY'
            />

            <VideoRow 
            title="Hafiz Suip - Kisah Cinta Kita Cover By Evan Daris"
            views='122 Views'
            timestamp='3 weeks ago'
            channelImage='https://yt3.ggpht.com/a/AATXAJxZBeIIR6uch0iGLQUP-ctimDDUuZ7dMPSziQ4k7Q=s176-c-k-c0x00ffffff-no-rj-mo'
            channel='Hendri Helmi'
            image={video3}
            subs='727'
            description='🎤 Bulan Panitia Pendidikan Muzik 2020  🎼🎼🎼🎼🎼🎼 ...'
            link='https://www.youtube.com/watch?v=5qCFJfriqOE'
            />

            <VideoRow 
            title="I Am Neeta - ilusi Cover by Eva Daisy"
            views='139 Views'
            timestamp='3 weeks ago'
            channelImage='https://yt3.ggpht.com/a/AATXAJxZBeIIR6uch0iGLQUP-ctimDDUuZ7dMPSziQ4k7Q=s176-c-k-c0x00ffffff-no-rj-mo'
            channel='Hendri Helmi'
            image={video4}
            subs='727'
            description='🎤 Bulan Panitia Pendidikan Muzik 2020  🎼🎼🎼🎼🎼🎼 ...'
            link='https://www.youtube.com/watch?v=vqVB_1HrFyY'
            />


        </div>
    )
}

export default MainPage
import React from 'react';
import wifi from '../Images/wi-fi.png';
import download from '../Images/download.png';
import upload from '../Images/up-arrow.png';
import '../Style/Main.css';
const Main = () => {
    return (
        <div className='w-screen flex flex-col justify-center items-center'>
            <div className='mt-20 h-3/4 w-3/4 border-2 rounded-lg justify-center items-center'>
              <h1 className='mt-6 tracking-widest'>Internet Speed Tester</h1>
              <img src={wifi} className='h-14 w-14 ml-auto mr-auto mt-20' alt="Wi-Fi" />
              <div> 
              <h1 className='mt-10'>0.0</h1>
              <h1>Mbps</h1>
              </div>
            
            <div className='flex items-center justify-center gap-24 mt-6'>
                <div className='flex flex-col'><div className='flex'><img src={download} className='h-5 w-5 mr-2'/> <h1>0.0 Mbps</h1></div><h1 >Download</h1></div>
                <div className='flex flex-col'><div className='flex'><img src={upload} className='h-5 w-5 mr-2'/> <h1>0.0 Mbps</h1></div><h1 >Upload</h1></div>
              </div>
              <button class="button">Test Now!<span class="button-span"> ─ QuickPing</span></button>
 
        </div>
        <div className='max-w-full min-h-96 mt-52 '><h1 className='text-7xl' id='About'>About.</h1><div className='flex'><div className='flex flex-col'><p className='text-wrap  max-w-2xl'>Sor3a is a fast and reliable internet speed tester designed to provide users with real-time insights into their network performance. With just a click, QuickPing measures download and upload speeds, ping latency, and jitter, helping users assess the quality and speed of their internet connection. Whether you’re troubleshooting network issues, comparing providers, or simply curious about your connection’s performance, QuickPing offers a simple, user-friendly interface and accurate results. Its efficient design ensures a smooth experience, making it the go-to tool for anyone looking to monitor and optimize their internet speeds.</p></div></div></div>
        </div>
    );
}

export default Main;
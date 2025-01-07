import React from 'react';
import wifi from '../Images/wi-fi.png';
const Main = () => {
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className='-mt-5 h-3/4 w-3/4 border-2 rounded-lg justify-center items-center'><h1 className='mt-6 tracking-widest'>Internet Speed Tester</h1><img src={wifi} className='h-14 w-14 ml-auto mr-auto mt-20' /><div> <h1 className='mt-10'>0.0</h1><h1>Mbps</h1></div></div>
        </div>
    );
};

export default Main;
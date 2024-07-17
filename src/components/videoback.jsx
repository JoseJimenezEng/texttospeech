import React from 'react';
import videobgTts from '../assets/bgvidtts.mp4'

const videoback = () => {
    return (
        <div className="videobackground">
                    <video src={videobgTts} autoPlay loop></video>
            </div>
    );
};

export default videoback;
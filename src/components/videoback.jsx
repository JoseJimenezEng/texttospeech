import React, { useEffect, useRef } from 'react';
import videobgTts from '../assets/bgvidtts.mp4'


const Videoback = () => {
    const videoRefBg = useRef(null);

    useEffect(() => {
        const video = videoRefBg.current;
        if (video) {
            video.play();
        }
    }, []);

    return (
       
            <div className="videoBackground" style={{height: "100vh"}}>
                
                <video
                    ref={videoRefBg}
                    src={videobgTts}
                    autoPlay
                    playsInline
                    preload="metadata"
                    muted
                    loop
                    id="myVideo"
                    onError={(e) => console.error('Error playing video:', e)}
                ></video>

            </div>
        
    );
};

export default Videoback;

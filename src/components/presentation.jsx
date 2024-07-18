import React, { useEffect, useRef } from 'react';
import bgvidpres from '../assets/bgvidpres.mp4';
import '../components/presentation.css'


const Presentation = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play();
        }
    }, []);

    return (
       
            <div className="contentPes">
                
                <video
                    ref={videoRef}
                    src={bgvidpres}
                    autoPlay
                    playsInline
                    preload="metadata"
                    muted
                    loop
                    id="myVideo"
                    onError={(e) => console.error('Error playing video:', e)}
                ></video>

                <div className="title">
                    <h1>We are the AI company for you!</h1>
                </div>
            </div>
        
    );
};

export default Presentation;

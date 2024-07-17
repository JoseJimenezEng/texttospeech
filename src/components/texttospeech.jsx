import React, { useState } from 'react';
import * as tts from '@diffusionstudio/vits-web';
import '../components/texttospeech.css'
import { ReactTyped } from "react-typed";

const TextToSpeech = () => {
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const talk = async () => {
        setIsLoading(true);
        try {
            const wav = await tts.predict({
                text: text,
                voiceId: 'en_US-hfc_female-medium',
            });
            const audio = new Audio();
            const url = URL.createObjectURL(wav);
            audio.src = url;
            audio.play();
        } catch (error) {
            console.error('Sorry, AI is busted :/', error);
        }
        setIsLoading(false);
    };



    return (
        <div className="texttospeech">
            <div className="containerTts">
                <div className="contentTts">
                    <h1>Text to Speech</h1>
                    <textarea
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Enter text here"
                        rows="4"
                        cols="50"
                    />

                    <button onClick={talk} disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Talk to me!'}
                    </button>

                </div>
                <div className="textmoving">

                    <ReactTyped strings={[
                        "Try out our text to speech converter for free!",
                        "Welcome to the future of AI development"
                    ]}
                        typeSpeed={150}
                        backSpeed={40}
                        loop />

                </div>
                
            </div>
            
        </div>

    );
};

export default TextToSpeech;

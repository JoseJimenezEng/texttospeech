import React from 'react';
import './about.css'
import img1 from "../assets/card1.jpg";
import img2 from "../assets/card2.png";
import img3 from "../assets/card3.webp";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const handleSvg = () => {
    document.getElementById("svg").classList.toggle("svg");
}

const about = () => {
    return (
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="contentAbt">
            <div className="contentA">
                <div className="title">
                    <h2>We are a design and innovation company.</h2>
                </div>
                <div className="text">
                    <p>We create products and experiences through AI so that your brand can grow.</p>
                </div>
                <div className="cards">
                <AnimationOnScroll animateIn="animate__fadeInRight">
                    <div className="contentC">
                        <img src={img1} alt="" />
                        <div className="text">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            <p>Quia deserunt accusantium nisi at, sed explicabo provident ipsam aliquam itaque magnam labore.</p>
                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInRight">
                    <div className="contentC">
                        <img src={img2} alt="" />
                        <div className="text">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            <p>Quia deserunt accusantium nisi at, sed explicabo provident ipsam aliquam itaque magnam labore.</p>

                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInRight">
                    <div className="contentC">
                        <img src={img3} alt="" />
                        <div className="text">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            <p>Quia deserunt accusantium nisi at, sed explicabo provident ipsam aliquam itaque magnam labore.</p>

                        </div>
                    </div>
                </AnimationOnScroll>

                </div>
                <div className="button"><button onMouseEnter={handleSvg} onMouseLeave={handleSvg}>Contact us! <svg id='svg' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-label="arrow-icon" class="h-[12px] w-[12px] cta_btn__icon" role="img"><path d="M.25 11h19.5m-9.606-9.895L20.04 11l-9.895 9.894" stroke="#fff" stroke-width="2"></path></svg></button></div>
            </div>
        </div>
        </AnimationOnScroll>

    );
};

export default about;
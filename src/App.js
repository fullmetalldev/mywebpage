import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css";
import "./App.css"

function App() {

    return (
        <div className="App">
            <Header/>

            <Swiper
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="About">
                        <div className="container">
                            <div className="aboutRow">

                                <div className="aboutRow__left">
                                    <h2 className="aboutRow__left_title">HELLO</h2>
                                    <h2 className="aboutRow__left_subtitle">I'M Erbol Nurekov</h2>
                                    <span className="aboutRow__left_info">I am a frontend developer who loves his job, loves to develop interesting products and a person who loves to study interesting and useful technologies</span>
                                    <button className="aboutRow__left_btn">CONTACT ME</button>
                                </div>

                                <div className="aboutRow__right">
                                    <div className="aboutRow__right_circle">
                                        <img src="" alt=""/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="About">
                        <div className="container">
                            <div className="aboutRow">

                                <div className="aboutRow__left">
                                    <h2 className="aboutRow__left_title">HELLO</h2>
                                    <h2 className="aboutRow__left_subtitle">I'M Erbol Nurekov</h2>
                                    <span className="aboutRow__left_info">I am a frontend developer who loves his job, loves to develop interesting products and a person who loves to study interesting and useful technologies</span>
                                    <button className="aboutRow__left_btn">CONTACT ME</button>
                                </div>

                                <div className="aboutRow__right">
                                    <div className="aboutRow__right_circle">
                                        <img src="" alt=""/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>


            <Footer/>
        </div>
    );
}

export default App;

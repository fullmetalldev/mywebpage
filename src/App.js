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
                    <About/>
                </SwiperSlide>
                <SwiperSlide>
                    <About/>
                </SwiperSlide>

            </Swiper>


            <Footer/>
        </div>
    );
}

export default App;

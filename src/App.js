import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper";


import "./App.css"



function App() {

    return (
        <div className="App">
            <Header/>

            <Swiper
                effect={"flip"}
                modules={[EffectFlip, Pagination, Navigation]}
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

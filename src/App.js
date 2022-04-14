import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./App.css"


function App() {

    return (
        <div className="App">
            <Header/>

            <Swiper
                effect={"coverflow"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination]}
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

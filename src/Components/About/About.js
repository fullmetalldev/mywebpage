import React from 'react';
import "./About.css";
import "./aboutAdaptive.css"

const About = () => {
    return (
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
    );
};

export default About;
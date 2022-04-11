import React from 'react';
import "./About.css";

const About = () => {
    return (
        <main className="About">
            <div className="container">
                <div className="aboutRow">

                    <div className="aboutRow__left">
                        <h2 className="aboutRow__left_title">HELLO</h2>
                        <h2 className="aboutRow__left_subtitle">I'M Erbol Nurekov</h2>
                        <span className="aboutRow__left_info">I've been doing web design, front-end and back-end development
                            for a year now.Do you need a website design, site layout, or maybe
                            a turnkey website? Then contact me</span>
                        <button className="aboutRow__left_btn">CONTACT ME</button>
                    </div>

                    <div className="aboutRow__right">
                        <div className="aboutRow__right_circle">
                            <span className="aboutRow__right_circle_react">
                                REACT
                            </span>
                            <span className="aboutRow__right_circle_firebase">
                                FIREBASE
                            </span>
                            <span className="aboutRow__right_circle_js">
                                JS
                            </span>
                            <span className="aboutRow__right_circle_webapp">
                                WEB-Application
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default About;
import React from 'react'
import './Home.css'
import profileimage from "../../assets/mukul_img.png";
function About() {
    return (
        <section className="home">
            <div className="home-container">

                {/* Left */}
                <div className="home-text">
                <h1>Hi, I’m Mukul Kumar <span className="cursor">|</span></h1>
                <h3>Software Developer | AI Enthusiast</h3>
                <p className='desc'>
                    I am an enthusiastic student at ABES Engineering College studying computer science and engineering (AIML), motivated by a strong interest in <span className="csr">software development</span>, <span className="csr">artificial intelligence</span>, and 
                    <span className="csr"> machine learning</span> . I like using clever algorithms, clean code, and innovative problem-solving to turn complicated concepts into useful, practical solutions.</p>

                <h6 className="desc">Current Objectives:</h6>
                <p className="desc">to pursue a career in software development or artificial intelligence engineering, where I can use my technical, analytical, and problem-solving abilities to create intelligent, scalable systems that have practical applications.</p>
                
                </div>

                {/* Right */}
                <div className="home-image">
                <img src={profileimage} alt="Profile" />
                </div>

            </div>
        
        </section>
    )
}

export default About

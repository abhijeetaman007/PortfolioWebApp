import React, { Component } from 'react';
import Photo from './Assets/Photo.png';
import c from './Assets/c.png';
import cpp from './Assets/cpp.png';
import html from './Assets/html.png';
import css from './Assets/css.jpeg';
import react from './Assets/react.png';
import express from './Assets/express.png';
import nodejs from './Assets/node.png';
import proj1 from './Assets/proj1.png';
import proj2 from './Assets/proj2.png';

export class About extends Component {
    render() {
        return (
            <div>
                <div className="header-container">
                    <div className="wrapper">
                        <header>
                            <div className="hero-content">
                                <h1>Hi, I’m Abhijeet Sinha</h1>
                                <p>
                                    I am Computer and Communication
                                    undergraduate at Manipal Institute of
                                    Technology.
                                </p>
                                <br />
                                <p>
                                    A tech enthusiast and with Code and WebDev
                                    as domains of my interest.I love technology
                                    and have a keen interest in learning new
                                    tech stuff. To push myself further in this
                                    field I joined IEEE and IECSE, technical
                                    clubs of my college.
                                </p>
                            </div>
                            <div className="hero-image">
                                <img src={Photo} alt="Pic" />
                                <div className="photo-bg"></div>
                            </div>
                        </header>
                    </div>
                </div>
                <div className="pimg1">
                    <div className="ptext">
                        <span className="border">Skills</span>
                        <div className="skillbox">
                            <div className="skills-1">
                                <img
                                    src={c}
                                    alt="C-Programing"
                                    className="img1"
                                ></img>
                                <img
                                    src={cpp}
                                    alt="C++-Programing"
                                    className="img2"
                                ></img>
                            </div>
                            <div className="skills-1">
                                <img
                                    src={html}
                                    alt="HTML"
                                    className="img3"
                                ></img>
                                <img src={css} alt="CSS" className="img4"></img>
                                <img
                                    src={react}
                                    alt="React"
                                    className="img5"
                                ></img>
                            </div>
                            <div className="skills-1">
                                <img
                                    src={express}
                                    alt="Express"
                                    className="img6"
                                ></img>
                                <img
                                    src={nodejs}
                                    alt="Nodejs"
                                    className="img7"
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="section section-light">
                    <h1 style={{ textAlign: 'center' }}>My projects</h1>
                    <div className="proj1">
                        <img src={proj2} className="projimage1"></img>
                        <p>
                            I and my friend made a movie management and
                            recommendation system where one can search any movie
                            and view its details like release
                            date,description,etc, also it had an option to
                            filter movies based on various categories like
                            genre,year etc.It showed top movies,now playing and
                            up coming movies as well.Even users had an option to
                            add and edit their own movies.MERN stack was used
                            for making it.
                            <a href="https://github.com/abhijeetaman007/Devsprint">
                                Check full project here
                            </a>
                        </p>
                    </div>
                    <div className="proj1">
                        <p>
                            This is my own portfolio website which contains all
                            details about me including my introduction,skills
                            and projects. It also has my contact details and a
                            form to leave your contact as well.It's a single
                            page application made using React.
                        </p>
                        <img src={proj1} className="projimage1"></img>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: 50 }}>
                        More projects are under progress and would be updated
                        soon!!
                    </p>
                </section>
            </div>
        );
    }
}

export default About;

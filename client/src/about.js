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
import om from './Assets/om.jpeg';
import expmang from './Assets/expmang1.jpeg';
import form from './Assets/form2.jpeg';
import oc from './Assets/oc.jpeg';

export class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="header-container">
                    <div className="wrapper">
                        <header>
                            <div className="hero-content">
                                <h1>Hi, I’m Abhijeet Sinha</h1>
                                <p>
                                    Computer and Communication undergraduate at
                                    Manipal Institute of Technology.
                                </p>
                                <br />
                                <p>
                                    A tech enthusiast with Competitive Coding
                                    and Web Development as domains of my
                                    interest.I love technology and have a keen
                                    interest in learning new tech related stuff.
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
                            <a href="https://github.com/abhijeetaman007/Devsprint">
                                <h4>Movie@Ease</h4>
                            </a>
                            I and my friend made a movie management and
                            recommendation system where one can search any movie
                            and view its details like release
                            date,description,etc, also it had an option to
                            filter movies based on various categories like
                            genre,year etc.It showed top movies,now playing and
                            up coming movies as well.Even users had an option to
                            add and edit their own movies.MERN stack was used
                            for making it.
                        </p>
                    </div>
                    <div className="proj1">
                        <p>
                            <a href="https://github.com/abhijeetaman007/PortfolioWebApp">
                                <h4>My Portfolio</h4>
                            </a>
                            This is my own portfolio website which contains all
                            details about me including my introduction,skills
                            and projects. It also has my contact details and a
                            form to connect anyone visiting the site.It's a
                            single page application made using React.It also has
                            a mailer integrated to get instant update of anyone
                            contacting me!
                        </p>
                        <img src={proj1} className="projimage1"></img>
                    </div>

                    <div className="proj1">
                        <img src={om} className="projimage1"></img>
                        <p>
                            <a href="https://github.com/abhijeetaman007/Outstation-Management-Verification-Portal">
                                <h4>
                                    Outstation Management Verification Portal
                                </h4>
                            </a>
                            Developed Outstation Management Verification Portal
                            which was used for verification of 200+ outstation
                            participants.Got to know about working of
                            authentication and imlpemented it using
                            passport.js.Added admin and user side where admin
                            can verify and update the verification status and
                            user can login and check in the user side.It had
                            fully functional backend in node.js and mongodb and
                            simple frontend using ejs.
                        </p>
                    </div>
                    <div className="proj1">
                        <p>
                            <a href="https://github.com/abhijeetaman007/Expense-Manager">
                                <h4>Expense-Manager</h4>
                            </a>
                            Developed an expense manager while learning context
                            and hooks in react.Expense Manager is simple web
                            application to know one's expense at ease.It had
                            feature to add/delete your income and expense and
                            know your balance tolal income and expenditure.
                        </p>
                        <img src={expmang} className="projimage1"></img>
                    </div>
                    <div className="proj1">
                        <img src={oc} className="projimage1"></img>
                        <p>
                            <a href="https://chaos.iecsemanipal.com/">
                                <h4>Order of Chaos</h4>
                            </a>
                            Worked in a team to design and organise coding event
                            Order of Chaos from scratch, which saw participation
                            of 100+ participants from various college across the
                            country.Order Chaos was unique game based coding
                            event.I contributed in developing backend of web app
                            by implmenting attack feature, contest page and
                            leaderboard using Node.js.
                        </p>
                    </div>

                    <div className="proj1">
                        <p>
                            <h3>IECSE Forms</h3>
                            Worked for IECSE,techincal club of my college and
                            helped developing backend of IECSE Forms - a
                            customizable form system which will be used by club
                            for day to day work like registration of events,
                            taking feedback etc. Implemented add,delete,edit
                            form option with total 9 question types along with
                            an option of auto and manual close/open.Also added 3
                            level role based authentication as per the use case
                            of the club. Provided ease of having different form
                            types depending on use by adding options like
                            editable,non-editable, anonymous. For ease of
                            viewing and analysing user's response added download
                            csv feature, connected to google sheets using google
                            sheet api.Also added features like saving form as
                            template for future usage and option to email
                            response for future reference of user.
                        </p>
                        <img src={form} className="projimage1"></img>
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

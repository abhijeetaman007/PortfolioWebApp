import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import facebook from './Assets/fb.png'
import lin from './Assets/lin.png'
import ig from './Assets/ig.png'
import git from './Assets/git.png'
import location from './Assets/location.png'
import call from './Assets/call.png'
import mail from './Assets/mail.png'

export class Contact extends Component {
    render() {
        return (
            <div className="contact"> 
            <div className="form-header">
                <h2>Contact Me</h2>
                <p>Have some questions? suggestions? Want to connect?</p>
            </div>
                <div className="form-container">
                    <Form className="form-row">
                        <div className="col-md-6" >
                            <div className="md-form mb-1">
                                <Input  type="name" placeholder="Your Name"></Input>
                            </div>
                        </div>
                        <div className="col-md-6" >
                        <div className="md-form mb-1">
                        <Input  type="email" placeholder="Your Email"></Input>
                        </div>
                        </div>
                        <div className="col-md-12">
                        <div className="md-form mb-1">
                        <Input type="subject" placeholder="Subject"></Input>
                        </div>
                        </div>
                        <div className="col-md-12">
                        <Input type="textarea" placeholder="Your Message"></Input>
                        </div>
                        <div className="submit-button" >
                            <div className="md-form mb-1">
                                <Input  type="submit" ></Input>
                            </div>
                        </div>
                    </Form>

                    <div className="contact-details">
                        <div>
                             <img src={location} style={{paddingLeft:20}}></img>
                             <p style={{paddingTop:10}}>Manipal</p>
                        </div>
                        <div>
                             <img src={call} style={{paddingLeft:50}} ></img>
                             <p style={{paddingTop:10}}>+91 7091788126</p>
                        </div>
                        <div>
                            <img src={mail} style={{paddingLeft:75}}></img>
                            <p style={{paddingTop:10}}>abhijeetaman007@gmail.com</p>
                        </div>
                    </div>
                    <div className="social">     
                        <a href="https://www.facebook.com/abhijeet.sinha.3557" target="blank"><img src={facebook}/></a>
                        <a href="https://www.linkedin.com/in/abhijeet-sinha-22126818a/" target="blank"><img src={lin}/></a>
                        <a href="https://www.instagram.com/abhijeetaman007/?hl=en" target="blank"><img src={ig}/></a>
                        <a href="https://github.com/abhijeetaman007" target="blank"><img src={git}/></a>   
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact

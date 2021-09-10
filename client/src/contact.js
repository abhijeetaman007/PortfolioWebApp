import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import facebook from './Assets/fb.png';
import lin from './Assets/lin.png';
import ig from './Assets/ig.png';
import git from './Assets/git.png';
import location from './Assets/location.png';
import call from './Assets/call.png';
import mail from './Assets/mail.png';
import twitter from './Assets/twitter.png';
export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log('testing!!');
        console.log(event.target);
        console.log(event.target.name);
        const { name, email, subject, message } = this.state;

        alert(`Hey ${name}, Your message is sent Abhijeet will reach out soon! Thanks for reaching out :)`);

        fetch(`/api/sendmessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state),
        });
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        return (
            <div className="contact">
                <div className="form-header">
                    <h2>Ready to make something kickass?</h2>
                    <h5>Get in touch</h5>
                </div>
                <div className="form-container">
                    <Form className="form-row" onSubmit={this.handleSubmit}>
                        <div className="col-md-6">
                            <div className="md-form mb-1">
                                <Input
                                    type="name"
                                    placeholder="Your Name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                ></Input>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="md-form mb-1">
                                <Input
                                    type="email"
                                    placeholder="Your Email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                ></Input>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="md-form mb-1">
                                <Input
                                    type="subject"
                                    placeholder="Subject"
                                    name="subject"
                                    value={this.state.subject}
                                    onChange={this.handleChange}
                                ></Input>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <Input
                                type="textarea"
                                placeholder="Your Message"
                                name="message"
                                value={this.state.message}
                                onChange={this.handleChange}
                            ></Input>
                        </div>
                        <div className="submit-button">
                            <div className="md-form mb-1">
                                <Input type="submit"></Input>
                            </div>
                        </div>
                    </Form>

                    <div className="contact-details">
                        <div>
                            <img
                                src={location}
                                style={{ paddingLeft: 20 }}
                            ></img>
                            <p style={{ paddingTop: 10 }}>Manipal</p>
                        </div>
                        <div>
                            <img src={call} style={{ paddingLeft: 50 }}></img>
                            <p style={{ paddingTop: 10 }}>+91 7091788126</p>
                        </div>
                        <div>
                            <img src={mail} style={{ paddingLeft: 75 }}></img>
                            <p style={{ paddingTop: 10 }}>
                                abhijeetaman007@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="social">
                        <a
                            href="https://twitter.com/abhijeet_sinha_"
                            target="blank"
                        >
                            <img src={twitter} height="30px" width="30px" />
                        </a>
                        <a
                            href="https://www.facebook.com/abhijeet.sinha.3557"
                            target="blank"
                        >
                            <img src={facebook} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abhijeetsinha1503/"
                            target="blank"
                        >
                            <img src={lin} />
                        </a>
                        <a
                            href="https://www.instagram.com/__abhijeet.sinha__/"
                            target="blank"
                        >
                            <img src={ig} />
                        </a>
                        <a
                            href="https://github.com/abhijeetaman007"
                            target="blank"
                        >
                            <img src={git} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;

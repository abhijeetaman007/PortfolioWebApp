import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import about from './Assets/about.png'
import contact from './Assets/con1.png'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="nav-container">
                    <div className="wrapper">
                        <nav>
                            <div className="logo">
                                As.
                            </div>
                            <ul class="nav-items">
                                <li><NavLink className="nav-menu_about" exact to="/" ><img src={about}></img> about </NavLink></li>
                                <li><NavLink className="nav-menu_about"  to="/contact" ><img src={contact}></img> contact</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar

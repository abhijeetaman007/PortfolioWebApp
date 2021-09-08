import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './navbar';
import About from './about';
import Contact from './contact';
function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Route exact path="/" component={About} />
                <Route path="/contact" component={Contact} />
            </BrowserRouter>
        </div>
    );
}

export default App;

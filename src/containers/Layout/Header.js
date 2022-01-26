import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from "react-router";
import i from 'react-icofont';
import './Layout.scss';
class App extends Component {
    state = {}
    render() {
        return (
            <div className={"nav-main"} style={{opacity:'1', background:"black"}}>
                <nav className="navbar navbar-expand-lg fixed-top ">
                    <a className="navbar-brand navbar-brand-color" href="/">CSE Investing</a>
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "><i class="icofont-navigation-menu"></i></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle navbar-link-color" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Stock Market
        </a>
                                <div className="dropdown-menu nav-grop-back" aria-labelledby="navbarDropdown ">
                                    <a className="dropdown-item navbar-link-color" href="/stock/open">Open an Account </a>
                                    <a className="dropdown-item navbar-link-color" href="/stock/brokers"> Brockers </a>
                                    <a className="dropdown-item navbar-link-color" href="/stock/fees">Fees </a>
                                    <a className="dropdown-item navbar-link-color" href="/stock/web">Websites </a>
                                    <a className="dropdown-item navbar-link-color" href="/stock/youtube">ouTube</a>
                                    <a className="dropdown-item navbar-link-color" href="/dev">Books</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle navbar-link-color" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Binance | Crypto
        </a>
                                <div className="dropdown-menu nav-grop-back" aria-labelledby="navbarDropdown ">
                                    <a className="dropdown-item navbar-link-color" href="/binance/basic">Biance Basic </a>
                                 
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle navbar-link-color" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Common | Trics
        </a>
                                <div className="dropdown-menu nav-grop-back" aria-labelledby="navbarDropdown ">
                                    <a className="dropdown-item navbar-link-color" href="/common/tools">Common Tips </a>
                                 
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle navbar-link-color" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Other
                                </a>
                                <div className="dropdown-menu nav-grop-back" aria-labelledby="navbarDropdown ">
                                    <a className="dropdown-item navbar-link-color" href="/dev">Comments </a>
                                    <a className="dropdown-item navbar-link-color" href="/dev">Questions</a>
                                  
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Login</a>
                            </li>
                        </ul>


                    </div>
                </nav>
            </div>);
    }
}

export default App;
import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from "react-router";
import i from 'react-icofont';
import './Layout.scss';
class App extends Component {
    state = {}
    render() {
        return (
            <div className={"nav-main"}>
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand navbar-brand-color" href="/">CSEinvesting</a>
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "><i class="icofont-navigation-menu"></i></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle navbar-link-color" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    මූලික විස්තර | Basic Info
        </a>
                                <div className="dropdown-menu nav-grop-back" aria-labelledby="navbarDropdown ">
                                    <a className="dropdown-item navbar-link-color" href="/basic/open">ගිණුමක් අරඹමු |Account </a>
                                    <a className="dropdown-item navbar-link-color" href="/basic/brokers">තැරැව්කරුවන් | Brockers </a>
                                    <a className="dropdown-item navbar-link-color" href="/basic/fees">ගාස්තු | Fees </a>
                                    <a className="dropdown-item navbar-link-color" href="/dev">නීති | Rules</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle navbar-link-color" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                අධ්‍යාපනික | Educational
        </a>
                                <div className="dropdown-menu nav-grop-back" aria-labelledby="navbarDropdown ">
                                    <a className="dropdown-item navbar-link-color" href="/edu/web">වෙබ් අඩවි | Websites </a>
                                    <a className="dropdown-item navbar-link-color" href="/edu/youtube">යූ_ටියුබ් | YouTube</a>
                                    <a className="dropdown-item navbar-link-color" href="/dev">පොත් | Books</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle navbar-link-color" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                වෙනත්  | Other
                                </a>
                                <div className="dropdown-menu nav-grop-back" aria-labelledby="navbarDropdown ">
                                    <a className="dropdown-item navbar-link-color" href="/dev">අදහස් | Comments </a>
                                    <a className="dropdown-item navbar-link-color" href="/dev">ප්‍රශ්න | Questions</a>
                                  
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
import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from "react-router";
import {BrowserRouter} from 'react-router-dom';
import './Layout.scss';
import Landing from '../../views/Summary/Summary';
import Open from "../../views/Basic/Open/Open";
import Fees from "../../views/Basic/Fees/Fees";
import Broker from '../../views/Basic/Brokers/Brokers';
import Books from '../../views/Educational/Books/Books';
import Youtube from '../../views/Educational/Youtube/Youtube';
import Web from '../../views/Educational/Web/Web';
import Header from './Header';
import Footer from "../TheFooter";
import Dev from '../../components/UnderDevelop/Underdevolop';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={"layout-main"}>
                <Header/>
                {<div className={"main-content"}>
                    
                    <BrowserRouter>
                    <Switch>
    <Route  exact path ='/' component={Landing}/>
    <Route exact path ="/basic/open" component={Open}/>
    <Route exact path ="/basic/fees" component={Fees}/>
    <Route exact path ="/basic/brokers" component={Broker}/>
    <Route exact path ="/basic/open" component={Open}/>
    <Route exact path ="/edu/books" component={Books}/>
    <Route exact path ="/edu/web" component={Web}/>
    <Route exact path ="/edu/youtube" component={Youtube}/>
    <Route exact path ="/dev" component={Dev}/>
    </Switch>
                    </BrowserRouter>
    
                </div>
    
    
    
    
                   
                }
                <Footer/>
            </div>
         );
    }
}
 
export default App;
import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from "react-router";
import {BrowserRouter} from 'react-router-dom';
import './Layout.scss';
import Landing from '../../views/Summary/Summary';
import Open from "../../views/Stock/Open/Open";
import Fees from "../../views/Stock/Fees/Fees";
import Broker from '../../views/Stock/Brokers/Brokers';
import Books from '../../views/Stock/Educational/Books/Books';
import Youtube from '../../views/Stock/Educational/Youtube/Youtube';
import Web from '../../views/Stock/Educational/Web/Web';
import Header from './Header';
import Footer from "../TheFooter";
import Dev from '../../components/UnderDevelop/Underdevolop';
import BinanceBasic from '../../views/Binance/Basic/BinanceBasic';
import Common from '../../views/Common/tools'

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
    <Route exact path ="/stock/open" component={Open}/>
    <Route exact path ="/stock/fees" component={Fees}/>
    <Route exact path ="/stock/brokers" component={Broker}/>
    <Route exact path ="/stock/open" component={Open}/>
    <Route exact path ="/stock/books" component={Books}/>
    <Route exact path ="/stock/web" component={Web}/>
    <Route exact path ="/stock/youtube" component={Youtube}/>

    <Route exact path ="/binance/basic" component={BinanceBasic}/>

    <Route exact path ="/common/tools" component={Common}/>
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
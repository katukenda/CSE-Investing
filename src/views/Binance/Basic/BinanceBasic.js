import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

import './BinanceBasic.scss';
import YouTube from '@u-wave/react-youtube';
import { Container, UncontrolledCollapse, Col, Row, Button, Card, CardTitle, CardBody, CardFooter, CardHeader } from 'reactstrap';

class App extends Component {  

    

    
    render() {
        return (
         <div className ={"main"}> 
             <Row >
                <Col lg = "12">
                <h1 className={"main-topic"}>
                    Welcome to learning zone Of Binance Trading
                     <br/>
                     </h1>
                </Col>
                     </Row>
                     <Row>
<h2 className={"discription"}>
If you don't have an account yet, you can create an account using the link given bellow or using the promotion code diven bellow.
It will save you 10% of your transaction fees.<br/>

</h2>
          
             </Row>
             <Row>
                 <Col lg= "6" className = {"video-Title"}>
                     <h1 className = {"promo-code"}>PZF7PCMK</h1> <p>copy promo code or</p>
   
<a href={"https://www.binance.me/en/register?ref=PZF7PCMK"} target =  "blank"><Button className="com-btn green-btn">Create an Account</Button></a>
                 </Col>





                 <Col lg ="6">
                 <p className = {"video-Title"}>2.Binance account and verify </p>

                 <YouTube
                            
                            video="Q854iEvhuIQ"
                           autoplay
                          />
                 </Col>
             </Row>
             <Row>
                 <Col lg="6">
                     <p className = {"video-Title"}>1. Binance  , virtual currency and sl law</p>
                     <YouTube
                            
                            video="wxbeuwQZHXI"
                           //autoplay
                          />
                 </Col>
                 <Col lg="6">
                     <p className = {"video-Title"}>3.How to do a p2p transaction</p>
                     <YouTube
                            
                            video="HY3yDY04MpQ"
                           //autoplay
                          />
                 </Col> <Col lg="6">
                     <p className = {"video-Title"}>4.Spot trading  Limit orders and Market orders.</p>
                     <YouTube
                            
                            video="ewRCK83CovA"
                           //autoplay
                          />
                 </Col> <Col lg="6">
                     <p className = {"video-Title"}>5.futures trading. Leverage and Cross or Isolate.</p>
                     <YouTube
                            
                            video="GbFt-uT_3RA"
                           //autoplay
                          />
                 </Col> <Col lg="6">
                     <p className = {"video-Title"}>6.Staking</p>
                     <YouTube
                            
                            video="b2d2bURczco"
                           //autoplay
                          />
                 </Col> <Col lg="6">
                     <p className = {"video-Title"}>7.International stock market . Live trading ......</p>
                     <YouTube
                            
                            video="LxTHY1b4lB0"
                           //autoplay
                          />
                 </Col> <Col lg="6">
                     <p className = {"video-Title"}>8.දිනපතා binance  saving wallet </p>
                     <YouTube
                            
                            video="Tk09KtoU1zk"
                           //autoplay
                          />
                 </Col> <Col lg="6">
                     <p className = {"video-Title"}>9.Trafering betwen different wallets</p>
                     <YouTube
                            
                            video="I_eNAWyGMpw"
                           //autoplay
                          />
                 </Col> <Col lg="6">
                     <p className = {"video-Title"}>10.How to withdrow money from binance</p>
                     <YouTube
                            
                            video="CLpLVAA6YdQ"
                           //autoplay
                          />
                 </Col>

             </Row>
         </div>
        );
    }
}

export default App;
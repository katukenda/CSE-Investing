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
                     බයිනෑන්ස් ගැන ඉගෙනගන්න ආපු හැමෝම සාදරයෙන් පිළිගන්නවා</h1>
                </Col>
                     </Row>
                     <Row>
<h2 className={"discription"}>
If you don't have an account yet, you can create an account using the link given bellow or using the promotion code diven bellow.
It will save you 10% of your transaction fees.<br/>
ඔබ තවමත් ගිනුමක් ආරම්භ කර නැත්නම් පහත link එකින් ගොස් හෝ පහත prom code එක පාවිච්චි කර ගිනුමක් ආරම්භ කල හැක. එය ඔබට 10%ක ගනුදෙනු ගාස්තුවක් ඉතිරි කර දෙයි.
</h2>
          
             </Row>
             <Row>
                 <Col lg= "6" className = {"video-Title"}>
                     <h1 className = {"promo-code"}>PZF7PCMK</h1> <p>copy promo code or</p>
   
<a href={"https://www.binance.me/en/register?ref=PZF7PCMK"} target =  "blank"><Button className="com-btn green-btn">Create an Account</Button></a>
                 </Col>





                 <Col lg ="6">
                 <p className = {"video-Title"}>2.Binance account එකක් හරියට හදල ඒක verify කරගමු</p>

                 <YouTube
                            
                            video="Q854iEvhuIQ"
                           autoplay
                          />
                 </Col>
             </Row>
             <Row>
                 <Col lg="6">
                     <p className = {"video-Title"}>1. Binance ගැන සරල අදහසක් වගේම , virtual currency වලට ලංකාවේ නීතියෙන් ලැබෙන බලපෑම ගැන කතා කරමු.</p>
                     <YouTube
                            
                            video="wxbeuwQZHXI"
                           //autoplay
                          />
                 </Col>
                 <Col lg="6">
                     <p className = {"video-Title"}>3.P-to-P ගනු දෙනුවක් හරියාකාරව කරමු. නොදන්න කෙනෙක්ගෙන් බය නැතුව ඕන මුදලක් ගෙවා USDT ගමු.</p>
                     <YouTube
                            
                            video="HY3yDY04MpQ"
                           //autoplay
                          />
                 </Col> <Col lg="6">
                     <p className = {"video-Title"}>4.Spot trading ගැන ඉගෙනගන්න. Limit orders සහ Market orders.</p>
                     <YouTube
                            
                            video="ewRCK83CovA"
                           //autoplay
                          />
                 </Col> <Col lg="6">
                     <p className = {"video-Title"}>5.futures trading ගැන ඉගෙනගන්න. Leverage සහ Cross or Isolate.</p>
                     <YouTube
                            
                            video="GbFt-uT_3RA"
                           //autoplay
                          />
                 </Col> <Col lg="6">
                     <p className = {"video-Title"}>6.Crypto long term hold කරන අයට වගේම, top එකෙන් buy කරලා exit වෙනකම් long term hold කරන් ඉන්න වෙන හැමෝටම .</p>
                     <YouTube
                            
                            video="b2d2bURczco"
                           //autoplay
                          />
                 </Col> <Col lg="6">
                     <p className = {"video-Title"}>7.International stock market වල කොටස් මිලදීගන්න විදිය. Live trading ......</p>
                     <YouTube
                            
                            video="LxTHY1b4lB0"
                           //autoplay
                          />
                 </Col> <Col lg="6">
                     <p className = {"video-Title"}>8.දිනපතා binance ගිනුමට පොලිය ලැබෙන, ඕන වෙලාවක exit වෙන්න පුලුවන් saving wallet එක.</p>
                     <YouTube
                            
                            video="Tk09KtoU1zk"
                           //autoplay
                          />
                 </Col> <Col lg="6">
                     <p className = {"video-Title"}>9.Binance wallet එකේ coin වෙන ඕනම wallet එක්කට දාගන්න වගේම , වෙන wallet එක්ක තියෙන coin binance wallet එකට දාගන්න විදිය</p>
                     <YouTube
                            
                            video="I_eNAWyGMpw"
                           //autoplay
                          />
                 </Col> <Col lg="6">
                     <p className = {"video-Title"}>10.Binance එකේ සල්ලි අපේ bank account එකට ගන්න විදිය. අපි live transactions එක්ක පැහැදිලිව දැනගන්න. ඒ වගේම buyer සල්ලි දැම්මෙ නැත්තම්.........</p>
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
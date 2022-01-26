import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import i from 'react-icofont';
import './Open.scss';
import YouTube from '@u-wave/react-youtube';
import { Container, UncontrolledCollapse, Col, Row, Button, Card, CardTitle, CardBody, CardFooter, CardHeader } from 'reactstrap';
import Unde from '../../../components/UnderDevelop/Underdevolop';
class App extends Component {  

    render() {
        return (
            <div className={"main"}>

                <section>
                    <Container>
                        <Row >
                            <p className={"title"} >Let's see how to open a new account. </p>
                            <YouTube
                            
  video="GRYnADD8cn0"
  autoplay
/>


<ol class="accordion" id="accordionExample">
    <li className={"sub-title"}>Things you need to know <sapn className={"pointer"}  data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1"><i class="icofont-hand-drag1"></i></sapn></li>
    <div id="collapse1" class="collapse show" aria-labelledby="heading1" data-parent="#accordionExample">
        <ul className={"list"}>
            <li > You can only legally create one CDS account.</li>
            <li  >You can create brokerage accounts for several brokerage firms. </li>
            <li  >But only one account per institution</li>
        </ul>
    </div>




    <li className={"sub-title "}  >In the old way <span className={"pointer"} data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2"><i class="icofont-hand-drag1"></i></span></li>
    <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#accordionExample">

        <ul className={"list"}>
            <li  >For this you have to go to a brokerage firm and fill out the application form they provide and give it to them.</li>
            <li >You will need to enclose with the application a copy of your National Identity Card or Passport, a copy of the bank book and any bill that can prove proof of residency.</li>
            <li  >Most brokerage firms offer software that can be traded online, with each firm having a minimum shareholding that the investor must maintain in order to apply.</li>

        </ul>
    </div>

    <li className={"sub-title "} >In a new way<span className={"pointer"} data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3"><i class="icofont-hand-drag1"></i></span></li>
    <div id="collapse3" class="collapse" aria-labelledby="heading3" data-parent="#accordionExample">
        <ul className={"list"}>
            <li>For this you need to have an email address and a phone number</li>
            <li>First you <a href="https://www.cds.lk/">www.cds.lk</a> Go to and download the new app.</li>
            <li>Then enter your details correctly and create a new MY CSE account.</li>
            <li>Keep your NIC / Passport and bank book with you.</li>
            <li>After filling in all your details correctly, cse will send you an email confirming that your application has been received.</li>
            <li>For those who want to know how to create an online cds account correctly <Link to= "/opencds">👉👉</Link> video </li>


        </ul>
    </div>
    <li className={"sub-title "} >The final process <span className={"pointer"} data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4" ><i class="icofont-hand-drag1"></i></span></li>
    <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
        <ul className={"list"}>
            <li>It takes about 3 trading days to open the account.</li>
            <li>From the brokerage firm you choose, you will be assigned a consultant</li>
            <li>He will notify you if your account has been opened or if any changes are required.</li>
        </ul></div>

        <li className={"sub-title "} >Let’s make the first investment understandable <span className={"pointer"} data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5"><i class="icofont-hand-drag1"></i></span></li>
    <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
    <ul className={"list"}>
<li>Let's take your name as J. Now J has created a new cds account. J chose a brokerage firm called X. So X gives J an investor advisor called Y. Now J is getting ready to make his first investment. J cannot transfer money directly to his CDS account. He must first deposit money in the account provided by the company called X and inform Y about it. It is also a good idea to keep the J Money Credit Receipt until the money is credited to the CDS Account. Now with the money in J's cds account, J can buy shares of the selected company through Y or online trading</li>

</ul>
        
    </div>
</ol>
                           
                        </Row>
<Row>
    <Col lg = "6">
        <p className ={"video-Title"}>2. How to create a shared/Joint account</p>
    <YouTube
                            video="3osgoLy82EE"
                           
                            //autoplay
                          />
    </Col>
    
    <Col lg = "6">
        <p className ={"video-Title"}>3. Problems that may arise when creating a CDS account and how to resolve those issues </p>
    <YouTube
                             video="T35O8j3BTbI"
                           
                            //autoplay
                          />
    </Col>

    <Col lg = "6">
        <p className ={"video-Title"}>4. A methodology to choose the best part that suits us </p>
    <YouTube
                            
                            video="mpbTLzdfOJQ"
                            //autoplay
                          />
    </Col>
   
    <Col lg = "6">
        <p className ={"video-Title"}>5. The broker calculates the fees and taxes</p>
    <YouTube
                            
                            video="W3QtAvkx41M"
                            //autoplay
                          />
    </Col>
    
    <Col lg = "6">
        <p className ={"video-Title"}>6. What is Average and how it is calculated</p>
    <YouTube
                            
                            video="ZGEUueTv2O0"
                           // autoplay
                          />
    </Col>
   
        
    <Col lg = "6">
    <p className ={"video-Title"}>7. We successfully record our transactions in excell and analyze them</p>
    <YouTube
                            
                            video="TXh76wBAI8Q"
                            //autoplay
                          />
    </Col>
   
    <Col lg = "6">
         <p className ={"video-Title"}>8. How to transfer your dividend receiving bank account</p>
    <YouTube
                            
                            video="7s2wF2GDWko"
                            //autoplay
                          />
    </Col>
   
    <Col lg = "6">
        <p className ={"video-Title"}>9. History of dividends and its use</p>
    <YouTube
                            
                            video="WbldUNTtEZo"
                           // autoplay
                          />
    </Col>
   
    <Col lg = "6">
        <p className ={"video-Title"}>10. Summary and how to withdraw money invested in the stock market</p>
    <YouTube
                            
                            video="5ALEbVWJlRw"
                            //autoplay
                          />
    </Col>
    </Row>

                       
                          
                          
                          
                         
                        
                         
                         

                        
                    </Container>
                </section>
                
            </div>
        );
    }
}

export default App;
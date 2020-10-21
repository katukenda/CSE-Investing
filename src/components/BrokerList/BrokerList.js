import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import i from "react-icofont";
import './BrokerList.scss';
class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <Row className={"broker-list-row"}>
                    <Col lg="6" className={"broker-col"}>
                        <div className={"main-col"}>
                            <p className={"broker-name"}>BARTLEET RELIGARE SECURITIES (PVT) LTD.</p>
                            <p className={"broker-address"}> <i class="icofont-location-pin"></i>Level "G", "Bartleet House", No. 65, Braybrooke Place, Colombo 2.</p>
                        </div>
                        <div className={"broker-contact"}>
                            <p><i class="icofont-phone" /> +94 11 5 220 200 </p>
                            <p><i class="icofont-phone" />+94 11 2 434 985</p>
                            <p> <i class="icofont-ui-email" />info@bartleetstock.com</p>
                            <a className={"broker-web"} href="http://www.bartleetreligare.com"> <i class="icofont-web" />www.bartleetreligare.com</a>

                        </div>

                    </Col>
                    <Col lg="6" className={"broker-col"}>
                        <div className={"main-col"}>
                            <p className={"broker-name"}>ACUITY STOCKBROKERS (PVT) LTD.</p>
                            <p className={"broker-address"}> <i class="icofont-location-pin"></i>No. 53, Dharmapala Mawatha,
Colombo 3.</p>
                        </div>
                        <div className={"broker-contact"}>
                            <p><i class="icofont-phone" /> +94 11 2 206 206 </p>
                            <p><i class="icofont-phone" />+94 11 2 206 298 / 9</p>
                            <p> <i class="icofont-ui-email" />sales@acuitystockbrokers.com</p>
                            <a className={"broker-web"} href="http://www.acuity.lk"> <i class="icofont-web" />www.acuity.lk</a>

                        </div>

                    </Col>
                    <Col lg="6" className={"broker-col"}>
                        <div className={"main-col"}>
                            <p className={"broker-name"}>JOHN KEELLS STOCK BROKERS (PVT) LTD.</p>
                            <p className={"broker-address"}> <i class="icofont-location-pin"></i>No. 186, Vauxhall Street,Colombo 2.</p>
                        </div>
                        <div className={"broker-contact"}>
                            <p><i class="icofont-phone" /> +94 11 2 306 250 </p>
                            <p><i class="icofont-phone" />+94 11 2 342 068</p>
                            <p> <i class="icofont-ui-email" />jkstock@keells.com</p>
                            <a className={"broker-web"} href="http://www.jksb.com"> <i class="icofont-web" />www.jksb.com</a>

                        </div>

                    </Col>
                    <Col lg="6" className={"broker-col"}>
                        <div className={"main-col"}>
                            <p className={"broker-name"}>ASHA SECURITIES LIMITED.</p>
                            <p className={"broker-address"}> <i class="icofont-location-pin"></i>No.60, 5th Lane,
Colombo 3.</p>
                            </div>
                            <div className={"broker-contact"}>
                            <p><i class="icofont-phone" /> +94 11 2 429 100 </p>
                            <p><i class="icofont-phone" />+94 11 2 429 199</p>
                            <p> <i class="icofont-ui-email"/>asl@ashasecurities.net</p>
                            <a className={"broker-web"} href="http://www.ashasecurities.net"> <i class="icofont-web"/>www.ashasecurities.net</a>
                      
                            </div>
            
                    </Col>
                    <Col lg="6" className={"broker-col"}>
                        <div className={"main-col"}>
                            <p className={"broker-name"}>ASSETLINE SECURITIES (PVT) LTD.
</p>
                            <p className={"broker-address"}> <i class="icofont-location-pin"></i>No.120, 120A, Pannipitiya Road,
Battaramulla.</p>
                            </div>
                            <div className={"broker-contact"}>
                            <p><i class="icofont-phone" /> +94 11 4 700 100 </p>
                            <p><i class="icofont-phone" />+94 11 4 700 101</p>
                            <p> <i class="icofont-ui-email"/>info@assetline.lk</p>
                            <a className={"broker-web"} href="http://assetline.lk/product/stock-broking"> <i class="icofont-web"/>assetline.lk/product/stock-broking</a>
                      
                            </div>
            
                    </Col>
                    <Col lg="6" className={"broker-col"}>
                        <div className={"main-col"}>
                            <p className={"broker-name"}>SOMERVILLE STOCKBROKERS (PVT) LTD</p>
                            <p className={"broker-address"}> <i class="icofont-location-pin"></i>No. 1A, Park Way, Park Road, Colombo 5.</p>
                            </div>
                            <div className={"broker-contact"}>
                            <p><i class="icofont-phone" /> +94 11 2 502 852 </p>
                            <p><i class="icofont-phone" />+94 11 2 502 852</p>
                            <p> <i class="icofont-ui-email"/>contact@somerville.lk</p>
                            <a className={"broker-web"} href="#"> <i class="icofont-web"/></a>
                      
                            </div>
            
                    </Col>
                    <Col lg="6" className={"broker-col"}>
                        <div className={"main-col"}>
                            <p className={"broker-name"}>J B SECURITIES (PVT) LTD.</p>
                            <p className={"broker-address"}> <i  class="icofont-location-pin"/>No. 150, St. Joseph Street,
Colombo 14 </p>
                            </div>
                            <div className={"broker-contact"}>
                            <p><i class="icofont-phone" />+94 11 2 490 900</p>
                            <p><i class="icofont-phone" />+94 11 2 430 070</p>
                            <p> <i class="icofont-ui-email"/>jbs@jb.lk</p>
                            <a className={"broker-web"} href="https://www.jbs.lk"> <i class="icofont-web"/>www.jbs.lk</a>
                      
                            </div>
            
                    </Col>
                    <Col lg="6" className={"broker-col"}>
                        <div className={"main-col"}>
                            <p className={"broker-name"}>LANKA SECURITIES (PVT) LTD.</p>
                            <p className={"broker-address"}> <i class="icofont-location-pin"></i>No. 228/1, Galle Road,
Colombo 4.</p>
                            </div>
                            <div className={"broker-contact"}>
                            <p><i class="icofont-phone" /> +94 11 4 706 757 </p>
                            <p><i class="icofont-phone" />+94 11 4 706 767</p>
                            <p> <i class="icofont-ui-email"/>info@lankasec.com</p>
                            <a className={"broker-web"} href="http://www.lankasecurities.com"> <i class="icofont-web"/>www.lankasecurities.com</a>
                      
                            </div>
            
                    </Col>
                    <Col lg="6" className={"broker-col"}>
                        <div className={"main-col"}>
                            <p className={"broker-name"}>ASIA SECURITIES (PVT) LTD.</p>
                            <p className={"broker-address"}> <i class="icofont-location-pin"></i>4th Floor, Lee Hedges Tower,
No. 349, Galle Road, Colombo 3</p>
                            </div>
                            <div className={"broker-contact"}>
                            <p><i class="icofont-phone" /> +94 11 7 722 000 </p>
                            <p><i class="icofont-phone" />+94 11 258 4864</p>
                            <p> <i class="icofont-ui-email"/>inquiries@asiasecurities.lk</p>
                            <a className={"broker-web"} href="http://asiasecurities.net"> <i class="icofont-web"/>asiasecurities.net</a>
                      
                            </div>
            
                    </Col>
                    <Col lg="6" className={"broker-col"}>
                        <div className={"main-col"}>
                            <p className={"broker-name"}>CAPITAL TRUST SECURITIES (PVT) LTD.</p>
                            <p className={"broker-address"}> <i class="icofont-location-pin"></i>No, 42, Mohamed Macan Markar Mawatha, Colombo 3.</p>
                            </div>
                            <div className={"broker-contact"}>
                            <p><i class="icofont-phone" /> +94 11 2 174 174 </p>
                            <p><i class="icofont-phone" />+94 11 2 174 173</p>
                            <p> <i class="icofont-ui-email"/>inquiries@capitaltrust.lk</p>
                            <a className={"broker-web"} href="http://www.capitaltrust.lk"> <i class="icofont-web"/>http://www.capitaltrust.lk</a>
                      
                            </div>
            
                    </Col>
                    <Col lg="6" className={"broker-col"}>
                        <div className={"main-col"}>
                            <p className={"broker-name"}>S C SECURITIES (PVT) LTD.</p>
                            <p className={"broker-address"}> <i class="icofont-location-pin"></i>5th Floor, No. 26B, Alwis Place,
Colombo 3.</p>
                            </div>
                            <div className={"broker-contact"}>
                            <p><i class="icofont-phone" /> +94 11 4 711 000  </p>
                            <p><i class="icofont-phone" />+94 11 2 394 405</p>
                            <p> <i class="icofont-ui-email"/>itdivision@sampathsecurities.lk</p>
                            <a className={"broker-web"} href="http://www.sampathsecurities.lk"> <i class="icofont-web"/>www.sampathsecurities.lk</a>
                      
                            </div>
            
                    </Col>
                    <Col lg="6" className={"broker-col"}>
                        <div className={"main-col"}>
                            <p className={"broker-name"}>CT CLSA SECURITIES (PVT) LTD.</p>
                            <p className={"broker-address"}> <i class="icofont-location-pin"></i>4-14, Majestic City, No. 10, Station Road, Colombo 4</p>
                            </div>
                            <div className={"broker-contact"}>
                            <p><i class="icofont-phone" /> +94 11 2 552 290 - 4 </p>
                            <p><i class="icofont-phone" />+94 11 2 552 289</p>
                            <p> <i class="icofont-ui-email"/>info@ctclsa.lk</p>
                            <a className={"broker-web"} href="http://www.ctclsa.lk"> <i class="icofont-web"/>www.ctclsa.lk</a>
                      
                            </div>
            
                    </Col>
                    <Col lg="6" className={"broker-col"}>
                        <div className={"main-col"}>
                            <p className={"broker-name"}>FIRST CAPITAL EQUITIES (PVT) LTD.</p>
                            <p className={"broker-address"}> <i class="icofont-location-pin"></i>No. 2, Deal Place,
Colombo 3</p>
                            </div>
                            <div className={"broker-contact"}>
                            <p><i class="icofont-phone" /> +94 11 2 639 898 </p>
                            <p><i class="icofont-phone" />+94 11 5 736 264</p>
                            <p> <i class="icofont-ui-email"/>equity@firstcapital.lk</p>
                            <a className={"broker-web"} href="http://www.firstcapital.lk"> <i class="icofont-web"/>www.firstcapital.lk</a>
                      
                            </div>
            
                    </Col>
                    <Col lg="6" className={"broker-col"}>
                        <div className={"main-col"}>
                            <p className={"broker-name"}>NDB SECURITIES (PRIVATE) LTD.</p>
                            <p className={"broker-address"}> <i class="icofont-location-pin"></i>Level 2, NDB Capital Building, No. 135, Bauddhaloka Mawatha, Colombo 4.</p>
                            </div>
                            <div className={"broker-contact"}>
                            <p><i class="icofont-phone" />+94 11 2 131 000  </p>
                            <p><i class="icofont-phone" />+94 11 2 314 181</p>
                            <p> <i class="icofont-ui-email"/>mail@ndbs.lk</p>
                            <a className={"broker-web"} href="http://www.ndbs.lk"> <i class="icofont-web"/>www.ndbs.lk</a>
                      
                            </div>
            
                    </Col>
                    <Col lg="6" className={"broker-col"}>
                        <div className={"main-col"}>
                            <p className={"broker-name"}>NATION LANKA EQUITIES (PVT) LTD.</p>
                            <p className={"broker-address"}> <i class="icofont-location-pin"></i>No.44, Guildford Crescent,
Colombo 07.</p>
                            </div>
                            <div className={"broker-contact"}>
                            <p><i class="icofont-phone" />  +94 11 488 9061-3</p>
                            <p><i class="icofont-phone" />+94 11 268 8899</p>
                            <p> <i class="icofont-ui-email"/>info@nlequities.com</p>
                            <a className={"broker-web"} href="http://www.nlequities.com"> <i class="icofont-web"/>www.nlequities.com</a>
                      
                            </div>
            
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
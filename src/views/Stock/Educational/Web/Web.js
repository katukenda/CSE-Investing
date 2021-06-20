import React, { Component } from 'react';
import { Col, Card, Row } from 'reactstrap';
import YouTube from '@u-wave/react-youtube';
import '../Education.scss';

class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <Row className={"row-one"}>
                    <Col lg="4">
                        <a className={"link"} href="http://cseinvesting.com" > <p>www.cseinvesting.com</p></a>
                    </Col>

                    <Col lg="4">
                        <a className={"link"} href="https://www.investing.com/" > <p>www.investing.com</p></a>
                    </Col>

                    <Col lg="4">
                        <a className={"link"} href="https://www.cse.lk/" > <p>www.cse.lk</p></a>
                    </Col>
                    <Col lg="4">
                        <a className={"link"} href="https://tradingeconomics.com/forecast/currency" > <p>TRADING
                        ECONOMICS
                        </p></a>
                    </Col>

                </Row>
                <YouTube
                            
                            video="mpbTLzdfOJQ"
                            autoplay
                          />
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';
import {Col,Card,Row} from 'reactstrap';
import '../Education.scss';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
             <Row className={"row-one"}>
             <Col lg="4">
                       <a className={"link"} href="https://www.youtube.com/channel/UCHkHd7hnRNnGxKN1e1MjXVw" > <p>Senima Investing</p></a>
                </Col>
                
                <Col lg="4">
                       <a className={"link"} href="https://www.youtube.com/channel/UCyup49f9HBjUkeOqGLr0NOQ" > <p>Tellers Acadomy</p></a>
                </Col>
                
                <Col lg="4">
                       <a className={"link"} href="https://www.youtube.com/channel/UCv_ITTZCPsT6y9BPmGT6EyA" > <p>SL Biz</p></a>
                </Col>
                <Col lg="4">
                       <a className={"link"} href="https://www.youtube.com/channel/UCQ10KUgh-q_DgeXbHNSGf_A" > <p>Guru Widha</p></a>
                </Col>
                <Col lg="4">
                       <a className={"link"} href="https://www.youtube.com/channel/UCUEr-iv9d5n-swGAm6Tfd3g" > <p>CSE investing</p></a>
                </Col>
              
                
             </Row>
            </div>
         );
    }
}
 
export default App;
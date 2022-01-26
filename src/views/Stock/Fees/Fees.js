import React, { Component } from 'react';
import './Fees.scss';
import {Row,Col, Button} from 'reactstrap'
import YouTube from '@u-wave/react-youtube';
class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={"fees-main "}>
                <p className={"fees-topic"}>Trade cost / fees</p>
                <p className={"fees-subtopic"}>For transactions up to Rs. 100 million</p>
               <Row className={"fees-row"}>

   
        <Col lg="2" ><p className={"fees-table-header"}>Broker Fees</p> <p className={"fees-table-data"}>0.640%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>CSE Fees</p> <p className={"fees-table-data"}>0.084%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>CDS Fees</p> <p className={"fees-table-data"}>0.024%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>CEC Fees</p> <p className={"fees-table-data"}>0.072%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>Stock Exchange Tax</p> <p className={"fees-table-data"}>0.300%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>Total cost</p> <p className={"fees-table-data"}>1.12%</p></Col>

        </Row>
        <p className={"fees-subtopic"}>For transactions exceeding rs 100 million</p>
 <Row className={"fees-row"}>

 <Col lg="2" ><p className={"fees-table-header"}>Minimum brokerage fees</p> <p className={"fees-table-data"}>0.2000%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>CSE Fees</p> <p className={"fees-table-data"}>0.0525%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>CDS Fees</p> <p className={"fees-table-data"}>0.0150%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>CEC Fees</p> <p className={"fees-table-data"}>0.0450%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>Stock Exchange Tax</p> <p className={"fees-table-data"}>0.300%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>Total cost</p> <p className={"fees-table-data"}>0.6125%</p></Col>



 
 </Row>

               
               <Row className={"fees-row"}>
<p className={"fees-subtopic"}>How the trade is done</p>

<YouTube
                            video="W3QtAvkx41M"
                            
                            autoplay
                            unmute
                          />

               </Row>

            </div>
         );
    }
}
 
export default App;
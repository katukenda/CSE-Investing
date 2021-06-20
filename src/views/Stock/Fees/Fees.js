import React, { Component } from 'react';
import './Fees.scss';
import {Row,Col, Button} from 'reactstrap'
import YouTube from '@u-wave/react-youtube';
class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={"fees-main "}>
                <p className={"fees-topic"}>වෙළඳ පිරිවැය / ගාස්තු</p>
                <p className={"fees-subtopic"}>රු. මිලියන 100 ඳක්වා වූ ගනුඳෙනු සඳහා</p>
               <Row className={"fees-row"}>

   
        <Col lg="2" ><p className={"fees-table-header"}>තැරැව්කාර ගාස්තු</p> <p className={"fees-table-data"}>0.640%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>CSE ගාස්තු</p> <p className={"fees-table-data"}>0.084%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>CDS ගාස්තු</p> <p className={"fees-table-data"}>0.024%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>CEC ගාස්තු</p> <p className={"fees-table-data"}>0.072%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>කොටස් ගනුදෙනු බද්ද</p> <p className={"fees-table-data"}>0.300%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>මුළු පිරිවැය</p> <p className={"fees-table-data"}>1.12%</p></Col>

        </Row>
        <p className={"fees-subtopic"}>රු. මිලියන 100 ඉක්මව වූ ගනුඳෙනු සඳහා</p>
 <Row className={"fees-row"}>

 <Col lg="2" ><p className={"fees-table-header"}>අවම තැරැව්කාර ගාස්තු</p> <p className={"fees-table-data"}>0.2000%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>CSE ගාස්තු</p> <p className={"fees-table-data"}>0.0525%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>CDS ගාස්තු</p> <p className={"fees-table-data"}>0.0150%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>CEC ගාස්තු</p> <p className={"fees-table-data"}>0.0450%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>කොටස් ගනුදෙනු බද්ද</p> <p className={"fees-table-data"}>0.300%</p></Col>
        <Col lg="2" ><p className={"fees-table-header"}>මුළු පිරිවැය</p> <p className={"fees-table-data"}>0.6125%</p></Col>



 
 </Row>

               
               <Row className={"fees-row"}>
<p className={"fees-subtopic"}>ගනුඳෙනුව සිඳුවන ආකාරය    </p>

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
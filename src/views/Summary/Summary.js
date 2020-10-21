import React, { Component } from 'react';

import './Summary.scss';
import { Container, Col, Row, Button, Card, CardTitle, CardBody, CardFooter, CardHeader } from 'reactstrap';
import { Paper } from '@material-ui/core';
import Slider from '../../components/Slider/Slider';
import bgimg from '../../assets/img/bg-img.png';
import CompoundInterest from '../../components/SummaryItems/CompountInterest/CompoundInterest';
import DunnigKrug from '../../components/SummaryItems/DunningKrug/DunningKrug';
import Laffer from '../../components/SummaryItems/Laffer/Laffer';
import BankRates from '../../components/SummaryItems/BankRates/BankRates';
import MailForm from '../../components/MailForm/MainForm';
class App extends Component {
    state = {

        isOpen1: Boolean(false),
        isOpen2: Boolean(false),
        isOpen3: Boolean(false),
        isOpen4: Boolean(false),
    }


    render() {

        return (

            <div className={"summary-main"}>
                {<CompoundInterest handleOpen1={this.state.isOpen1}
                    handleClose1={() => this.setState({ isOpen1: false })} />}

                {<DunnigKrug handleOpen2={this.state.isOpen2}
                    handleClose2={() => this.setState({ isOpen2: false })} />}
                {<Laffer handleOpen3={this.state.isOpen3}
                    handleClose3={() => this.setState({ isOpen3: false })} />}
                {<BankRates handleOpen4={this.state.isOpen4}
                    handleClose4={() => this.setState({ isOpen4: false })} />}



                <section className={"section-one"}>
                    <Container >
                        <Row className={"row-1"}>
                            <Col lg="12" >
                                <img className={"prop-img img-fluid"} src={bgimg} />
                            </Col>
                            <Col lg="12">
                                <div className={"sub-topic"}><p >Colombe Stock Exchange Investing</p></div>
                                <div className={"sub-topic"}> <p  >කොළඹ කොටස් වෙළෙඳපොළ ආයෝජනය </p></div>
                            </Col>
                            <Col lg="12">
                               
                            </Col>

                        </Row>
                    </Container>
                </section>
                <section className={"section-two"}>
                    <div>
                        <Row className={"row-two"}>
                            <Col lg="4" className={"summery-col"}>
                                <Paper className={"summery-paper"}>
                                    <p className={"paper-topic1"}>Compound Interest</p>
                                    <p className={"paper-topic2"}>සංයුක්ත පොළිය</p>
                                    <Button className="com-btn green-btn" onClick={() => this.setState({ isOpen1: true })}>Cal/කැල්කියුලේටරය</Button>
                                </Paper>
                            </Col>
                            <Col lg="4" className={"summery-col"}>
                                <Paper className={"summery-paper"}>
                                    <p className={"paper-topic1"}> Dunning–Kruger effect</p>
                                    <p className={"paper-topic2"}>ඩනිං-කෘගර් ආචරණය</p>
                                    <Button className="com-btn green-btn" onClick={() => this.setState({ isOpen2: true })}>Learn/ඉගෙන ගන්න</Button>
                                </Paper>

                            </Col>
                            <Col lg="4" className={"summery-col"}>
                                <Paper className={"summery-paper"}>
                                    <p className={"paper-topic1"}> Laffer curve</p>
                                    <p className={"paper-topic2"}>ලාෆර් වක්රය</p>
                                    <Button className="com-btn green-btn" onClick={() => this.setState({ isOpen3: true })}>Learn/ඉගෙන ගන්න</Button>
                                </Paper>

                            </Col>
                            <Col lg="4" className={"summery-col"}>
                                <Paper className={"summery-paper"}>
                                    <p className={"paper-topic1"}> Bank Rates</p>
                                    <p className={"paper-topic2"}>බැංකු තැන්පතු අනුපාත</p>
                                    <Button className="com-btn green-btn" onClick={() => this.setState({ isOpen4: true })}>Check /පරීක්ෂා කිරීම</Button>
                                </Paper>

                            </Col>
                        </Row>
                        <Row className={"mail-box"}>
                            <Col lg="12">
                            <MailForm/></Col>
                        </Row>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
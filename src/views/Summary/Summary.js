import React, { Component, useState } from 'react';

import './Summary.scss';
import { Container, Col, Row, Button, Collapse, } from 'reactstrap';
import { Paper } from '@material-ui/core';
import Slider from '../../components/Slider/Slider';
import bgimg from '../../assets/img/bg-img.png';
import i from 'react-icofont';
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
        isOpen0: false
    }
    toggleShow = () => {
        this.setState({
            isOpen0: true
        })
    }
    toggleHide = () => {
        this.setState({
            isOpen0: false
        })
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
                    <Row   className={"link-col"}>
                            <p >
                                <a className={"links-social"} href="https://www.facebook.com/cseinvesting" ><i class="icofont-facebook"></i></a>
                            </p>
                            <p >
                                <a className={"links-social"} href="https:cseinvesting.info@gmail.com"><i class="icofont-email"></i></a>
                            </p>
                            <p >
                                <a className={"links-social"} href="https://www.youtube.com/channel/UCUEr-iv9d5n-swGAm6Tfd3g?view_as=subscriber"><i class="icofont-brand-youtube"></i></a>
                            </p>
                            <p >
                                <a className={"links-social"} href="https://twitter.com/CEinvesting"><i class="icofont-twitter"></i></a>
                            </p>
                          
                        </Row>
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
                        </Row>
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

                        </Row>

                        {
                            this.state.isOpen0 !== true &&
                            <Row className={"row-two"} >

                                <p className={"toggle-p"} onClick={this.toggleShow} style={{ marginBottom: '1rem' }}>Show All <i class="icofont-hand-drawn-down"></i> </p>
                            </Row>
                        }


                        <Collapse isOpen={this.state.isOpen0}>
                            <Row className={"row-two"} >
                                <Col lg="4" className={"summery-col"}>
                                    <Paper className={"summery-paper"}>
                                        <p className={"paper-topic1"}> Bank Rates</p>
                                        <p className={"paper-topic2"}>බැංකු තැන්පතු අනුපාත</p>
                                        <Button className="com-btn green-btn" onClick={() => this.setState({ isOpen4: true })}>Check /පරීක්ෂා කිරීම</Button>
                                    </Paper>
                                </Col>


                            </Row>
                            <Row className={"row-two"} >
                                <p className={"toggle-p"} onClick={this.toggleHide} style={{ marginBottom: '1rem' }}>Show less <i class="icofont-hand-drawn-up"></i> </p>

                            </Row>
                        </Collapse>


                        <Row className={"mail-box"}>
                            <Col lg="12">
                                <p className={"sub-topic"}>Comment Your Idea ඔබේ අදහස් දක්වන්න </p>

                                <MailForm /></Col>
                        </Row>
                        
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
import React, { Component, useState } from 'react';

import './Summary.scss';
import { Container, Col, Row, Button, Collapse, Media } from 'reactstrap';
import { Paper } from '@material-ui/core';
import Slider from '../../components/Slider/Slider';
import bgimg from '../../assets/img/logo2.jpg';
import i from 'react-icofont';
import CompoundInterest from '../../components/SummaryItems/CompountInterest/CompoundInterest';
import DunnigKrug from '../../components/SummaryItems/DunningKrug/DunningKrug';
import Laffer from '../../components/SummaryItems/Laffer/Laffer';
import BankRates from '../../components/SummaryItems/BankRates/BankRates';
import MailForm from '../../components/MailForm/MainForm';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';
import ReactYouTube from '../../components/youtubeSubscribe';

class App extends Component {
    state = {

        isOpen1: Boolean(false),
        isOpen2: Boolean(false),
        isOpen3: Boolean(false),
        isOpen4: Boolean(false),
        isOpen0: false,
        isOpen01: false,
        isOpen02: false
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
    toggleShow01 = () => {
        this.setState({
            isOpen01: true
        })
    }
    toggleHide01 = () => {
        this.setState({
            isOpen01: false
        })
    }
    toggleShow02 = () => {
        this.setState({
            isOpen02: true
        })
    }
    toggleHide02 = () => {
        this.setState({
            isOpen02: false
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
                        <Row className={"link-col"}>
                            <p >
                                <a className={"links-social"} href="https://www.facebook.com/cseinvesting" ><i class="icofont-facebook"></i></a>
                            </p>
                            <p >
                                <a className={"links-social"} href="https:cseinvesting.info@gmail.com"><i class="icofont-email"></i></a>
                            </p>
                           
                            <p >
                                <a className={"links-social"} href="https://twitter.com/CEinvesting"><i class="icofont-twitter"></i></a>
                            </p>
                            <ReactYouTube
                            className={"c-share"}
                                channelid={"UCUEr-iv9d5n-swGAm6Tfd3g"}
                                theme={"default"}
                                layout={"full"}
                                count={"default"}
                            />

                        </Row>
                        <Row className={"row-1"}>
                           <Col lg="12">
                                <img className={"logo-img"} src ={ bgimg}/>
                           </Col>
                            <Col lg="12">
                                
                                <div className={"sub-topic"}> <p  >#motivation  #information   #knowledge</p></div>
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

                        <Row className={"row-two"}>
                            <h3 className={"sub-topic"}>කොටස් වෙළෙඳපොළට අලුතින්ම එකතුවෙන්න බලාපොරොත්තු වෙන නවකයින් වෙනුවෙන්ම සකස් කල විශේෂ වීඩියෝ මාලාව.
    සියල්ල ප්‍රායෝගිකව සත්‍ය ගිනුම් හා දත්ත යොදාගෙන පැහැදිලි කරයි
</h3>
                        </Row>
                        <Row className={"row-two"}>
                            <Col lg="4" className={"summery-col  "}>
                                <ReactPlayer style={{ width: "20" }} url='https://youtube.com/playlist?list=PLFz4R5_5kikrVVaMMIh5VCDc_6JfqBT3K' />
                            </Col>
                        </Row>

                        {
                            this.state.isOpen01 !== true &&
                            <Row className={"row-two"} >

                                <p className={"toggle-p"} onClick={this.toggleShow01} style={{ marginBottom: '1rem' }}>View playlist <i class="icofont-hand-drawn-down"></i> </p>
                            </Row>
                        }


                        <Collapse isOpen={this.state.isOpen01}>
                            <Row className={"row-two"} >
                                <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="T35O8j3BTbI" />
                                </Col>
                                <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="W3QtAvkx41M" />
                                </Col>
                                <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="3osgoLy82EE" />
                                </Col>
                                <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="mpbTLzdfOJQ" />
                                </Col>
                                <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="ZGEUueTv2O0" />
                                </Col>
                                <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="TXh76wBAI8Q" />
                                </Col>
                                <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="7s2wF2GDWko" />
                                </Col> <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="WbldUNTtEZo" />
                                </Col>
                                <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="5ALEbVWJlRw" />
                                </Col>



                            </Row>
                            <Row className={"row-two"} >
                                <p className={"toggle-p"} onClick={this.toggleHide01} style={{ marginBottom: '1rem' }}>Close playlist <i class="icofont-hand-drawn-up"></i> </p>

                            </Row>
                        </Collapse>
                        <Row className={"row-two"}>
                            <h3 className={"sub-topic"}>Atrad එකෙන් නිවැරදිව ගනුදෙනු කරන්න ඉගෙනගන්න එන්න. අපි මේ වීඩියෝ මාලාවෙන් Atrad platform එකේ සියලු දේ කතා කරනවා. වීඩියෝ 10කින් මේ හැම දෙයක්ම දැනගන්න පුලුවන් .
</h3>
                        </Row>
                        <Row className={"row-two"}>
                            <Col lg="4" className={"summery-col  "}>
                                <ReactPlayer style={{ width: "20" }} url='https://youtube.com/playlist?list=PLFz4R5_5kikrOFgQk4-ed7pg_FKCLbtFR' />
                            </Col>
                        </Row>

                        {
                            this.state.isOpen02 !== true &&
                            <Row className={"row-two"} >

                                <p className={"toggle-p"} onClick={this.toggleShow02} style={{ marginBottom: '1rem' }}>View playlist <i class="icofont-hand-drawn-down"></i> </p>
                            </Row>
                        }


                        <Collapse isOpen={this.state.isOpen01}>
                            <Row className={"row-two"} >
                                <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="hEUQuRZOTK4" />
                                </Col>
                                <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="rf3nkw5U7OM" />
                                </Col>
                                <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="GT2FqKBPRNg" />
                                </Col>
                                <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="q3mG9ZjCFgo" />
                                </Col>
                                <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="2rjFbrkMV2E" />
                                </Col>
                                <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="9R_tHUOylmU" />
                                </Col>
                                <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="o4ppwg7Fc3E" />
                                </Col> <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="RTgJEPFNEL0" />
                                </Col>
                                <Col lg="4" className={"summery-col"}>
                                    <YouTube videoId="RTgJEPFNEL0" />
                                </Col>



                            </Row>
                            <Row className={"row-two"} >
                                <p className={"toggle-p"} onClick={this.toggleHide02} style={{ marginBottom: '1rem' }}>Close playlist <i class="icofont-hand-drawn-up"></i> </p>

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
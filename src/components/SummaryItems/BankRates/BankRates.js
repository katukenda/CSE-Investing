import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import img1 from '../../../assets/img/DunningCrug.jpg';
import { Row, Col } from 'reactstrap';

import './BankRates.scss';

const ModalExample = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>

            <Modal isOpen={props.handleOpen4} >

                <div className={"dunning-main"}>
                    <Row>
                        <Col lg="12">
                            <p>ශ්‍රී ලංකාවේ ප්‍රධාන බැංකුවල  තැන්පතු අනුපාත</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="4">
                            <a href="https://boc.lk/index.php?route=rates/rates" > BOC  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.nsb.lk/rates-tarriffs/rupee-deposit-rates/" > NSB  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.peoplesbank.lk/lkr-deposits" > Peoples Bank  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.combank.net/newweb/en/rates-tariffs" > Commercial Bank  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.sampath.lk/en/interest-rates-local" > Sampath Bank  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.hnb.net/interest-rates" > HNB Bank  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.dfcc.lk/interest-rates/" > DFCC Bank  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.sdb.lk/en/rates" > SDB Bank  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.nationstrust.com/deposit-rates" > NTB Nank  </a>
                        </Col>

                    </Row>
                   
                    
                </div>
                <ModalFooter>
                    <Button color="secondary" onClick={props.handleClose4}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;
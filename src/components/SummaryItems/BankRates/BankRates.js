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
                            <p>Deposit rates of major banks in Sri Lanka</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="4">
                            <a href="https://boc.lk/index.php?route=rates/rates" target='blank'> BOC  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.nsb.lk/rates-tarriffs/rupee-deposit-rates/" target='blank'> NSB  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.peoplesbank.lk/lkr-deposits" target='blank'> Peoples Bank  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.combank.net/newweb/en/rates-tariffs" target='blank'> Commercial Bank  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.sampath.lk/en/interest-rates-local" target='blank'> Sampath Bank  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.hnb.net/interest-rates" target='blank'> HNB Bank  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.dfcc.lk/interest-rates/" target='blank'> DFCC Bank  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.sdb.lk/en/rates" target='blank'> SDB Bank  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.nationstrust.com/deposit-rates" target='blank'> NTB Bank  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.hnbfinance.lk/si/fixed-deposits/" target='blank'> HNB Finance  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.lolcfinance.com/rates-and-returns/interest-rates/" target='blank'> LOLC Finance  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.plc.lk/products/fixed-deposits-savings/fixed-deposits/" target='blank'> PLC  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.vallibelfinance.com/product/fixed-deposits" target='blank'> Vallibel Finance  </a>
                        </Col>
                        <Col lg="4">
                            <a href="https://www.lbfinance.com/fixed-deposits-yasa-isuru/" target='blank'> LB Finance  </a>
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
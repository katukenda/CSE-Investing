import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import img1 from '../../../assets/img/laffer.jpg';
import { Row, Col } from 'reactstrap';

import './Laffer.scss';

const ModalExample = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>

            <Modal isOpen={props.handleOpen3} >

                <div className={"dunning-main"}>
                    <Row>
                        <Col lg="12">
                            <p> The Lafarge curve is a theory developed by Arthur Lafarge, a supply chain economist, to show the relationship between tax rates and the amount of tax revenue collected by governments.</p> </Col>
                    <p>The curve is sometimes used to illustrate Lafarge's argument that austerity could increase total tax revenue by cutting tax rates.</p>
                    </Row>
                    <Row><Col lg="12">
                        <div> <img src={img1} className={"img-1"} />
                        </div>
                    </Col> </Row>
                    <Row>
                        <Col lg="12">
                            <p>If you think we can earn more tax revenue by raising tax rates, it will not be possible. People are changing their operations to avoid this tax.</p>
                             </Col>
                    </Row>
                </div>
                <ModalFooter>
                    <Button color="secondary" onClick={props.handleClose3}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;
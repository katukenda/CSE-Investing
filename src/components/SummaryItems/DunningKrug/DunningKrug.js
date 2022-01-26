import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import img1 from '../../../assets/img/DunningCrug.jpg';
import { Row, Col } from 'reactstrap';

import './DunningKrug.scss';

const ModalExample = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>

            <Modal isOpen={props.handleOpen2} >

                <div className={"dunning-main"}>
                    <Row>
                        <Col lg="12"><p>It describes how a person's mood works when he starts something.</p>
                            <p>This chart draws on how self-confidence varies with knowledge</p>
                        </Col>
                    </Row>
                    <Row><Col lg="12">
                        <div> <img src={img1} className={"img-1"} />
                        </div>
                    </Col> </Row>
                    <Row>
                        <Col lg="12">
                            <p>Confidence is at its peak with an overestimation of oneself in the beginning. But as the knowledge grows, he realizes that what he is thinking is wrong and that there are many things that he does not know.</p>
                            <p>Then, as the knowledge grows, so does his confidence. But he never builds as much confidence as he did before. Because he knows that there may be many more things he missed (there may be those who do not influence this)</p>
                        </Col>
                    </Row>
                </div>
                <ModalFooter>
                    <Button color="secondary" onClick={props.handleClose2}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;
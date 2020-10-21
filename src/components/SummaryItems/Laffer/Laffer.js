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
                            <p>ලාෆර් වක්රය යනු බදු අනුපාත සහ රජයන් විසින් එකතු කරනු ලබන බදු ආදායමේ ප්‍රමාණය අතර සම්බන්ධතාවය පෙන්වීම සඳහා සැපයුම් පාර්ශවීය ආර්ථික විද්‍යා ආතර් ලාෆර් විසින් සකස් කරන ලද න්‍යායකි. </p> </Col>
                    <p>සමහර විට බදු අනුපාත කප්පාදු කිරීමෙන් සමස්ත බදු ආදායම ඉහළ යා හැකි බවට ලාෆර්ගේ තර්කය විදහා දැක්වීමට වක්‍රය භාවිතා වේ</p>
                    </Row>
                    <Row><Col lg="12">
                        <div> <img src={img1} className={"img-1"} />
                        </div>
                    </Col> </Row>
                    <Row>
                        <Col lg="12">
                            <p>බදු අනුපාත වැඩි කිරීමෙන් අපට වැඩි බදු ආදායමක් උපයා ගත හැකි යැයි ඔබ සිතන්නේ නම්, එය කළ නොහැකි වනු ඇත. මෙම බද්ද මග හැරීම සඳහා මිනිසුන් සිය මෙහෙයුම් වෙනස් කරයි.</p>
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
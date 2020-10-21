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
                        <Col lg="12"><p>පුද්ගලයෙකු යමක් පටන්ගන්නාවිට ඔහුගේ මනෝභාවය ක්‍රියාත්මක වන ආකාරය මෙහිදී විස්තර කරයි.</p>
                            <p>මෙම ප්‍රස්ථාරය ඇද ඇත්තේ දැනුමත් සමග ආත්ම විස්වාසය විචලනය වන ආකාරයයි</p>
                        </Col>
                    </Row>
                    <Row><Col lg="12">
                        <div> <img src={img1} className={"img-1"} />
                        </div>
                    </Col> </Row>
                    <Row>
                        <Col lg="12">
                            <p>ආරම්භයේදී තමා පිලිබදව අධි තක්සේරුවකින් යුතුව විස්වාසය උපරිම මට්ටමේ පවතී. නමුත් දැනුම ටිකින් ටික වැඩිවන විට තමා සිතාසිටි දේවල් වැරදි බවත් තමා නොදන්නා බොහෝ දේවල් තිබෙන බව වටහා ගනී.</p>
                            <p>ඉන් පසු දැනුමින් මිහුකුරා යන විට නැවත ඔහුගේ විස්වාසය වැඩිවේ. නමුත් ඔහු කිසිවිටෙක පෙර මෙන් අධි විශ්වාසයක් තනා නොගනී. මන්ද ‍යත් ඔහුට මග හැරුනු තවත් බොහෝ දේ පැවතිය හැකි බව ඔහු දනී (මෙය බල නොපාන අයද සිටිය හැක)</p>
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
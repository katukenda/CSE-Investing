import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CompoundInterest from 'react-compound-interest';
import './CompoundInterest.scss';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
     
      <Modal isOpen={props.handleOpen1} >
        <ModalHeader ></ModalHeader>
       <div className={"calculater-main"}>
       <CompoundInterest title="Compound Interest සංයුක්ත පොළිය" />
       </div>
        <ModalFooter>
          
          <Button color="secondary" onClick={props.handleClose1}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
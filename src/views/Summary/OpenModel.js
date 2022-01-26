import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => 
  setModal(!modal)
 
  ;
  const toggle1 = () => {
  setModal(!modal)
  Cookies.set('worning',"true")
  }
  ;
  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Disclaimer</ModalHeader>
        <ModalBody>
 
Any of the stock or crypto you are seen in this website or videos are only using for education perpose. We are not responsible for your profit as well as lost.

          </ModalBody>
        <ModalFooter>
         
          <Button color="warning" onClick={toggle1}>Understood</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
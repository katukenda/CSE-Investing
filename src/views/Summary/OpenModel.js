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
        <ModalHeader toggle={toggle}>Disclaimer | අවදානයට</ModalHeader>
        <ModalBody>
        මෙම වෙබ් අඩවිය තුල හෝ අපගේ වීඩියෝ තුල අප විසින් භාවිතා කරන , අප සාකච්ඡා කරන හෝ ඔබ විසින් දකින කුමන හෝ සමාගමක්, මුදල් ඒකකයක් වගේම Crypto Currency , හුදෙක් අද්‍යාපනික චේතනාවෙන් තෝරාගත් දේවක වේ. තවද මෙම උපදෙස් හා පැහැදිලිකිරීම් ආයෝජන උපදෙස් නොවේ.
ඔබේ කිසිදු ලාභයක්/පාඩුවක් සදහා අපගේ වගකීමක් නොමැත
<br/>
Any of the stock or crypto you are seen in this website or videos are only using for education perpose. We are not responsible for your profit as well as lost.

          </ModalBody>
        <ModalFooter>
         
          <Button color="warning" onClick={toggle1}>Understood | තේරුම් ගතිමි</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
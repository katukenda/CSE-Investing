import React from 'react';
import { CFooter } from '@coreui/react';
import './container.scss'
import bgimg from '../assets/img/logo2.jpg';
import 
{Col,
Row 
}from 'reactstrap';

const TheFooter = () => {
  return (
    <CFooter fixed={false} className={"footer"}>
      
      <div>
        <a href="http://cseinvesting.com" target="_blank" className={"link-footer"} rel="noopener noreferrer">CSEinvesting.com </a>
        <span className="ml-1">&copy; 2021 All Right Reserved</span>
      </div>
     
      <div className="mfs-auto">
        <span className="mr-1">Design_By</span>
       
        <a className={"link-footer"} href="#" target="_blank" rel="noopener noreferrer">J'Devop</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)

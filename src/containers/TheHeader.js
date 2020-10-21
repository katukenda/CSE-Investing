import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Col,Row} from 'reactstrap';
import './container.scss';

import {
  CHeader,
  CToggler,
  CHeaderNav,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'

// routes config
import routes from '../const/routes'

import { 
  TheHeaderDropdown,
}  from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  return (
    <CHeader withSubheader className={"header"}>
      <CToggler
        inHeader
        className={"ml-md-3 d-lg-none tg-ctr toggler"}
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className={"ml-3 d-md-down-none tg-ctr toggler"}
        onClick={toggleSidebar}
      />
      
       
      {/* <TheHeaderDropdown />  */}
     

      {/* <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes}
        />
      </CSubheader> */}
    </CHeader>
  )
}

export default TheHeader

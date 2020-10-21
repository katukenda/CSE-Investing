import React from 'react'
import CIcon from '@coreui/icons-react'

export default [


  {
    _tag: 'CSidebarNavItem',
    name: 'සාරාංශය | Summary ',
    to: '/summary',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      
    }
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'මූලික විස්තර | Basic Info',
    route: '/basic',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'ගිණුමක් අරඹමු |Account ',
        to: '/basic/open',
      },
      {
        _tag: 'CSidebarNavItem',
        name: ' තැරැව්කරුවන් | Brockers',
        to: '/basic/brokers',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'ගාස්තු | Fees ',
        to: '/basic/fees',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'නීති | Rules',
        to: '/pending',
      },
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'අධ්‍යාපනික | Educational',
    route: '/education',
    icon: 'cil-puzzle',
    _children: [
      
      {
        _tag: 'CSidebarNavItem',
        name: 'වෙබ් අඩවි | Websites',
        to: '/education/web',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'යූ_ටියුබ් | YouTube ',
        to: '/education/youtube',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'පොත් | Books',
        to: '/pending',
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'නීති | Rules',
      //   to: '/articles/draft',
      // },
    ],
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['වෙනත්  | Other'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'අදහස් | Comments',
    route: '/pending',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'අදහස් | Comments',
        to: '/pending',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'ප්‍රශ්න | Questions',
        to: '/pending',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Welcome',
        to: '/welcome',
      },
      
    ],
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Disabled',
  //   icon: 'cil-ban',
  //   badge: {
  //     color: 'secondary',
  //     text: 'NEW',
  //   },
  //   addLinkClass: 'c-disabled',
  //   'disabled': false
  // },
]


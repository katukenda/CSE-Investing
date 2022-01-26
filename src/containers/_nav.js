import React from 'react'
import CIcon from '@coreui/icons-react'

export default [


  {
    _tag: 'CSidebarNavItem',
    name: 'Summary ',
    to: '/summary',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      
    }
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Stock',
    route: '/stock',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Account ',
        to: '/stock/open',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Brockers',
        to: '/basic/brokers',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Fees ',
        to: '/basic/fees',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Websites',
        to: '/education/web',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'YouTube ',
        to: '/education/youtube',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Books',
        to: '/pending',
      }
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Educational',
    route: '/education',
    icon: 'cil-puzzle',
    _children: [
      
      {
        _tag: 'CSidebarNavItem',
        name: 'Websites',
        to: '/education/web',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'YouTube ',
        to: '/education/youtube',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Books',
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
    _children: ['Other'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Comments',
    route: '/pending',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Comments',
        to: '/pending',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Questions',
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


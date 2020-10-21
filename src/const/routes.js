import React from 'react';
const Summary = React.lazy(() => import('../views/Summary/Summary'));

const Open = React.lazy(() => import('../views/Basic/Open/Open'));
const Branches = React.lazy(() => import('../views/Basic/Branches/Branches'));
const Pending = React.lazy(() => import('../components/UnderDevelop/Underdevolop'));
const OpenCDS = React.lazy(() => import('../components/OpenCSD/OpenCDS'));
const Brokers =React.lazy(() => import('../views/Basic/Brokers/Brokers'));
const Fees =React.lazy(() => import('../views/Basic/Fees/Fees'));
const Youtube =React.lazy(() => import('../views/Educational/Youtube/Youtube'));
const Books =React.lazy(() => import('../views/Educational/Books/Books'));
const Web =React.lazy(() => import('../views/Educational/Web/Web'));


const routes = [
  { path: '/summary', exact: true, name: 'Summary', component: Summary},
  { path: '/basic/open', name: 'Open', component: Open },
  { path: '/basic/brokers', name: 'Brokers', component: Brokers },
  { path: '/basic/fees', name: 'Fees', component: Fees },
  
  { path: '/education/youtube', name: 'Youtube', component: Youtube },
  { path: '/education/web', name: 'Web', component: Web },
  { path: '/education/books', name: 'Books', component: Books },
  
  { path: '/opencds', name: 'OpenCDS', component: OpenCDS },
  { path: '/basic/brokers', name: 'Brokers', component: Brokers },
  { path: '/basic/branches', name: 'Branches', component: Branches },
  { path: '/pending', name: 'Pending', component: Pending }
];
   
export default routes;
  
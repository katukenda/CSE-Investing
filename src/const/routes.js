import React from 'react';
const Summary = React.lazy(() => import('../views/Summary/Summary'));

const Open = React.lazy(() => import('../views/Stock/Open/Open'));
const Branches = React.lazy(() => import('../views/Stock/Branches/Branches'));
const Pending = React.lazy(() => import('../components/UnderDevelop/Underdevolop'));
const OpenCDS = React.lazy(() => import('../components/OpenCSD/OpenCDS'));
const Brokers =React.lazy(() => import('../views/Stock/Brokers/Brokers'));
const Fees =React.lazy(() => import('../views/Stock/Fees/Fees'));
const Youtube =React.lazy(() => import('../views/Stock/Educational/Youtube/Youtube'));
const Books =React.lazy(() => import('../views/Stock/Educational/Books/Books'));
const Web =React.lazy(() => import('../views/Stock/Educational/Web/Web'));
const BianceBasic =React.lazy(() => import('../views/Binance/Basic/BinanceBasic'));


const routes = [
  { path: '/summary', exact: true, name: 'Summary', component: Summary},
  { path: '/stock/open', name: 'Open', component: Open },
  { path: '/stock/brokers', name: 'Brokers', component: Brokers },
  { path: '/stock/fees', name: 'Fees', component: Fees },
  
  { path: '/stock/youtube', name: 'Youtube', component: Youtube },
  { path: '/stock/web', name: 'Web', component: Web },
  { path: '/stock/books', name: 'Books', component: Books },
  
  { path: '/opencds', name: 'OpenCDS', component: OpenCDS },
  { path: '/stock/brokers', name: 'Brokers', component: Brokers },
  { path: '/stock/branches', name: 'Branches', component: Branches },
  { path: '/pending', name: 'Pending', component: Pending }


];
   
export default routes;
  
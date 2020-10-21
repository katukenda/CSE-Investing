import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/scss/style.scss';
import './assets/scss/fonts.scss';
import './assets/scss/colors.scss';
import './assets/scss/componentsStyle.scss';
import './assets/scss/viewsStyles.scss';
import Layout from './containers/Layout/Layout';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages




const Landing = React.lazy(() => import('./views/Landing/Landing'));

class App extends Component {

  render() {
    return (
      
          
          
           <Layout/>
           
          
      
    );
  }
}

export default App;

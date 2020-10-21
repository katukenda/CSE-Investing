import React, { Component } from 'react'
 import bgimg from '../../assets/img/bg-img.png'
import './Underdevolop.scss'
 class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={"text"}>
                <h1>කණගාටුයි, මෙම පිටුව ඉදිවෙමින් පවතී</h1>
                <h2>Sorry, This page is under construction</h2>
<img src={bgimg} className={"bg-img"}/>

            </div>
         );
    }
}
 
export default App;
import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

import './tools.scss';
import YouTube from '@u-wave/react-youtube';
import { Container, UncontrolledCollapse, Col, Row, Button, Card, CardTitle, CardBody, CardFooter, CardHeader } from 'reactstrap';

class App extends Component {  

    render() {
        return (
         <div>
               <Row>
               <Col lg="6">
                     <p className = {"video-Title"}> How to modify a pdf document to verify a account</p>
                     <YouTube
                            
                            video="Tiy0j3Kv4RY"
                           autoplay
                          />
                 </Col>
                 
           </Row>
           <Row>
               <Col lg= "6"><p className = {"video-Title"}>Atrad එකෙන් නිවැරදිව ගනුදෙනු කරන්න ඉගෙනගන්න එන්න. අපි මේ වීඩියෝ මාලාවෙන් Atrad platform එකේ සියලු දේ කතා කරනවා. වීඩියෝ 10කින් මේ හැම දෙයක්ම දැනගන්න පුලුවන් . </p>
               
               <a href ={"https://www.youtube.com/watch?v=WXCI4hYZyBY&list=PLFz4R5_5kikrOFgQk4-ed7pg_FKCLbtFR"} target = "blank ">
                   <Button className="com-btn green-btn">
                       GO to playlist
                   </Button>
               </a>
               </Col>
               <Col lg="6">
               <p className = {"video-Title"}>01. Introduction Video</p>
               <YouTube
                            
                            video="WXCI4hYZyBY"
                           //autoplay
                          />
               </Col>
              
           </Row>
           <Row>
               <Col lg="6">
               <p className = {"video-Title"}>Day trader strategic managment google sheet</p>
               <a href ={"https://docs.google.com/spreadsheets/d/1brDhGBCro6_2zaRgQbJKN6j1XBXbOEuaqNJBiY5rmKY/edit?usp=sharing"} target = "blank ">
                   <Button className="com-btn green-btn">
                       Get Demo Google Sheet
                   </Button>
               </a>
               </Col>
               <Col lg="6">
               <p className = {"video-Title"}></p>
               <YouTube
                            
                            video="WXCI4hYdfdZyBY"
                           //autoplay
                          />
               </Col>
           </Row>
         </div>
        );
    }
}

export default App;
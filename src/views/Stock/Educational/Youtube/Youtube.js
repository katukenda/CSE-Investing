import React, { Component } from 'react';
import {Col,Card,Row} from 'reactstrap';
import '../Education.scss';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
             <Row className={"row-one"}>
             <Col className={"youtube-photo"} lg="4">
                    <img className={"img-yt"} src="https://yt3.ggpht.com/a/AATXAJwPo3MMZPAyxx37W-679TgEe7qCYBpW4I6UH7ff=s88-c-k-c0x00ffffff-no-rj" alt="photo"/>
                       <a className={"link"} href="https://www.youtube.com/channel/UCHkHd7hnRNnGxKN1e1MjXVw" > <p>Senima Investing</p></a>
                </Col>
                
                <Col className={"youtube-photo"} lg="4">
                <img className={"img-yt"} src="https://yt3.ggpht.com/a/AATXAJzkvG1O6O6GB3VVCHQOETIlRvDLyNqMKV5ZZXMd9Q=s88-c-k-c0x00ffffff-no-rj" alt="photo"/>

                       <a className={"link"} href="https://www.youtube.com/channel/UCyup49f9HBjUkeOqGLr0NOQ" > <p>Tellers Acadomy</p></a>
                </Col>
                
                <Col className={"youtube-photo"} lg="4">
                <img className={"img-yt"} src="https://yt3.ggpht.com/a/AATXAJx0HGib3WTezK6-lHSy_I_ST3hcXBDiT_7keWPSVw=s88-c-k-c0x00ffffff-no-rj" alt="photo"/>

                       <a className={"link"} href="https://www.youtube.com/channel/UCv_ITTZCPsT6y9BPmGT6EyA" > <p>SL Biz</p></a>
                </Col>
                <Col className={"youtube-photo"} lg="4">
                <img className={"img-yt"} src="https://yt3.ggpht.com/a/AATXAJwajt20iVBnUS_HPViwkVVvYCjgWiKArUZHaBdf=s88-c-k-c0x00ffffff-no-rj" alt="photo"/>

                       <a className={"link"} href="https://www.youtube.com/channel/UCa-j6Qg6SoOJY2fIisy3YRA" > <p>Investor Think</p></a>
                </Col>
                <Col className={"youtube-photo"} lg="4">
                <img className={"img-yt"} src="https://lh3.googleusercontent.com/a-/AOh14GjibkBGjoxVLOmEfmRuTkGAOPoD-nDYYjrYPEaE=s88-c-k-c0x00ffffff-no-rj-mo" alt="photo"/>

                       <a className={"link"} href="https://www.youtube.com/channel/UCUEr-iv9d5n-swGAm6Tfd3g" > <p>CSE investing</p></a>
                </Col>
              
                
             </Row>
            </div>
         );
    }
}
 
export default App;
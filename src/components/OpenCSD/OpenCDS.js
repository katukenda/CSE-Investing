import React, { Component } from 'react';
import { Row, Col, Card } from 'reactstrap';
import "react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";



class App extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col lg="12">

                        <ModalVideo
                            channel="youtube"
                            className="intro-video"
                            isOpen={this.state.isOpen}
                            videoId="lVsijsFuGxE"
                            onClose={() =>
                                this.setState({
                                    isOpen: false
                                })
                            }
                        />

                    </Col>
<Col lg="12">
<button onClick={this.openModal} >
                        Watch The Video
                    </button>
</Col>                    
                </Row>
            </div>
        );
    }
}

export default App;

    import React, { Component } from 'react'
    import * as emailjs from 'emailjs-com'
    
    import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
    
    class ContactForm extends Component {
      state = {
        uname: '',
        email: '',
        subject: '',
        message: '',
      }
    handleSubmit(e) {
        e.preventDefault()
        const { uname, email, subject, message } = this.state
    
        let templateParams = {
          from_name: email,
          to_name: 'CSE investing',
          subject: subject,
          message_html: message,
         }
    
         emailjs.send(
          'service_2eyrig8',
          'template_xo7v69n',
           templateParams,
          'user_TsRZIBwstBrZd41z5aLdi'
         )
         this.resetForm()
     }
    resetForm() {
        this.setState({
          uname: '',
          email: '',
          subject: '',
          message: '',
        })
      }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }
    render() {
        return (
          
            <div>
              <h1 className="p-heading1">Get in Touch</h1>
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup controlId="formBasicEmail">
                  <Label className="text-muted">Email address</Label>
                  <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    className="text-primary"
                    onChange={this.handleChange.bind(this, 'email')}
                    placeholder="Enter email"
                  />
                </FormGroup>
    <FormGroup controlId="formBasicName">
                  <Label className="text-muted">Name</Label>
                  <Input
                    type="text"
                    name="uname"
                    value={this.state.uname}
                    className="text-primary"
                    onChange={this.handleChange.bind(this, 'uname')}
                    placeholder="Name"
                  />
                </FormGroup>
    <FormGroup controlId="formBasicSubject">
                  <Label className="text-muted">Subject</Label>
                  <Input
                    type="text"
                    name="subject"
                    className="text-primary"
                    value={this.state.subject}
                    onChange={this.handleChange.bind(this, 'subject')}
                    placeholder="Subject"
                  />
                </FormGroup>
    <FormGroup controlId="formBasicMessage">
                  <Label className="text-muted">Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    className="text-primary"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this, 'message')}
                  />
                </FormGroup>
    <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            
              </div>
        )
      }
    }
    export default ContactForm
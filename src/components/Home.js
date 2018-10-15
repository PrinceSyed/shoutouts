import React, { Component } from 'react';
import logo from '../assets/img/shoutouts-logo.svg';
import slack from '../assets/img/slack.svg';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import './Home.css';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() { 
        return ( 

            <div className="wrapper">

            {/* Banner Markup */}
            <div className="banner banner-home">
              <p className="logoWrap"> <img src={logo} className="logo" alt="Shout Outs Logo" /> </p>
              <Container>
                <Row>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <h2> Give a <span>shoutout</span> to your favorite person via a unique link </h2>
                  </Col>
                </Row>
              </Container>
            </div>
      
      
             {/* Form Markup */}
            <div className="home home-form">
              <Container className="form-container">
                <Row>
                  <Col sm="12">
                  <Form>
                    <FormGroup>
                        <Label for="userName"> I </Label>
                        <Input type="text" name="userName" id="userName" placeholder="Your Name" />
                    </FormGroup>
      
                    <FormGroup>
                        <Label for="recieverName"> Wants to give a shoutout to </Label>
                        <Input type="text" name="recieverName" id="recieverName" placeholder="Recepient’s name"/>
                    </FormGroup>
      
                    <FormGroup>
                        <Label for="message"> For </Label>
                        <Input type="text" name="messsage" id="message" placeholder="eg. being an awesome friend" />
                    </FormGroup>
      
                    <Button className="btn-main">  <Link to='/share'> Generate Links </Link>  </Button>


      
                    </Form>
                  </Col>
                </Row>
              </Container>
            </div>
      
            <div className="join-slack">
              <Container className="slack-container">
                  <Row>
                    <Col sm="1" xs="2">
                    <img src={slack} className="slack-img" alt="Shout Outs Slack" />
                    </Col>
                    <Col sm="11" xs="10">
                      <h3> Join our slack community! </h3>
                      
                      <p> Have any feedback or questions? Want to discuss ideas? Come hang out with us on Slack! </p>
                      <p> <a rel="noopener noreferrer" href="https://join.slack.com/t/shoutouts-app/shared_invite/enQtNDQ5NzUxMDQyNTMwLWQzOTc2Y2QwMDFiY2EyYWI0MzZlOGZjMDE3MTAzY2QwYWM4MzU2ODdmYjk0MmNiNTliY2NmZGJhNTIzYmM0ZDM" target="_blank"> Join Shoutouts in Slack </a> </p>
                    </Col>
                  </Row>
                </Container>
            </div>
      
            <div className="footer">
              <Container>
                  <Row>
                    <Col sm="12">
                      <p> Made with <span aria-label="Heart Emoji" role="img">🧡 </span> by <a rel="noopener noreferrer" href="https://www.syedibrahim.me" target="_blank">  Syed Ibrahim </a> </p>
                    </Col>
                  </Row>
                </Container>
            </div>
      
      
      
            </div>


         );
    }
}
 
export default Home;
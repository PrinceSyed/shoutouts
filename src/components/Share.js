import React, { Component } from 'react';
import logo from '../assets/img/shoutouts-logo.svg';
import slackIcon from '../assets/img/slack-icon.svg';
import linkedinIcon from '../assets/img/linkedIn-icon.svg';
import facebook from '../assets/img/facebook-icon.svg';
import twitterIcon from '../assets/img/twitter-icon.svg';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import './Share.css';
import { Link } from 'react-router-dom'


class Share extends Component {
    render() { 
        return ( 

        <div className="wrapper share-wrapper">

            {/* Banner Markup */}
            <div className="banner banner-share">
              <p className="logoWrap"> <img src={logo} className="logo" alt="Shout Outs Logo" /> </p>
              <Container>
                <Row>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <h2> Share via the link below </h2>
                    <p> Anyone with the link can view this page – no account required. </p>
                    
                    <Form>
                        <FormGroup className="share-link-group">
                            <Label for="shareLink"> COPY </Label>
                            <Input type="text" name="shareLink" id="shareLink" placeholder="https://shoutouts.app/dert123f" />
                        </FormGroup>
                    </Form>

                  </Col>
                </Row>

                <Row>
                    <Col className="social-share" sm="12" md={{ size: 8, offset: 2 }}>
                        <h3> Or share the love on social media </h3>
                        <ul>
                            <li> <a> <img src={slackIcon} alt="Share Shoutout on slack" /> </a> </li>
                            <li> <a> <img src={twitterIcon} alt="Share Shoutout on twitter" /> </a> </li>
                            <li> <a> <img src={linkedinIcon} alt="Share Shoutout on LinkedIn" /> </a> </li>
                            <li> <a> <img src={facebook} alt="Share Shoutout ob Facebook" /> </a> </li>
                        </ul>
                    </Col>
                </Row>

                                    {/* 
                    
                import slackIcon from '../assets/img/slack-icon.svg';
import linkedinIcon from '../assets/img/linkedIn-icon.svg';
import facebook from '../assets/img/facebook-icon.svg';
import twitterIcon from '../assets/img/twitter-icon.svg';

                */}
                
              </Container>
            </div>

            <div className="share-message">
                <Container className="share-message-container">
                    <Row>
                        <Col  className="share-message-inner" sm="12">
                        <p> <span className="userName"> Jamie </span> 
                        wants to give a shoutout to
                        <span className="recieverName"> Melissa </span>
                         for 
                         <span className="messsage"> being an awesome friend </span>
                         </p>
                        </Col>
                    </Row>

                </Container>
                
                <Container>
                    <Row>
                        <Col sm="12">
                            <Button className="btn-ghost return-favor">  <Link to='/'> Return the favor </Link>  </Button>
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
 
export default Share;
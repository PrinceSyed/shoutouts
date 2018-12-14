import React, { Component } from 'react';
import Footer from './Footer';
import logo from '../assets/img/shoutouts-logo.svg';
import purpOval from '../assets/img/purp-oval.svg';
import purpLine from '../assets/img/purp-line.svg';
import goldOval from '../assets/img/gold-oval.svg';
import aquaLine from '../assets/img/aqua-line.svg';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import './Share.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import twitterIcon from '../assets/img/twitter-icon.svg';
import linkedinIcon from '../assets/img/linkedIn-icon.svg';
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    EmailShareButton,
    EmailIcon
  } from 'react-share';


class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userName:'',
          recieverName:'',
          messsage:'',
          id:'',
          shareLink: '',
          value: '',
          copied: false,
        };
    }
    componentDidMount() {
        this.getUser();
    }
    getUser(){
        axios.get('https://shoutoutz-de4fc.firebaseio.com/usrs/messages/'+this.props.match.params.name + '.json')
        .then(res => {
          //alert(JSON.stringify(res.data.data)); 
          this.setState({
            userName: res.data.userName,
            recieverName: res.data.recieverName,
            messsage: res.data.messsage,
            shareLink: 'https://www.shoutouts.app/share/'+this.props.match.params.name
          });

        }) .catch(function (error) {
            alert(JSON.stringify('Oops this shoutout might have been deleted'));
        });
    }
    render() { 
        return ( 

        <div className="wrapper share-wrapper">


            {/* Banner Markup */}
            <div className="banner banner-share">
              <p className="logoWrap"> <Link to='/'> <img src={logo} className="logo" alt="Shout Outs Logo" /> </Link> </p>
              <Container>
                <Row>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <h2> Share via the link below </h2>
                    <p> Anyone with the link can view this page – no account required. </p>

 

                    <Form>
                        <FormGroup className="share-link-group">
                        <div className="copy-wrapper">
                            <CopyToClipboard text={this.state.shareLink}
                                    onCopy={() => this.setState({copied: true})}>
                                    <span className="copy-link">Copy Link</span>
                                </CopyToClipboard>
                              
                            {this.state.copied ? <span className="copied-link">Copied</span> : null}
                        </div>
                            <Input type="text" name="shareLink" value={this.state.shareLink} id="shareLink" placeholder="https://shoutouts.app/dert123f" />
                        </FormGroup>
                    </Form>

                  </Col>
                </Row>

                <Row>
                    <Col className="social-share" sm="12" md={{ size: 8, offset: 2 }}>
                        <h3> Or share the love on social media </h3>
    
                        <FacebookShareButton
                            url={this.state.shareLink}
                            quote=""
                            className="social-share-button">
                            <FacebookIcon
                            size={52}
                            round />
                        </FacebookShareButton>

                        <TwitterShareButton
                            url={this.state.shareLink}
                            title=""
                            className="social-share-button">
                            <TwitterIcon
                            size={52}
                            round />
                        </TwitterShareButton>

                        <LinkedinShareButton
                            url={this.state.shareLink}
                            title=""
                            windowWidth={750}
                            windowHeight={600}
                            className="social-share-button">
                            <LinkedinIcon
                            size={52}
                            round />
                        </LinkedinShareButton>

                        <EmailShareButton
                            url={this.state.shareLink}
                            subject=""
                            body=""
                            className="social-share-button">
                            <EmailIcon
                            size={52}
                            round />
                        </EmailShareButton>

                    </Col>
                </Row>
                
              </Container>
            </div>


            <div className="share-message">
                <Container className="share-message-container">
                    <Row>
                        <Col  className="share-message-inner" sm="12">
                        <p> <span className="userName"> {this.state.userName} </span> 
                        wants to give a shoutout to
                        <span className="recieverName"> {this.state.recieverName} </span>
                         for 
                         <span className="messsage"> {this.state.messsage} </span>
                         </p>
                        </Col>
                    </Row>

                    <div className="decor"> 
                        <img src={purpOval} className="purp-oval" alt="Purple Oval Shape" /> 
                        <img src={purpLine} className="purp-line" alt="Purple Line Shape" /> 
                        <img src={goldOval} className="gold-oval" alt="Gold Oval Shape" /> 
                        <img src={aquaLine} className="aqua-line" alt="Aqua Line Shape" /> 
                    </div>
                </Container>
                
                <Container>
                    <Row>
                        <Col sm="12">
                        <Link className="return-link" to='/'> <Button className="btn-ghost return-favor">   Return the favor  </Button> </Link>
                        </Col>
                    </Row>
                </Container>
      
            </div>

            <Footer/>
      

        </div>

         );
    }
}
 
export default Share;
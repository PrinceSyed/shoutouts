import React, { Component } from 'react';
import logo from '../assets/img/shoutouts-logo.svg';
import phunt from '../assets/img/ph-logo.png';
import Footer from './Footer';
import twitterIcon from '../assets/img/twitter-icon.svg';
import linkedinIcon from '../assets/img/linkedIn-icon.svg';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:'',
      recieverName:'',
      messsage:'',
      name:''
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
        // get our form data out of state
    const { userName, recieverName, messsage } = this.state;
    axios.post('https://shoutoutz-de4fc.firebaseio.com/usrs/messages.json',{ userName, recieverName, messsage})
        .then(res => {
             // alert(JSON.stringify(res));
              //alert(res.data.id);
             window.location = "/share/"+res.data.name;
          
         }) .catch(function (error) {
           
      });
    }
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
                  <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="userName"> I </Label>
                        <Input type="text" name="userName" id="userName" placeholder="Your Name" onChange={this.onChange} required/>
                    </FormGroup>
      
                    <FormGroup>
                        <Label for="recieverName"> Want to give a shoutout to </Label>
                        <Input type="text" name="recieverName" id="recieverName" placeholder="Recepient’s name"  onChange={this.onChange} required/>
                    </FormGroup>
      
                    <FormGroup>
                        <Label for="message"> For </Label>
                        <Input type="text" name="messsage" id="message" placeholder="eg. being an awesome friend"  onChange={this.onChange} required/>
                    </FormGroup>
      
                    <Button className="btn-main" type="submit">Generate Link</Button>


      
                    </Form>
                  </Col>
                </Row>
              </Container>
            </div>
      
            <div className="product-update">
              <Container className="product-update-container">
                  <Row>
                    <Col sm="1" xs="2">
                    <img src={phunt} className="ph-img" alt="Shout Outs Product Hunt" />
                    </Col>
                    <Col sm="11" xs="10">
                      <h3> Product updates and feedback </h3>
                      
                      <p> Visit the Shoutout Product Hunt page to provide feedback, report bugs, and stay current with product updates.    </p>
                      <p> <a rel="noopener noreferrer" href="https://www.producthunt.com/posts/shout-outs" target="_blank"> View on Product Hunt </a> </p>
                    </Col>
                  </Row>
                </Container>
            </div>
      
          <Footer/>
      
      
      
            </div>


         );
    }
}
 
export default Home;
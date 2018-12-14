import React, { Component } from 'react'
import twitterIcon from '../assets/img/twitter-icon.svg';
import linkedinIcon from '../assets/img/linkedIn-icon.svg';
import { Container, Row, Col } from 'reactstrap';


class Footer extends Component {

  render() { 
        return ( 
            <div className="footer">
              <Container>
                  <Row>
                    <Col sm="12">
                      <p> Made with <span aria-label="Heart Emoji" role="img">🧡 </span> by <a rel="noopener noreferrer" href="https://www.syedibrahim.me" target="_blank">  Syed Ibrahim </a> </p>
                      <ul className="git-social">
                          <li> <a href="https://twitter.com/sibrah18" target="_blank">  <img src={twitterIcon} alt="Share Shoutout on twitter" />  </a> </li>
                          <li> <a href="https://www.linkedin.com/in/syed-ibrahim-a8773533" target="_blank"> <img src={linkedinIcon} alt="Share Shoutout on LinkedIn" /> </a> </li>
                          
                      </ul>
                    </Col>
                  </Row>
                </Container>
            </div>
    
         );
    }
}
 
export default Footer;

import React from "react";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
// reactstrap components
import {   Button,
  Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody,
  Col,
  Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <>
    <ExamplesNavbar/>

    <IndexHeader/>
    <footer className="footer footer-black footer-white">
      <Container>

      <h2 style={{color:"black"}} className="presentation-subtitle text-center">
      Your Feedbacks Matter to us
     </h2>
       
       <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <CardDeck>
                <Card >
                
              <CardBody>
                
                <CardSubtitle tag="h6" className="mb-2 text-muted">Support</CardSubtitle>
                <CardText>Intrested to know more , Contact us at..</CardText>
                <Button color="info" href="tel:+917718096106">7718096106</Button>
              </CardBody>
            </Card>
            <Card >
                
            <CardBody>
             
              <CardSubtitle tag="h6" className="mb-2 text-muted">Feedback</CardSubtitle>
              <CardText>Give us your feedback and curiosity  at..</CardText>
              <Button color="info" href="mailto: hola@loveactually.me">hola@loveactually.me</Button>
            </CardBody>
          </Card>
                </CardDeck>
              </Col>
            </Row>
            <row>
            <nav className="footer-nav">
            <ul>
              <li>
              <h4>Contact: <a>7718096106</a></h4>
              </li>
              <li>
              <h4>Email: <a>hi@loveactually.me</a></h4>
              </li>
              
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span  className="copyright"><a href="https://www.linkedin.com/in/deepom-chowdhury-7b3651200/">
              © {new Date().getFullYear()}, made 
               by Deepom Chowdhury</a>
            </span>
          </div>
             
            </row>
          </Container>
        </div>
     
      </Container>
    </footer>
    </>
  );
}

export default DemoFooter;

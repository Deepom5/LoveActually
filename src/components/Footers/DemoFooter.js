
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
    <ExamplesNavbar style={{backgroundColor:"black"}} />

    <div style={{
      backgroundImage:
        "url(" + require("assets/img/contact-and-information-EVWR64H.jpg") + ")",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",backgroundColor:"#D3D3D3",height:"37vw",width:"100%" 
    }}></div>
    
    
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
           <br/>
          <div className="credits ml-auto">
            <span  className="copyright"><a href="https://www.linkedin.com/in/deepom-chowdhury-7b3651200/">
              © {new Date().getFullYear()}, made 
               by Deepom Chowdhury</a>
            </span>
          </div>
             
            </row>
          </Container>
        </div>
     
      
   
    </>
  );
}

export default DemoFooter;

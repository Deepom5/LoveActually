
import React from "react";

// reactstrap components
import {   Card,  CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody,Row, Container,UncontrolledCarousel } from "reactstrap";

// core components

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";




//function carosel
const carouselItems = [
  {src:
   "https://i.ibb.co/yXbhm5J/picb.jpg",
      altText: "Slide 1",
    caption: ""
  },
  {src:
  "https://i.ibb.co/WHV8ShR/9.jpg",
      altText: "Slide 2",
    caption: ""
  },
  {src:
    "https://i.ibb.co/rynR0WS/7.jp",
        altText: "Slide 3",
      caption: ""
    },
    {src:
      "https://i.ibb.co/3N266Vz/pica.jpg",
          altText: "Slide 4",
        caption: ""
      },
      {src:
        "https://i.ibb.co/CPvypLc/8.jpg",
            altText: "Slide 5",
          caption: ""
        },
        {src:
          "https://i.ibb.co/Mks2PT7/picc.jpg",
              altText: "Slide 6",
            caption: ""
          },
          {src:
            "https://i.ibb.co/3dt50Kw/picd.jpg",
                altText: "Slide 7",
              caption: ""
            },
            {src:
              "https://i.ibb.co/7RmLLGM/pice.jpg",
                  altText: "Slide 8",
                caption: ""
              },
              {src:
                "https://i.ibb.co/XtwW1h1/picf.jpg",
                    altText: "Slide 9",
                  caption: ""
                },
                                
];



function RegisterPage() {
 
 
  return (
    <>
      <ExamplesNavbar />
      <div
       
      >
      
     
      </div>
        <div className="filter" />
        <Container>
        <br/><br/>
        <UncontrolledCarousel items={carouselItems} />
        <br/><br/><br/><br/>
        <h1 className="title"><strong>Events</strong></h1><br/>
          <Row>
          <CardDeck>
          <Card>
            
            <CardBody>
              <CardTitle tag="h5">iGNiTE </CardTitle>
              <br/>
              <CardText>It is our signature activity where we push inclusivity by pulling together able and disabled people and exhibit the best skills in performing arts.It is an activity by PWDs for PWDs, the idea is to bring a new perspective among able people when they encounter PWDs.</CardText>
            
            </CardBody>
          </Card>
          <Card>
           
            <CardBody>
              <CardTitle tag="h5">iGNiTE 1.0</CardTitle>
              <br/>
              <CardText>First offline activity, an evening with PWDs in Delhi during Diwali 2019, where talented disabled performers gave a glimpse of their talent in an open environment and shared the stage with able performers More than 3k+ crowd cheering for them was an overwhelming experience. Impact - People started knowing the performers, one started her podcast, and a few gained more recognition </CardText>
             
            </CardBody>
          </Card>
          <Card>
            
            <CardBody>
              <CardTitle tag="h5">iGNiTE 2.0</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Summer Edition</CardSubtitle>
              <CardText>The summer edition we did was online on Instagram live, last for three days in June'19. It allowed us to bring talented performers from different nooks and corners of India.  It was one of its kind of online events focusing on disabled people, and all three days witnessed 8k+ people watching and encouraging these talented superstars. We had influencers like Rakshanda Khan, Ansha Sayed, and Kamlesh Patel.</CardText>
              
            </CardBody>
          </Card>
          <Card>
           
          <CardBody>
            <CardTitle tag="h5">iGNiTE 3.0</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Winter Edition</CardSubtitle><br/>
            <CardText>Upcoming</CardText>
           
          </CardBody>
        </Card>
        
        </CardDeck>
          </Row>
          <br/><br/>
        </Container>
       
      
   
    </>
  );
}

export default RegisterPage;

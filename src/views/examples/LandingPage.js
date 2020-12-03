
import React from "react";
import vid from "../../assets/img/Ed Sheeran - Beautiful People (feat. Khalid) [Official Lyric Video] (online-video-cutter.com).mp4"
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardColumns,
  CardLink,
  UncontrolledCollapse,
 CardImg, CardText,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";


function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk </h2>
                <h5 className="description">
                We at LoveActually.Me are working persistently to give a safe environment to get mentored, inspired, and be independent by meeting the right fit.
                </h5>
                <UncontrolledCollapse toggler="#toggler">
                <h5 className="description">
                We are an ONLINE and OFFLINE community designed to ENABLE and EMPOWER 
                people who have fallen out of the mainstream (PWD’s) to CONNECT, MEET
                and GROW. Love Actually is a vehicle for PWD’s to foster social inclusion,
                a sense of belonging, and provide an opportunity to lead a fulfilling like 
                by exploring their talents and meet life-long friends.
     Love Actually is a salute to everyday bravery they exhibit and immense love they 
    want to share.  
                    </h5>
              </UncontrolledCollapse>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  id="toggler" 
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
               
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Meet</h4>
                    <p className="description">
                      
LoveActuallyMe is a
platform to connect with
people who share the same
likings, thoughts and
ideologies on social and
professional front.

                    </p>
                    <UncontrolledCollapse toggler="#meet">
                    <p className="description">
                    Our online platform helps
you find people near you or
the ones you can connect
instantly. 
                        </p>
                  </UncontrolledCollapse>
                    <Button className="btn-link" id="meet" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chat-33" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Greet</h4>
                    <p>
                    Our online initiative will help
                    able and PWDs to meet,
                    connect with like minded
                    individuals.
                    </p>
                    <UncontrolledCollapse toggler="#initative">
                    <p className="description">
                    Also, LoveActuallyMe events
are designed to encourage
networking, learning, and
encouraging while making new friends.
                        </p>
                  </UncontrolledCollapse>
                    <Button className="btn-link" id="initative" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Network</h4>
                    <p>
                    What happens when you meet people who are alike, who like you and who want to move ahead? You either find yourself or find the Love of your life a good deal either way.
                    </p>
                    <UncontrolledCollapse toggler="#network">
                    <p className="description">
                    LoveActuallyMe interactions
                    are designed to ensure that
                    people who like the same
                    things meet and grow
                    together.
                        </p>
                  </UncontrolledCollapse>
                    <Button className="btn-link" id="network" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
          
            </Row>
          </Container>
    
        <div className="section content-center  text-center">
        <video autoPlay muted loop
        style={{ 
      width:"100%",
      border:"0",
      height:"100%",
      objectFit:'cover',
     zIndex:"-2",
     
      
    }}
        >
        <source src={vid} type="video/mp4"/>
        </video>
          
        
        
          
            <h1  style={{position:"absolute", top:"35%",left:"35%",color: "#1f1c1c", backgroundColor: "#f2f2f2", fontSize: "7vw", lineHeight: "7vw", fontWeight: "700", margin: "0 5px 24px", float: "left", padding: "10px", margin:" 0 5px 24px",  }}>MISSION</h1>
            <h3 style={{position:"absolute", top:"45%",left:"30%",fontSize: "4vw", fontWeight: "300",backgroundColor: "#f2f2f2"}}>
            Inclusivity with Equality</h3>
            
            </div>

      
            </div>
        <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/pexels-elizaveta-dushechkina-3727149.jpg") + ")",
          backgroundAttachment:"fixed"
        }}        
        className="section filter page-header content-center">
        <div className="title-brand">
        <Container>
        <h1 className="presentation-title">Vision</h1>
        <h2 className="presentation-subtitle text-center">
        Bringing Behavioral Change
      </h2>
        </Container>
        </div>
        </div>

        <div>
       
        <h1 className="presentation-title text-center" style={{backgroundColor: "#ee9617",
          backgroundImage: "linear-gradient(315deg, #ee9617 0%, #fe5858 74%)", textDecoration:"underline"
          }}>NEWS</h1>
         
        <br/><br/>
        <CardColumns>
        <Card style={{width: '20rem'}}>
    <CardImg top src={require("assets/img/Media/Indian Graffiti.png")} alt="..." />
    <CardBody>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content</CardText>
    </CardBody>
</Card>
<Card  style={{width: '20rem'}}>
    <CardImg top src={require("assets/img/Media/Newz Hook.png")} alt="..." />
    <CardBody>
        <CardText>Love Actually.me is a new venture that aims to change that. This two-month-old venture is the brainchild of three people, Tanushree Sharma, Rajneesh Sharma and Krishna Parulekar.</CardText>
        <CardLink href="https://newzhook.com/story/20410/">See more</CardLink>
    </CardBody>
</Card>
<Card style={{width: '20rem'}}>
    <CardImg top src={require("assets/img/Media/socio-story-blue.png")} alt="..." />
    <CardBody>
        <CardText> Tanushree, said, “One of the main issues is lack of communication and preconceived notions about PWDs.</CardText>
   <CardLink href="https://sociostory.org/impact-stories/a-platform-for-people-with-disabilities-to-be-out-and-about">see more</CardLink>
        </CardBody>
</Card>
<Card style={{width: '20rem'}}>
    <CardImg top src={require("assets/img/Media/Startocure.webp")} alt="..." />
    <CardBody>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content</CardText>
    </CardBody>
</Card>
<Card style={{width: '20rem'}}>
    <CardImg top src={require("assets/img/Media/YourStory.png")} alt="..." />
    <CardBody>
        <CardText>LoveActuallyMe पीडबल्यूडी समुदाय के लिए अब एक खास ऐप लाने की तैयारी में है,
        </CardText>
        <CardLink href="https://yourstory.com/hindi/loveactuallyme-pwd-community-matchmaking-app">see more</CardLink>
    </CardBody>
</Card>
</CardColumns>
        </div>
      </div>
     
    </>
  );
}

export default LandingPage;

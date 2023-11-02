import React from 'react'
import LayoutBasic from '../../Common/LayoutBasic';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./HomePage.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
const HomePage = () => {
  return (
    <LayoutBasic>

      <div className="Home_layout">

        <div className="Home_Banner">

          <h1>ETIHAD STADIUM</h1>
        </div>
        <Container>

          <Row style={{ marginTop: '-30px', zIndex: '33', position: 'relative' }}>

            <Col >
              <div className="Home_Intro_div Home_intro-first">
                <h2 id="Home_intro-first-title">
                  ETIHAD STADIUM
                </h2>
                <p id="Home_intro-first-text">
                  Etihad Campus, Manchester M11 3FF</p>
                <p><a href="" id="Home_intro-first-link">View on Google Maps</a></p>
              </div>
            </Col >
            <Col >
              <div className="Home_Intro_div">
                <h2>
                  <a href="" className='Home_router_link'>
                  ETIHAD STADIUM DEVELOPMENT
                  <ArrowForwardIcon />
                  </a>
                  
                </h2>
                <p>
                  Everything you need to know when visiting the Etihad Stadium this season.</p>
              </div>
            </Col>
            <Col >
              <div className="Home_Intro_div">
                <h2>
                <a href="" className='Home_router_link'>
                  TICKETING AND HOSPITALITY
                  <ArrowForwardIcon />
                  </a>
                </h2>
                <p>
                  Our guide on how to purchase Men’s, Women’s, EDS and Academy tickets.</p>
              </div>
            </Col>
            <Col >
              <div className="Home_Intro_div">
                <h2>
                <a href="" className='Home_router_link'>
                  MATCHDAYS AT THE ETIHAD STADIUM
                  <ArrowForwardIcon />
                  </a>
                </h2>
                <p>
                  Everything from where to meet, to where to eat.</p>
              </div>
            </Col>
          </Row>



          <Row style={{ padding: '40px 0px 40px 0px' }}>
            <Col>
              <div className="Home_Tour_div">
                <img src="https://www.mancity.com/meta/media/dj3b40sk/stadium-tours-immersive-experience.jpg?width=88&height=88&mode=crop" alt="" />
                <h4 >
                <a href="" className='Home_router_link'>
                  Stadium Tours
                  <ArrowForwardIcon />
                  </a>
                </h4>
              </div>
            </Col>

            <Col>
              <div className="Home_Tour_div">
                <img src="https://www.mancity.com/meta/media/3yybagfs/story-mm2_1670-002.jpg?width=88&height=88&mode=crop" alt="" />
                <h4>
                <a href="" className='Home_router_link'>
                  Citystore Info
                  <ArrowForwardIcon />
                  </a>
                </h4>
              </div>
            </Col>
            <Col>
              <div className="Home_Tour_div">
                
                <img src="https://www.mancity.com/meta/media/ruij5fvj/etihad-stadium-view-sunset.jpg?width=88&height=88&mode=crop" alt="" />
                <h4>
                <a href="" className='Home_router_link'>Accessibility
                  <ArrowForwardIcon />
                  </a>
                </h4>
              </div>
            </Col>

          </Row>
          <Row>
            <Col>
              <div className='line'></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 style={{ fontWeight: 'bolder', fontSize: '40px', margin: '30px 0' }}>
                VENUE HIRE
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={9}>
              <Row style={{ height: '100%' }}>
                <Col xs={4} style={{ paddingRight: '0', height: '100%' }}>
                  <div className="Home_Content_div" style={{boxShadow:'2px 2px 10px #001838'}}>
                    <h2>
                      ETIHAD STADIUM
                    </h2>
                    <p style={{ color: 'black' }}>
                      The Etihad Stadium offers 14 high quality and unique event spaces along with 66 executive boxes, ranging from the intimate to the incredibly spacious.</p>
                  </div>
                </Col>
                <Col style={{ paddingLeft: '0' }}>
                  <img style={{ height: '100%', width: '100%',boxShadow:'2px 2px 10px #001838' }} src="https://www.mancity.com/meta/media/lkqhopgb/etihad-opening.jpg?width=500" alt="" />
                </Col>
              </Row>
            </Col>

            <Col xs={3}>
              <div className="Home_Content_div">
                <h2>
                <a href="" className='Home_router_link'>
                  CITY FOOTBALL ACADEMY VENUE HIRE
                  <ArrowForwardIcon />
                  </a>
                </h2>
                <p>
                  These state-of-the-art resources and world-class facilities are now available for you to host the perfect team-building sessions, away days, corporate training and networking events.</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 style={{ fontWeight: 'bolder', fontSize: '40px', margin: '30px 0' }}>
                CITY FOOTBALL ACADEMY

              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={9} >
              <Row style={{ height: '100%', }}>
                <Col xs={4} style={{ paddingRight: '0', height: '100%' }}>
                  <div className="Home_Content_div" style={{boxShadow:'2px 2px 10px #001838'}} >
                    <h2>
                      JOIE STADIUM
                    </h2>
                    <p style={{ color: 'black' }}>
                      Etihad Campus, North Gate, 400 Ashton New Road Manchester M11 4TQ</p>
                  </div>
                </Col>
                <Col style={{ paddingLeft: '0' }}>
                  <img  style={{ objectFit: 'cover', width: '100%', height: '300px', boxShadow:'3px 3px 10px #001838'}} src="https://www.mancity.com/meta/media/010bbl0r/academystadium.jpg?width=500" alt="" />
                </Col>
              </Row>
            </Col>

            <Col xs={3}>
              <div className="Home_Content_div">
                <h2>
                <a href="" className='Home_router_link'>
                  VISITING THE JOIE STADIUM
                  <ArrowForwardIcon />
                  </a>
                </h2>
                <p>
                  Our handy guide on how to get to the CFA and Joie Stadium by car and public transport.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 style={{ fontWeight: 'bolder', fontSize: '25px', margin: '30px 0' }}>
                CONTACT US
              </h1>
            </Col>
          </Row>
          <Row style={{borderTop:'1px #dde6ed solid',marginBottom:'20px'}}>
            <Col xs={4} style={{ borderRight: '1px #dde6ed solid' }}>
              <h4 style={{ fontWeight: 'bolder', fontSize: '20px', margin: '30px 0' }}>
                Fan Support
              </h4>
              <p className='Home_Contact_link'>
                <a href="tel:+44 (0)161 444 1894 ">
                  <LocalPhoneIcon />
                  +44 (0)161 444 1894 </a>
              </p>
              <p className='Home_Contact_link'>
                <a href="mailto:mancity@mancity.com">
                  <EmailIcon />
                  mancity@mancity.com</a>
              </p>
            </Col>
            <Col xs={8}>
              <h4 style={{ fontWeight: 'bolder', fontSize: '20px', margin: '30px 0' }}>
                More information
              </h4 >
              <p>
                We're here to help, our contact page has more details
              </p>
              <a href="" className='Home_Contact_link'>
                <p>
                  CONTACT US
                  <ArrowForwardIcon />
                </p>
              </a>
            </Col>
          </Row>
        </Container>

      </div>

    </LayoutBasic>
  )
}

export default HomePage

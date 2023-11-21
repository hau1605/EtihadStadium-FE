import React from 'react'
import LayoutBasic from '../../Common/LayoutBasic';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TourPage.css'
import Accordion from 'react-bootstrap/Accordion';
const TourPage = () => {
    return (
        <LayoutBasic>
            <div style={{ backgroundColor: '#f3f6f9', paddingBottom: '10px' }}>
                <Container>
                    <Row>
                        <Col>
                            <iframe width="100%" height='500px' src="https://www.youtube.com/embed/EPwDmS0qj40?si=U8jHfqwF6JjrnRWG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='Development_top_div' >
                                <h3 style={{ fontWeight: 'bold' }}>STADIUM MAP</h3>
                                <h5 style={{ textTransform: 'uppercase' }}>Our new site map showing the facilities at the Etihad Stadium to help you navigate your way on a matchday</h5>
                            </div>
                        </Col>

                        <Col>
                            <div className='Development_top_div' >
                                <h3 style={{ fontWeight: 'bold' }}>
                                    Changes to the Campus</h3>
                                <h5 style={{ textTransform: 'uppercase' }}>
                                    Find out more about Food & Beverage, Entertainment and our Retail Stores</h5>
                            </div>
                        </Col>

                        <Col>
                            <div className='Development_top_div' >
                                <h3 style={{ fontWeight: 'bold' }}>
                                    North Stand Entrances</h3>
                                <h5 style={{ textTransform: 'uppercase' }}>
                                    Information for fans who sit in the North Stand impacted by Entrance Changes into the stadium</h5>
                            </div>
                        </Col>

                        <Col>
                            <div className='Development_top_div' >
                                <h3 style={{ fontWeight: 'bold' }}>
                                    Help Centre</h3>
                                <h5 style={{ textTransform: 'uppercase' }}>
                                    Visit our help centre for everything you need to know about coming to the match</h5>
                            </div>

                        </Col>

                    </Row>
                    <Row>
                        <Col><div style={{
                            content: ''
                            , height: '1px', width: '100%', backgroundColor: '#dde6ed',
                            marginBottom: '50px'
                        }}>

                        </div></Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <h1 style={{ fontWeight: 'bolder' }}>ETIHAD STADIUM DEVELOPMENT – EVERYTHING YOU NEED TO KNOW</h1>
                                <br />
                                <p style={{ fontSize: '18px' }}>
                                    Over the next three years we will be developing a best-in-class fan experience and year-round entertainment and leisure destination at the Etihad Stadium.
                                    <br />
                                    <br />
                                    Our plans include several connected all-weather facilities, fully integrated into the stadium, centred around an expanded North Stand with one larger, single upper tier above the existing lower tier, increasing capacity to over 60,000.
                                    <br />
                                    <br />

                                    A covered City Square fan zone, with capacity for 3,000 people and a wide variety of food and drink outlets, a new club shop, museum, workspace and a 400-bed hotel will also be constructed.
                                    <br />
                                    <br />

                                    Although we will be working hard to minimise disruption on matchday, there will be some changes to the way the Etihad Stadium and the wider Etihad Campus operates during the construction period.
                                    <br />
                                    <br />

                                    This page will be regularly updated with everything you need to know when visiting the Etihad Stadium this season.
                                </p>
                                <img style={{ width: '100%' }} src="https://www.mancity.com/meta/media/ob4lmsd1/etihad-stadium-map.png" alt="" />
                            </div>
                            <br /><br />


                        </Col>
                    </Row>
                    <Row>
                        <Col md='8'>
                            <div>
                                <h1 style={{ fontWeight: 'bolder' }}>ARRIVING AT THE CAMPUS</h1>
                                <br />
                                <h3 style={{ fontWeight: 'bolder' }}>METROLINK</h3>
                                <br />
                                <p style={{ fontSize: '18px' }}>
                                    The Metrolink Service will be running as normal this season. The queue system after the game will also run as normal, and whilst the area will look slightly different, it will be fully staffed to help you get to and from the match as quickly and safely as possible.
                                    <br />
                                    <br />
                                    Please note, as per usual, Holt Town and Velopark will be closed for approximately 1 hour post-match.
                                </p>
                                <br />
                                <div style={{
                                    content: ''
                                    , height: '1px', width: '100%', backgroundColor: '#6caddf'
                                }}>
                                </div>
                                <br />

                                <h3 style={{ fontWeight: 'bolder' }}>PARKING</h3>
                                <br />

                                <p style={{ fontSize: '18px' }}>
                                    There will be reduced capacity on the Orange Car Park therefore hospitality & disabled fans who previously used this space will be required to book on a match-by-match basis going forward. The operation to the Blue & Green Car Park will remain the same and will continue to be booked on a match-by-match basis. You will still have access to walk from the Blue Car Park across Joe Mercer way to the stadium.
                                </p>
                                <br />
                                <div style={{
                                    content: ''
                                    , height: '1px', width: '100%', backgroundColor: '#6caddf'
                                }}>
                                </div>
                                <br />
                                <h3 style={{ fontWeight: 'bolder' }}>ACCESSIBLE BUGGY SERVICE</h3>
                                <br />
                                <Accordion style={{ color: '#001838' }}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header >
                                            <h5 style={{ color: '#001838', margin: '0' }}>Will the buggy service be in operation?</h5>

                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p style={{ fontSize: '16px', margin: '0' }}>
                                                Yes, we will continue to offer the buggy service on matchdays. The buggy will depart from the bottom of Joe Mercer Way, inside the Blue Car Park. Once arriving at the top of Joe Mercer Way, you will disembark the buggy and walk the pedestrianised walkway to your stadium entrance.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header >
                                            <h5 style={{ color: '#001838', margin: '0' }}>
                                                Will the buggy service operate after the match?</h5>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p style={{ fontSize: '16px', margin: '0' }}>
                                                A limited service will operate from the top of Joe Mercer Way to the Blue Car Park from 75 minutes into the game until just before the final whistle. The service will then cease until it is safe to resume, subject to safety and security considerations.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header >
                                            <h5 style={{ color: '#001838', margin: '0' }}>
                                                Where is the buggy service pick up point?</h5>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p style={{ fontSize: '16px', margin: '0' }}>
                                                Will the buggy service operate after the match?                                </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                        </Col>
                        <Col md='4'>
                            <div style={{ backgroundColor: '#001838', padding: '30px' }}>
                                <h3 style={{ fontWeight: 'bolder', color: '#e6ff00' }}>NEW WALKING ROUTE</h3>
                                <br />
                                <p style={{ fontSize: '18px', color: 'white' }}>
                                    As a result of the construction at the North end of the Stadium there is a new walking route, approximately 400 metres long around the compound. Fans entering the Stadium from Joe Mercer way are advised the walk to the North East area of the Stadium is around 250 metres and around 150 metres to the North West area.
                                    <br /><br />
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <br />
                            <br />
                            <div style={{
                                content: ''
                                , height: '1px', width: '100%', backgroundColor: '#001838'
                            }}>
                            </div>
                            <br /><br />
                            <h1 style={{ fontWeight: 'bolder' }}>CHANGES TO THE CAMPUS</h1>
                            <br /><br />
                            <Accordion style={{ color: '#001838' }}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header >
                                        <h5 style={{ color: '#001838', margin: '0' }}>
                                            Can I walk around the stadium?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p style={{ fontSize: '16px', margin: '0' }}>
                                            You will be able to walk around the stadium as usual, however due to the construction compound at the North Stand, you are advised to enter the campus on the side of the stadium where your turnstile is located                                            </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header >
                                        <h5 style={{ color: '#001838', margin: '0' }}>

                                            Will there be toilet facilities outside the stadium?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p style={{ fontSize: '16px', margin: '0' }}>
                                            Toilet facilities will be available opposite C tower. There will be no impact to the toilets inside the stadium.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header >
                                        <h5 style={{ color: '#001838', margin: '0' }}>

                                            Is City Square open?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p style={{ fontSize: '16px', margin: '0' }}>
                                            City Square and the stage will be closed during the 23/24 season.
                                            <br /><br />
                                            Fans are therefore advised to go to the Blue Carpet by West Reception where there will be enhanced pre and post-match activation, or visit the other activation zones around the Stadium. Follow @citysquare and @mancityhelp for useful information on matchday                                            </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header >
                                        <h5 style={{ color: '#001838', margin: '0' }}>

                                            Is Summerbee Bar still open?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p style={{ fontSize: '16px', margin: '0' }}>
                                            Fans can still purchase drinks at the relocated Summerbee Bar which is now outside the East Stand.
                                            <br /><br />
                                            As a result of The Summerbee Bar’s relocation, the licensed area where fans can drink alcohol on the Campus has been expanded to cover a large area of the East Stand of the Stadium.
                                            <br /><br />
                                            The bar will open 2.5 hrs before kick-off and close 1 hr after the final whistle.                                 </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <br /><br />
                            <div style={{
                                content: ''
                                , height: '1px', width: '100%', backgroundColor: '#3bd6ff'
                            }}>
                            </div>
                            <br /><br />
                            <Row>
                                <Col >
                                    <div className='Development_feature_div' style={{ backgroundColor: '#001838', padding: '30px' }}>
                                        <h4 style={{ fontWeight: 'bolder', color: '#e6ff00' }}>FOOD & BEVERAGE
                                        </h4>
                                        <br />
                                        <p style={{ fontSize: '16px', color: 'white' }}>
                                            There will be additional food outlets on the East & West side of the Stadium offering a range of hot & cold food and drinks.
                                            <br /><br />
                                            The Summerbee Bar has also been relocated to the East Stand open 2.5 hrs before the match and 1hr after the final whistle.                                     <br /><br />
                                        </p>
                                    </div>
                                </Col>
                                <Col >
                                    <div className='Development_feature_div' style={{ backgroundColor: '#001838', padding: '30px' }}>
                                        <h3 style={{ fontWeight: 'bolder', color: '#e6ff00' }}>ENTERTAINMENT</h3>
                                        <br />
                                        <p style={{ fontSize: '16px', color: 'white' }}>
                                            West Reception entertainment will start 2.5hrs before kick-off including our Player Arrival show, guest interviews, DJs, giveaways and much more.
                                            <br /><br />
                                            Outside the East Stand there will be food units, a bar and a retail pop-up.
                                            <br /><br />
                                            Pre-match entertainment inside the stadium will take place from 2hrs before kick-off.                                    <br /><br />
                                        </p>
                                    </div>
                                </Col>
                                <Col >
                                    <div className='Development_feature_div' style={{ backgroundColor: '#001838', padding: '30px' }}>
                                        <h3 style={{ fontWeight: 'bolder', color: '#e6ff00' }}>CITY STORE</h3>
                                        <br />
                                        <p style={{ fontSize: '16px', color: 'white' }}>
                                            The new City Store is located by Gate 11, outside the West Stand within the Yellow Car Park.
                                            <br /><br />
                                            There are also retail concessions outside the East & West stands on a matchday.                                    <br /><br />
                                        </p>
                                    </div>
                                </Col>
                                <Col >
                                    <div className='Development_feature_div' style={{ backgroundColor: '#001838', padding: '30px' }}>
                                        <h3 style={{ fontWeight: 'bolder', color: '#e6ff00' }}>FAN SUPPORT OFFICES
                                        </h3>
                                        <br />
                                        <p style={{ fontSize: '16px', color: 'white' }}>
                                            There are two Fan Support Offices. One located on the West Stand of the stadium opposite Tower R and one on the East Stand opposite Tower J.
                                            <br /><br />
                                            These will be open on Matchday from 4 hrs before kick-off until 15 minutes after.
                                            <br /><br />
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <br /><br />
                            <img src="https://www.mancity.com/meta/media/qjldnt2h/tf706429.png?width=1024" style={{ width: '100%' }} alt="" />
                            <br /><br /><br />
                            <div style={{
                                content: ''
                                , height: '1px', width: '100%', backgroundColor: '#3bd6ff'
                            }}>
                            </div>
                            <br /><br />

                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <h1 style={{ fontWeight: 'bolder' }}>NORTH STAND ENTRANCE CHANGES</h1>
                            <br />
                            <p style={{ fontSize: '18px' }}>
                                As part our development works, a construction compound has been created at the North end of the stadium. As a result, entrances A and Z can no longer be accessed. Entrances B & Y remain open but will be operating in a new format. If you currently access the stadium via any of these entrances, please see the below guidance on how to enter the Stadium.  If you are impacted by this, you will be communicated to directly by the club.
                            </p>
                            <ul style={{ padding: '0' }}>
                                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                    <u>
                                        North Stand Level 1
                                    </u>
                                </p>
                                <li style={{ marginLeft: '30px' }}>
                                    <p style={{ fontSize: '18px' }}>
                                        Fans who use <b>entrances B and Y</b> are advised entry will be via handheld scanners managed by our stewarding team
                                    </p>
                                </li>
                            </ul>
                            <ul style={{ padding: '0' }}>
                                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                    <u>
                                    North Stand Level 2
                                    </u>
                                </p>
                                <li style={{ marginLeft: '30px' }}>
                                    <p style={{ fontSize: '18px' }}>
                                    All fans who previously used <u>entrance A</u> will now enter through entrance C. Entrance C is a turret, meaning  fans in Level 2 will be required to walk up the spiral to North Stand Level 2 instead of taking the stairs.
                                    </p>
                                </li>
                                <li style={{ marginLeft: '30px' }}>
                                    <p style={{ fontSize: '18px' }}>
                                    All fans who previously used <u>entrance Z</u> will now enter through entrance X. Entrance X is a turret, meaning  fans in Level 2 will be required to walk up the spiral to North Stand Level 2 instead of taking the stairs.                                    </p>
                                </li>
                            </ul>
                            <p style={{fontSize:'18px'}}>To assist the flow of additional fans coming through entrances C and X, extra turnstiles have been added. </p>
                            <br />
                            <img style={{ width: '100%' }} src="https://www.mancity.com/meta/media/ja5pbbrr/microsoftteams-image-36.png?%20alt=" alt="" />
                            <br /> <br />
                        </Col>
                    </Row>
                </Container>
            </div>
        </LayoutBasic>
    )
}

export default TourPage
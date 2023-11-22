import React from 'react'
import LayoutBasic from '../../Common/LayoutBasic';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TourPage.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Accordion from 'react-bootstrap/Accordion';

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="custom-prev-arrow" onClick={onClick}>
            <ArrowBackIcon style={{ color: 'white', fontSize: '26px' }} />

        </button>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="custom-next-arrow" onClick={onClick}>
            <ArrowForwardIcon style={{ color: 'white', fontSize: '26px' }} />
        </button>
    );
};
const TourPage = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };

    const today = new Date();

    // Lấy giá trị ngày hiện tại dưới định dạng YYYY-MM-DD
    const formattedToday = today.toISOString().split('T')[0];

    return (
        <LayoutBasic>
            <div className="Home_layout">

                <div className="Home_Banner">

                    <h1 style={{ fontSize: '32px' }}>MANCHESTER CITY STADIUM TOURS</h1>
                </div>
                <Container>

                    <Row style={{ marginTop: '-30px', zIndex: '33', position: 'relative', backgroundColor: '#001838', padding: '20px 30px 40px' }}>

                        <Col>
                            <div>
                                <h1 style={{ color: '#e6ff00' }}>Find a Tour</h1>
                                <form action="" className='Tour_form'>
                                    <Row>
                                        <Col>
                                            <h6 style={{ color: 'white' }}>Number of tickets</h6>
                                            <select class="custom-select" name="" id="" style={{ width: '100%', padding: '10px', backgroundColor: '#001838', color: 'white', border: '1px solid white' }}>
                                                <option value="1">1 ticket</option>
                                                <option value="2">2 tickets</option>
                                                <option value="3">3 tickets</option>
                                                <option value="4">4 tickets</option>
                                                <option value="5">5 tickets</option>
                                                <option value="6">6 tickets</option>
                                                <option value="7">7 tickets</option>
                                                <option value="8">8 tickets</option>
                                                <option value="9">9 tickets</option>
                                                <option value="10">10 tickets</option>
                                            </select>
                                        </Col>
                                        <Col>
                                            <h6 style={{ color: 'white' }}>Date</h6>
                                            <input type="date" min={formattedToday} style={{ width: '100%', padding: '10px', backgroundColor: '#001838', color: 'white', border: '1px solid white' }} />
                                        </Col>
                                        <Col style={{ display: 'flex' }}>
                                            <button style={{
                                                display: 'flex', fontWeight: 'bold', textAlign: 'left', alignSelf: 'end', padding: '10px 10px', justifyContent: 'space-between',
                                                backgroundColor: '#e6ff00', color: '#001838', width: '100%', border: 'none'
                                            }}>SEARCH <ArrowForwardIosIcon />   </button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ margin: '30px 80px' }}>
                        <Col>
                            <iframe width="100%" height="450" src="https://www.youtube.com/embed/eTY7oKHcIUM?si=UeAqm_dxqMAYXEzC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 style={{ fontWeight: 'bold', marginBottom: '50px' }}>CHOOSE YOUR TOUR</h1>

                            <div className="Tour_Choose_div">
                                <img src="https://www.mancity.com/meta/media/2einxwgx/manchester_city_sact_shoot_28_06_2023_11132.jpg?width=406" alt="" />
                                <div>
                                    <h4 style={{ textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '25px' }}>
                                        The Manchester City Stadium Tour
                                    </h4>
                                    <p style={{ fontSize: '12px', color: '#69738c', margin: '0' }}>FROM</p>
                                    <h4>£25 Per Adult (Off-Peak)</h4>
                                    <ul style={{ padding: '0' }}>
                                        <li style={{ marginLeft: '20px' }}>
                                            <p style={{ fontSize: '13px', margin: '0px' }}>
                                                Field questions with a virtual Pep Guardiola in the Press Conference room                                    </p>
                                        </li>
                                        <li style={{ marginLeft: '20px' }}>
                                            <p style={{ fontSize: '13px', margin: '0px' }}>
                                                Walk down the players' tunnel and go pitch-side to get a Pep's-eye view of the stadium from the dug-outs
                                            </p>                                </li>
                                        <li style={{ marginLeft: '20px' }}>
                                            <p style={{ fontSize: '13px', margin: '0px' }}>
                                                Accessible & VIP tours available
                                            </p>                                </li>


                                    </ul>
                                </div>
                            </div>
                            <div className="Tour_Choose_div">
                                <img src="https://www.mancity.com/meta/media/2einxwgx/manchester_city_sact_shoot_28_06_2023_11132.jpg?width=406" alt="" />
                                <div>
                                    <h4 style={{ textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '25px' }}>
                                        The Manchester City Stadium Tour
                                    </h4>
                                    <p style={{ fontSize: '12px', color: '#69738c', margin: '0' }}>FROM</p>
                                    <h4>£25 Per Adult (Off-Peak)</h4>
                                    <ul style={{ padding: '0' }}>
                                        <li style={{ marginLeft: '20px' }}>
                                            <p style={{ fontSize: '13px', margin: '0px' }}>
                                                Field questions with a virtual Pep Guardiola in the Press Conference room                                    </p>
                                        </li>
                                        <li style={{ marginLeft: '20px' }}>
                                            <p style={{ fontSize: '13px', margin: '0px' }}>
                                                Walk down the players' tunnel and go pitch-side to get a Pep's-eye view of the stadium from the dug-outs
                                            </p>                                </li>
                                        <li style={{ marginLeft: '20px' }}>
                                            <p style={{ fontSize: '13px', margin: '0px' }}>
                                                Accessible & VIP tours available
                                            </p>                                </li>


                                    </ul>
                                </div>
                            </div>
                            <div className="Tour_Choose_div">
                                <img src="https://www.mancity.com/meta/media/2einxwgx/manchester_city_sact_shoot_28_06_2023_11132.jpg?width=406" alt="" />
                                <div>
                                    <h4 style={{ textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '25px' }}>
                                        The Manchester City Stadium Tour
                                    </h4>
                                    <p style={{ fontSize: '12px', color: '#69738c', margin: '0' }}>FROM</p>
                                    <h4>£25 Per Adult (Off-Peak)</h4>
                                    <ul style={{ padding: '0' }}>
                                        <li style={{ marginLeft: '20px' }}>
                                            <p style={{ fontSize: '13px', margin: '0px' }}>
                                                Field questions with a virtual Pep Guardiola in the Press Conference room                                    </p>
                                        </li>
                                        <li style={{ marginLeft: '20px' }}>
                                            <p style={{ fontSize: '13px', margin: '0px' }}>
                                                Walk down the players' tunnel and go pitch-side to get a Pep's-eye view of the stadium from the dug-outs
                                            </p>                                </li>
                                        <li style={{ marginLeft: '20px' }}>
                                            <p style={{ fontSize: '13px', margin: '0px' }}>
                                                Accessible & VIP tours available
                                            </p>                                </li>


                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div style={{
                                content: ''
                                , height: '0.5px', width: '100%', backgroundColor: '#dde6ed', margin: '50px 0'
                            }}>
                            </div>
                            <h1 style={{ fontWeight: 'bold' }}>THE MOST IMMERSIVE TOUR IN THE PREMIER LEAGUE</h1>
                            <div className="slider-wrapper">
                                <Slider {...settings} style={{ cursor: 'pointer' }}>
                                    <div >
                                        <img style={{ margin: '10px 10px 0', width: '96%', boxShadow: '0 0 8px gray' }} src='https://www.mancity.com/meta/media/j4jilvmm/manchester_city_sact_shoot_28_06_2023_11695.jpg?width=640' alt="Image 1" />
                                    </div>
                                    <div >
                                        <img style={{ margin: '10px 10px 0', width: '96%', boxShadow: '0 0 8px gray' }} src='https://www.mancity.com/meta/media/4hoj5r1o/manchester_city_sact_shoot_28_06_2023_11950.jpg?width=640' alt="Image 2" />
                                    </div>
                                    <div >
                                        <img style={{ margin: '10px 10px 0', width: '96%', boxShadow: '0 0 8px gray' }} src='https://www.mancity.com/meta/media/b5cnknix/manchester_city_sact_shoot_28_06_2023_12055.jpg?width=640' alt="Image 3" />
                                    </div>
                                    <div >
                                        <img style={{ margin: '10px 10px 0', width: '96%', boxShadow: '0 0 8px gray' }} src='https://www.mancity.com/meta/media/qnrhwcje/manchester_city_sact_shoot_28_06_2023_12007.jpg?width=640' alt="Image 4" />
                                    </div>
                                    <div >
                                        <img style={{ margin: '10px 10px 0', width: '96%', boxShadow: '0 0 8px gray' }} src='https://www.mancity.com/meta/media/15mpbecj/manchester_city_sact_shoot_28_06_2023_11828.jpg?width=640' alt="Image 5" />
                                    </div><div >
                                        <img style={{ margin: '10px 10px 0', width: '96%', boxShadow: '0 0 8px gray' }} src='https://www.mancity.com/meta/media/2einxwgx/manchester_city_sact_shoot_28_06_2023_11132.jpg?width=640' alt="Image 4" />
                                    </div>
                                </Slider>
                                <div className='Tour_slide_background'></div>
                                <div style={{
                                    content: ''
                                    , height: '3px', width: '100%', backgroundColor: '#c2cad2', margin: '30px 0 10px'
                                }}>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>

                            <h1 style={{ fontWeight: 'bold', margin: '50px 0' }}>FAQS</h1>
                            <Accordion style={{ color: '#001838' }}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header >
                                        <h5 style={{ color: '#001838', margin: '0' }}>
                                            Is there somewhere we can eat when we visit for our Stadium and Club Tour?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p style={{ fontSize: '16px', margin: '0' }}>
                                            Yes, there is a café located at the entrance/exit of the tour. The Etihad Stadium is cashless so only card payments will be taken.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header >
                                        <h5 style={{ color: '#001838', margin: '0' }}>

                                        Where is the start point for the Stadium Tour?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p style={{ fontSize: '16px', margin: '0' }}>
                                        The start point is <b>M Gate</b>, Etihad Stadium.
<br /><br />
M Gate is based on the South side of the stadium, located near the South Stand Ticket Office. Guests who have pre-booked onto the Stadium Tour can head straight to the new start point at M Gate where you will be checked in. Those wanting to purchase a tour ticket can do so on the ground floor of the City Store.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header >
                                        <h5 style={{ color: '#001838', margin: '0' }}>

                                        Can I book a private Stadium Tour?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p style={{ fontSize: '16px', margin: '0' }}>
                                        We offer bespoke, private tours perfect for celebrating special occasions or seeing the Etihad Stadium like 
                                        never before. For more information, please contact <a href="mailto:tours@mancity.com" className='Tour_link'>tours@mancity.com</a>  or ring the Tours team on <a className='Tour_link' href="tel:+44(0)161 444 1894">+44(0)161 444 1894</a> (option 1, then option 3).                                          </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header >
                                        <h5 style={{ color: '#001838', margin: '0' }}>

                                        Is there a discount for large groups?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p style={{ fontSize: '16px', margin: '0' }}>
                                        We offer discounted rates for large groups of 10 or more. To discuss these or to make a booking please call the Tours team on <a className='Tour_link' href="tel:+44(0)161 444 1894">+44(0)161 444 1894</a> (option 1, then option 3).
                                             </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header >
                                        <h5 style={{ color: '#001838', margin: '0' }}>

                                        When and how do I pay for stadium tours?</h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p style={{ fontSize: '16px', margin: '0' }}>
                                        For payment, we can accept debit or credit cards on the telephone or via BACS transfer.  Please bear in mind that should your booking be made at short notice the BACS payment may not reach us in time for your tour.  We normally ask for payment 14 days in advance of your tour.
                                             </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>

            </div>
        </LayoutBasic>
    )
}

export default TourPage
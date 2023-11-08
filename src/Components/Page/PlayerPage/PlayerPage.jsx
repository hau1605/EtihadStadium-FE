import React from 'react'
import LayoutBasic from '../../Common/LayoutBasic';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PlayerPage.css'

const PlayerPage = () => {
    return (
        <LayoutBasic>
            <div style={{ backgroundColor: 'white', paddingBottom: '10px' }}>
                <Container >

                    <Row>
                        <Col>
                            <h1 style={{ color: '#6caddf', fontWeight: 'bolder', margin: '30px 0', fontSize: '50px' }}>
                                PLAYERS
                            </h1>
                            <div style={{
                                content: ''
                                , height: '1px', width: '100%', backgroundColor: '#6caddf',
                                boxShadow: '0 4px 8px black'
                            }}>

                            </div>
                            <h2 style={{ color: '#6caddf', fontWeight: 'bolder', margin: '30px 0', }}>
                                GOALKEEPERS

                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='3'>
                            <div className='Player_card' style={{ marginBottom: '40px', boxShadow: '5px 5px 18px gray', backgroundColor: '#93c3e7', position: 'relative', overflow: 'hidden' }}>
                                <h6 className='Player_card_number' style={{ position: 'absolute', top: '-30px', right: '-10px', fontSize: '90px', fontWeight: 'bolder' }}>33</h6>
                                <img style={{ objectFit: 'contain', width: '100%' }} src="https://www.mancity.com/meta/media/ejhjw1j4/scott-carson.png?width=376&quality=100" alt="" />
                                <img src="https://mediacdn.mancity.com/meta/media/kbujcobi/gb-eng.svg" alt=""
                                    style={{ position: 'absolute', bottom: '90px', left: '15px', width: '35px', borderRadius: '40px', boxShadow: '0px 2px 5px black' }} />
                                <h4 className='Player_card_name' >SCOTT CARSON</h4>
                            </div>
                        </Col>
                        <Col md='3'>
                            <div className='Player_card' style={{ marginBottom: '40px', boxShadow: '5px 5px 18px gray', backgroundColor: '#93c3e7', position: 'relative', overflow: 'hidden' }}>
                                <h6 className='Player_card_number' style={{ position: 'absolute', top: '-30px', right: '-10px', fontSize: '90px', fontWeight: 'bolder' }}>33</h6>
                                <img style={{ objectFit: 'contain', width: '100%' }} src="https://www.mancity.com/meta/media/ejhjw1j4/scott-carson.png?width=376&quality=100" alt="" />
                                <img src="https://mediacdn.mancity.com/meta/media/kbujcobi/gb-eng.svg" alt=""
                                    style={{ position: 'absolute', bottom: '90px', left: '15px', width: '35px', borderRadius: '40px', boxShadow: '0px 2px 5px black' }} />
                                <h4 className='Player_card_name' >SCOTT CARSON</h4>
                            </div>
                        </Col>

                        <Col md='3'>
                            <div className='Player_card' style={{ marginBottom: '40px', boxShadow: '5px 5px 18px gray', backgroundColor: '#93c3e7', position: 'relative', overflow: 'hidden' }}>
                                <h6 className='Player_card_number' style={{ position: 'absolute', top: '-30px', right: '-10px', fontSize: '90px', fontWeight: 'bolder' }}>33</h6>
                                <img style={{ objectFit: 'contain', width: '100%' }} src="https://www.mancity.com/meta/media/ejhjw1j4/scott-carson.png?width=376&quality=100" alt="" />
                                <img src="https://mediacdn.mancity.com/meta/media/kbujcobi/gb-eng.svg" alt=""
                                    style={{ position: 'absolute', bottom: '90px', left: '15px', width: '35px', borderRadius: '40px', boxShadow: '0px 2px 5px black' }} />
                                <h4 className='Player_card_name' >SCOTT CARSON</h4>
                            </div>
                        </Col><Col md='3'>
                            <div className='Player_card' style={{ marginBottom: '40px', boxShadow: '5px 5px 18px gray', backgroundColor: '#93c3e7', position: 'relative', overflow: 'hidden' }}>
                                <h6 className='Player_card_number' style={{ position: 'absolute', top: '-30px', right: '-10px', fontSize: '90px', fontWeight: 'bolder' }}>33</h6>
                                <img style={{ objectFit: 'contain', width: '100%' }} src="https://www.mancity.com/meta/media/ejhjw1j4/scott-carson.png?width=376&quality=100" alt="" />
                                <img src="https://mediacdn.mancity.com/meta/media/kbujcobi/gb-eng.svg" alt=""
                                    style={{ position: 'absolute', bottom: '90px', left: '15px', width: '35px', borderRadius: '40px', boxShadow: '0px 2px 5px black' }} />
                                <h4 className='Player_card_name' >SCOTT CARSON</h4>
                            </div>
                        </Col><Col md='3'>
                            <div className='Player_card' style={{ marginBottom: '40px', boxShadow: '5px 5px 18px gray', backgroundColor: '#93c3e7', position: 'relative', overflow: 'hidden' }}>
                                <h6 className='Player_card_number' style={{ position: 'absolute', top: '-30px', right: '-10px', fontSize: '90px', fontWeight: 'bolder' }}>33</h6>
                                <img style={{ objectFit: 'contain', width: '100%' }} src="https://www.mancity.com/meta/media/ejhjw1j4/scott-carson.png?width=376&quality=100" alt="" />
                                <img src="https://mediacdn.mancity.com/meta/media/kbujcobi/gb-eng.svg" alt=""
                                    style={{ position: 'absolute', bottom: '90px', left: '15px', width: '35px', borderRadius: '40px', boxShadow: '0px 2px 5px black' }} />
                                <h4 className='Player_card_name' >SCOTT CARSON</h4>
                            </div>
                        </Col>


                    </Row>
                    <Row>
                        <Col>
                            <h2 style={{ color: '#6caddf', fontWeight: 'bolder', margin: '30px 0', }}>
                                DEFENDERS
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='3'>
                            <div className='Player_card' style={{ marginBottom: '40px', boxShadow: '5px 5px 18px gray', backgroundColor: '#93c3e7', position: 'relative', overflow: 'hidden' }}>
                                <h6 className='Player_card_number' style={{ position: 'absolute', top: '-30px', right: '-10px', fontSize: '90px', fontWeight: 'bolder' }}>33</h6>
                                <img style={{ objectFit: 'contain', width: '100%' }} src="https://www.mancity.com/meta/media/ejhjw1j4/scott-carson.png?width=376&quality=100" alt="" />
                                <img src="https://mediacdn.mancity.com/meta/media/kbujcobi/gb-eng.svg" alt=""
                                    style={{ position: 'absolute', bottom: '90px', left: '15px', width: '35px', borderRadius: '40px', boxShadow: '0px 2px 5px black' }} />
                                <h4 className='Player_card_name' >SCOTT CARSON</h4>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h2 style={{ color: '#6caddf', fontWeight: 'bolder', margin: '30px 0', }}>
                                DEFENDERS
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='3'>
                            <div className='Player_card' style={{ marginBottom: '40px', boxShadow: '5px 5px 18px gray', backgroundColor: '#93c3e7', position: 'relative', overflow: 'hidden' }}>
                                <h6 className='Player_card_number' style={{ position: 'absolute', top: '-30px', right: '-10px', fontSize: '90px', fontWeight: 'bolder' }}>33</h6>
                                <img style={{ objectFit: 'contain', width: '100%' }} src="https://www.mancity.com/meta/media/ejhjw1j4/scott-carson.png?width=376&quality=100" alt="" />
                                <img src="https://mediacdn.mancity.com/meta/media/kbujcobi/gb-eng.svg" alt=""
                                    style={{ position: 'absolute', bottom: '90px', left: '15px', width: '35px', borderRadius: '40px', boxShadow: '0px 2px 5px black' }} />
                                <h4 className='Player_card_name' >SCOTT CARSON</h4>
                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <h2 style={{ color: '#6caddf', fontWeight: 'bolder', margin: '30px 0', }}>
                            MIDFIELDERS
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='3'>
                            <div className='Player_card' style={{ marginBottom: '40px', boxShadow: '5px 5px 18px gray', backgroundColor: '#93c3e7', position: 'relative', overflow: 'hidden' }}>
                                <h6 className='Player_card_number' style={{ position: 'absolute', top: '-30px', right: '-10px', fontSize: '90px', fontWeight: 'bolder' }}>33</h6>
                                <img style={{ objectFit: 'contain', width: '100%' }} src="https://www.mancity.com/meta/media/ejhjw1j4/scott-carson.png?width=376&quality=100" alt="" />
                                <img src="https://mediacdn.mancity.com/meta/media/kbujcobi/gb-eng.svg" alt=""
                                    style={{ position: 'absolute', bottom: '90px', left: '15px', width: '35px', borderRadius: '40px', boxShadow: '0px 2px 5px black' }} />
                                <h4 className='Player_card_name' >SCOTT CARSON</h4>
                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <h2 style={{ color: '#6caddf', fontWeight: 'bolder', margin: '30px 0', }}>
                            FORWARDS
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='3'>
                            <div className='Player_card' style={{ marginBottom: '40px', boxShadow: '5px 5px 18px gray', backgroundColor: '#93c3e7', position: 'relative', overflow: 'hidden' }}>
                                <h6 className='Player_card_number' style={{ position: 'absolute', top: '-30px', right: '-10px', fontSize: '90px', fontWeight: 'bolder' }}>33</h6>
                                <img style={{ objectFit: 'contain', width: '100%' }} src="https://www.mancity.com/meta/media/ejhjw1j4/scott-carson.png?width=376&quality=100" alt="" />
                                <img src="https://mediacdn.mancity.com/meta/media/kbujcobi/gb-eng.svg" alt=""
                                    style={{ position: 'absolute', bottom: '90px', left: '15px', width: '35px', borderRadius: '40px', boxShadow: '0px 2px 5px black' }} />
                                <h4 className='Player_card_name' >SCOTT CARSON</h4>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h2 style={{ color: '#6caddf', fontWeight: 'bolder', margin: '30px 0', }}>
                            MANAGERS
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='3'>
                            <div className='Player_card' style={{ marginBottom: '40px', boxShadow: '5px 5px 18px gray', backgroundColor: '#93c3e7', position: 'relative', overflow: 'hidden' }}>
                                <h6 className='Player_card_number' style={{ position: 'absolute', top: '-30px', right: '-10px', fontSize: '90px', fontWeight: 'bolder' }}>33</h6>
                                <img style={{ objectFit: 'contain', width: '100%' }} src="https://www.mancity.com/meta/media/ejhjw1j4/scott-carson.png?width=376&quality=100" alt="" />
                                <img src="https://mediacdn.mancity.com/meta/media/kbujcobi/gb-eng.svg" alt=""
                                    style={{ position: 'absolute', bottom: '90px', left: '15px', width: '35px', borderRadius: '40px', boxShadow: '0px 2px 5px black' }} />
                                <h4 className='Player_card_name' >SCOTT CARSON</h4>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </LayoutBasic>
    )
}

export default PlayerPage
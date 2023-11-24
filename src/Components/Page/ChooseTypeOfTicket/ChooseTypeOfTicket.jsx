import React from 'react'
import LayoutBasic from '../../Common/LayoutBasic';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ChooseTypeOfTicket.css'
import back from '../../../img/icons8-back-50.png'
import calendar from '../../../img/calendar.png'
import clock from '../../../img/clock.png'
import compass from '../../../img/compass.png'
import { useNavigate } from 'react-router-dom';
const ChooseTypeOfTicket = () => {
    const navigate = useNavigate();
    const chooseTime = () => {
        navigate('/ChooseTypeOfTicket');
    }
    return (
        <LayoutBasic>
            <main>
            <div className='container-fluid ticket-wrapper'>
                <div id='eventPage' className='non-seated'>
                    <div class="eventInfoSection infoSection">
                        <div class="eventDetails" tabindex="0">
                            <div class="name" role="heading" aria-level="1">The Manchester City Stadium Tour</div>
                            <div class="date info-section-item"><span id="day3"><img src={calendar} />Tue 21 Nov</span></div>
                            <div class="date info-section-item"><span id="kickoff"><img src={clock} />15:30</span></div>
                            <div class="location info-section-item"> <img src={compass} />Stadium Tours</div>
                        </div>
                    </div>
                    
                </div>
                <div className='container-fluid'>
                    <div className='content'>
                        <h3>Stadium Tour</h3>
                        <div className='content-item'>
                            <span className="priceType" aria-hidden="true">Adult</span>
                            <span className="price" data-labe="Price" aria-hidden="true">£25.00</span>
                            <div className='amount'>
                                <button className='plus-btn button'>+</button>
                                <span className='result'>1</span>
                                <button className='minus-btn button'>-</button>
                            </div>
                            <span class="total" data-labe="Total" aria-hidden="true">£25.00</span>
                        </div>
                        <div className='content-item'>
                            <span className="priceType" aria-hidden="true">Under 16</span>
                            <span className="price" data-labe="Price" aria-hidden="true">£15.00</span>
                            <div className='amount'>
                                <button className='plus-btn button'>+</button>
                                <span className='result'>1</span>
                                <button className='minus-btn button'>-</button>
                            </div>
                            <span class="total" data-labe="Total" aria-hidden="true">£25.00</span>
                        </div>
                        <div className='content-item'>
                            <span className="priceType" aria-hidden="true">Student</span>
                            <span className="price" data-labe="Price" aria-hidden="true">£17.00</span>
                            <div className='amount'>
                                <button className='plus-btn button'>+</button>
                                <span className='result'>1</span>
                                <button className='minus-btn button'>-</button>
                            </div>
                            <span class="total" data-labe="Total" aria-hidden="true">£25.00</span>
                        </div>
                        <div className='content-item'>
                            <span className="priceType" aria-hidden="true">Senior (65+)</span>
                            <span className="price" data-labe="Price" aria-hidden="true">£17.00</span>
                            <div className='amount'>
                                <button className='plus-btn button'>+</button>
                                <span className='result'>1</span>
                                <button className='minus-btn button'>-</button>
                            </div>
                            <span class="total" data-labe="Total" aria-hidden="true">£25.00</span>
                        </div>
                        <div className='content-item'>
                            <span className="priceType" aria-hidden="true">Under 5</span>
                            <span className="price" data-labe="Price" aria-hidden="true">£0.00</span>
                            <div className='amount'>
                                <button className='plus-btn button'>+</button>
                                <span className='result'>1</span>
                                <button className='minus-btn button'>-</button>
                            </div>
                            <span class="total" data-labe="Total" aria-hidden="true">£25.00</span>
                        </div>
                        <div className='summary'>
                        <p class="total-label">Total (1 seats):</p>
                        <p class="total">£25.00</p>
                        </div>
                    </div>
                    <div className='continue'>
                        <button className='button small_button_a proceed'>Continue</button>
                    </div>
                </div>
                </div>
            </main>
        </LayoutBasic>
    )
}

export default ChooseTypeOfTicket
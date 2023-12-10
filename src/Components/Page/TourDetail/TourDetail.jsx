import React from 'react'
import LayoutBasic from '../../Common/LayoutBasic';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TourDetail.css'
import back from '../../../img/icons8-back-50.png'
import { useNavigate } from 'react-router-dom';
const TourDetail = () => {
    const navigate = useNavigate();
    const chooseTime = () => {
        navigate('/ChooseTypeOfTicket');
    }
    return (
        <LayoutBasic>
            <main>
                <div className='ff-tours-timeslots__header'>
                    <div className='container'>
                        <h2 className="ff-tours-timeslots__info-title">The Manchester City Stadium Tour</h2>
                        <p className="ff-tours-timeslots__info-date">Sunday, 19 November 2023</p>
                    </div>
                </div>
                <form>
                    <div className='container'>
                        <div className='ff-tours-timeslots__info-cont'>
                            <h2 className="ff-tours-timeslots__info-title">Choose a Time Slot</h2>
                            <div className='ff-tours-timeslots__info-section'>
                                <div className='ff-tours-timeslots__info-item'>
                                    <div className="ff-tours-timeslots__info-item--label">Tour</div>
                                    <div>The Manchester City Stadium Tour</div>
                                </div>
                                <hr></hr>
                                <div className='ff-tours-timeslots__info-item'>
                                <div className="ff-tours-timeslots__info-item--label">Date</div>
                                <div className='ff-tours-timeslots__info-item--datepicker'>
                                    <div>Sunday, 19 November 2023</div>
                                    <div className='ff-tours-timeslots__datepicker-wrapper'>
                                        <div className='mc-datepicker js-datepicker'>
                                        <a href="/Tour" class="mc-datepicker__link js-datepicker-link">Change date</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className='container'>
                        <h4 class="ff-tours-timeslots__list">2 tour times available</h4>
                        <div className='ff-tours-timeslots__list'>
                            <button className='ff-tours-timeslots__slot' onClick={chooseTime}>
                                <b>3:00pm</b>
                                <span class="ff-tours-timeslots__slot-numbers">
                                20 tickets available
                                </span>
                            </button>
                            <button className='ff-tours-timeslots__slot' onClick={chooseTime}>
                                <b>9:00am</b>
                                <span class="ff-tours-timeslots__slot-numbers">
                                15 tickets available
                                </span>
                            </button>
                            <button className='ff-tours-timeslots__slot' onClick={chooseTime}>
                                <b>4:00pm</b>
                                <span class="ff-tours-timeslots__slot-numbers">
                                10 tickets available
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
                <div className='container'>
                    <a href="" className='mc-button mc-button--secondary mc-button--inline-button back-btn'>
                        <span> <img src={back} alt="" /> Back </span>
                    </a>
                </div>
            </main>
        </LayoutBasic>
    )
}

export default TourDetail
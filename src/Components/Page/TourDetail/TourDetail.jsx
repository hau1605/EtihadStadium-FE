import React, { useEffect, useState } from 'react'
import LayoutBasic from '../../Common/LayoutBasic';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TourDetail.css'
import TourDataService from '../../services/tours';
import back from '../../../img/icons8-back-50.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { formatDate } from './../business/date';
const TourDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {paramName, tourName, tourDate, tourPrice} =  location.state;
    const [tourDetailData, setTourDetailData] = useState([]);
    const [countTicket, setCountTicket] = useState(0);
    useEffect( () => {
        getTicketForTour(paramName);
    }, []);
    const chooseTime = (id, remainTicket, periodTimeOfTicket) => {
        navigate('/ChooseTypeOfTicket', {state: {
            tourParamName: paramName,
            ticketId: id,
            remainTicket:remainTicket,
            periodTimeOfTicket: periodTimeOfTicket,
            tourName: tourName,
            tourDate: tourDate,
            tourPrice: tourPrice,
        }});
    }
    const getTicketForTour = (paramName) => {
        TourDataService.getTourDetail(paramName)
        .then((res) => {
            setTourDetailData(res.data);
            setCountTicket(res.data.length);
        }).catch((err) => console.error(err));
    }

    return (
        <LayoutBasic>
            <main>
                <div className='ff-tours-timeslots__header'>
                    <div className='container'>
                        <h2 className="ff-tours-timeslots__info-title">{ tourName }</h2>
                        <p className="ff-tours-timeslots__info-date"> { formatDate(tourDate) }</p>
                    </div>
                </div>
                <form>
                    <div className='container'>
                        <div className='ff-tours-timeslots__info-cont'>
                            <h2 className="ff-tours-timeslots__info-title">Choose a Time Slot</h2>
                            <div className='ff-tours-timeslots__info-section'>
                                <div className='ff-tours-timeslots__info-item'>
                                    <div className="ff-tours-timeslots__info-item--label">Tour</div>
                                    <div>{ tourName }</div>
                                </div>
                                <hr></hr>
                                <div className='ff-tours-timeslots__info-item'>
                                <div className="ff-tours-timeslots__info-item--label">Date</div>
                                <div className='ff-tours-timeslots__info-item--datepicker'>
                                    <div>{ formatDate(tourDate) }</div>
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
                        <h4 class="ff-tours-timeslots__list">{countTicket} tour times available</h4>
                        <div className='ff-tours-timeslots__list'>
                            {tourDetailData.map((item) => (
                                <button className='ff-tours-timeslots__slot' onClick={() => chooseTime(item.id, item.remainTicket, String(item.startAt) + " - " + String(item.endAt))}>
                                <b>{item.startAt} - {item.endAt}</b>
                                <span class="ff-tours-timeslots__slot-numbers">
                                {item.remainTicket} tickets available
                                </span>
                            </button>
                            ))}
                        </div>
                    </div>
                </form>
                <div className='container'>
                    <a href="/Tour" className='mc-button mc-button--secondary mc-button--inline-button back-btn'>
                        <span> <img src={back} alt="" /> Back </span>
                    </a>
                </div>
            </main>
        </LayoutBasic>
    )
}

export default TourDetail
import React, { useState } from 'react'
import LayoutBasic from '../../Common/LayoutBasic';
import './ChooseTypeOfTicket.css'
import calendar from '../../../img/calendar.png'
import clock from '../../../img/clock.png'
import compass from '../../../img/compass.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { formatDate } from './../business/date';
const ChooseTypeOfTicket = () => {
    const location = useLocation();
    const { tourParamName, ticketId, remainTicket, periodTimeOfTicket, tourName, tourDate, tourPrice } = location.state;
    const [totalTicket, setTotalTicket] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const navigate = useNavigate();
    const Continue = () => {
        if (totalTicket > remainTicket) {
            alert('Quality of remains ticket is not enough!');
            return;
        }
        navigate('/Checkout', {state: {
            tourParamName: tourParamName,
            ticketId: ticketId,
            totalTicket: totalTicket,
            dataTicket: {
                adult: Number(document.getElementById('result-adult').innerText),
                under16: Number(document.getElementById('result-under-16').innerText),
                student: Number(document.getElementById('result-student').innerText),
                senior: Number(document.getElementById('result-senior').innerText),
                under5: Number(document.getElementById('result-under-5').innerText),
            },
            tourPrice: tourPrice
        }});
    }
    return (
        <LayoutBasic>
            <main>
            <div className='container-fluid ticket-wrapper'>
                <div id='eventPage' className='non-seated'>
                    <div class="eventInfoSection infoSection">
                        <div class="eventDetails" tabindex="0">
                            <div class="name" role="heading" aria-level="1">{ tourName }</div>
                            <div class="date info-section-item"><span id="day3"><img src={calendar} /> { formatDate(tourDate) }</span></div>
                            <div class="date info-section-item"><span id="kickoff"><img src={clock} />{ periodTimeOfTicket }</span></div>
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
                                <button className='plus-btn button' onClick={() => {
                                    document.getElementById('result-adult').innerText = Number(document.getElementById('result-adult').innerText) + 1;
                                    setTotalTicket(totalTicket + 1);
                                    setTotalAmount(totalAmount + 25);
                                    }}>+</button>
                                <span id='result-adult' className='result'>0</span>
                                <button className='minus-btn button' onClick={() => {
                                    if (Number(document.getElementById('result-adult').innerText) === 0) 
                                    {
                                        alert("Cannot enter a quantity less than 0");
                                        return;
                                    }
                                    document.getElementById('result-adult').innerText = Number(document.getElementById('result-adult').innerText) - 1;
                                    setTotalTicket(totalTicket - 1); 
                                    setTotalAmount(totalAmount - 25);
                                    }}>-</button>
                            </div>
                            {/* <span class="total" data-labe="Total" aria-hidden="true">£{25*Number(document.getElementById('result-adult').innerText)}.00</span> */}
                        </div>
                        <div className='content-item'>
                            <span className="priceType" aria-hidden="true">Under 16</span>
                            <span className="price" data-labe="Price" aria-hidden="true">£15.00</span>
                            <div className='amount'>
                            <button className='plus-btn button' onClick={() => {
                                    document.getElementById('result-under-16').innerText = Number(document.getElementById('result-under-16').innerText) + 1;
                                    setTotalTicket(totalTicket + 1);
                                    setTotalAmount(totalAmount + 15)
                                    }}>+</button>
                                <span id='result-under-16' className='result'>0</span>
                                <button className='minus-btn button' onClick={() => {
                                    if (Number(document.getElementById('result-under-16').innerText) === 0) 
                                    {
                                        alert("Cannot enter a quantity less than 0");
                                        return;
                                    }
                                    document.getElementById('result-under-16').innerText = Number(document.getElementById('result-under-16').innerText) - 1;
                                    setTotalTicket(totalTicket - 1); 
                                    setTotalAmount(totalAmount - 15);
                                    }}>-</button>
                            </div>
                            {/* <span class="total" data-labe="Total" aria-hidden="true">£{15*Number(document.getElementById('result-under-16').innerText)}.00</span> */}
                        </div>
                        <div className='content-item'>
                            <span className="priceType" aria-hidden="true">Student</span>
                            <span className="price" data-labe="Price" aria-hidden="true">£17.00</span>
                            <div className='amount'>
                            <button className='plus-btn button' onClick={() => {
                                    document.getElementById('result-student').innerText = Number(document.getElementById('result-student').innerText) + 1;
                                    setTotalTicket(totalTicket + 1);
                                    setTotalAmount(totalAmount + 17)
                                    }}>+</button>
                                <span id='result-student' className='result'>0</span>
                                <button className='minus-btn button' onClick={() => {
                                    if (Number(document.getElementById('result-student').innerText) === 0) 
                                    {
                                        alert("Cannot enter a quantity less than 0");
                                        return;
                                    }
                                    document.getElementById('result-student').innerText = Number(document.getElementById('result-student').innerText) - 1;
                                    setTotalTicket(totalTicket - 1); 
                                    setTotalAmount(totalAmount - 17);
                                    }}>-</button>
                            </div>
                            {/* <span class="total" data-labe="Total" aria-hidden="true">£{17*Number(document.getElementById('result-student').innerText)}.00</span> */}
                        </div>
                        <div className='content-item'>
                            <span className="priceType" aria-hidden="true">Senior (65+)</span>
                            <span className="price" data-labe="Price" aria-hidden="true">£17.00</span>
                            <div className='amount'>
                            <button className='plus-btn button' onClick={() => {
                                    document.getElementById('result-senior').innerText = Number(document.getElementById('result-senior').innerText) + 1;
                                    setTotalTicket(totalTicket + 1);
                                    setTotalAmount(totalAmount + 17)
                                    }}>+</button>
                                <span id='result-senior' className='result'>0</span>
                                <button className='minus-btn button' onClick={() => {
                                    if (Number(document.getElementById('result-senior').innerText) === 0)
                                    {
                                        alert("Cannot enter a quantity less than 0");
                                        return;
                                    }
                                    document.getElementById('result-senior').innerText = Number(document.getElementById('result-senior').innerText) - 1;
                                    setTotalTicket(totalTicket - 1); 
                                    setTotalAmount(totalAmount - 17);
                                    }}>-</button>
                            </div>
                            {/* <span class="total" data-labe="Total" aria-hidden="true">£{17*Number(document.getElementById('result-senior').innerText)}.00</span> */}
                        </div>
                        <div className='content-item'>
                            <span className="priceType" aria-hidden="true">Under 5</span>
                            <span className="price" data-labe="Price" aria-hidden="true">£0.00</span>
                            <div className='amount'>
                            <button className='plus-btn button' onClick={() => {
                                    document.getElementById('result-under-5').innerText = Number(document.getElementById('result-under-5').innerText) + 1;
                                    setTotalTicket(totalTicket + 1);
                                    setTotalAmount(totalAmount + 0)
                                    }}>+</button>
                                <span id='result-under-5' className='result'>0</span>
                                <button className='minus-btn button' onClick={() => {
                                    if (Number(document.getElementById('result-under-5').innerText) === 0) 
                                    {
                                        alert("Cannot enter a quantity less than 0");
                                        return;
                                    }
                                    document.getElementById('result-under-5').innerText = Number(document.getElementById('result-under-5').innerText) - 1;
                                    setTotalTicket(totalTicket - 1); 
                                    setTotalAmount(totalAmount - 0);
                                    }}>-</button>
                            </div>
                            {/* <span class="total" data-labe="Total" aria-hidden="true">£{0*Number(document.getElementById('result-under-5').innerText)}.00</span> */}
                        </div>
                        <div className='summary'>
                        <p class="total-label">Total ({totalTicket} seats):</p>
                        <p class="total">£{totalAmount}.00</p>
                        </div>
                    </div>
                    <div className='continue'>
                        <button className='button small_button_a proceed' onClick={Continue}>Continue</button>
                    </div>
                </div>
                </div>
            </main>
        </LayoutBasic>
    )
}

export default ChooseTypeOfTicket
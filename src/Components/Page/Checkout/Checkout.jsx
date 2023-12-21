import React from 'react'
import LayoutBasic from '../../Common/LayoutBasic';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Checkout.css'
import tick from '../../../img/tick.png'
import calendar from '../../../img/calendar.png'
import location from '../../../img/compass.png'
import edit from '../../../img/icons8-pencil-26.png'
import trash from '../../../img/trash.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { parseTicketPriceFerType, parseTicketTypeValue } from '../business/parseData';

const Checkout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const {dataTicket, ticketId, totalTicket, tourParamName, tourPrice} = location.state;
    const Continue = () => {
        navigate('/Checkout');
    }
    let data = dataTicket;
    const updateSelection = (selectionId, selectionValue) => {
        document.getElementById(selectionId).value = String(selectionValue); 
    }
    const updateTicketData = (updateData, previousData) => {
        switch (updateData) {
            case 'adult':
                data.adult = (data.adult + 1);
                break;
            case 'under_16':
                data.under16 = (data.under16 + 1);
                break;
            case 'student':
                data.student = (data.student + 1);
                break;
            case 'senior':
                data.senior = (data.senior + 1);
                break;
            case 'under_5':
                data.under5 = (data.under5 + 1);
                break;
        }
        data[previousData] = data[previousData] - 1;
        console.log(data);
    }
    const updateTotalPrice = () => {
        const totalPrice = data.adult*parseTicketPriceFerType('adult', tourPrice) + 
                        data.under16*parseTicketPriceFerType('under_16', tourPrice) +
                        data.student*parseTicketPriceFerType('student', tourPrice) +
                        data.senior*parseTicketPriceFerType('senior', tourPrice) +
                        data.under5*parseTicketPriceFerType('under_5', tourPrice);
        document.getElementById('total-price').innerText = '£' + String(totalPrice);
    }
    return (
        <LayoutBasic>
            <main>
                <div className='tunnelLocation container-fluid'>
                    <div className='container tunnelLocation-wrapper'>
                        <div className='step'>
                            <div className='stepIcon'><img src={tick}/></div>
                            <div className='stepName'>Select Items</div>
                        </div>
                        <hr />
                        <div className='step'>
                            <div className='stepIcon'>2</div>
                            <div className='stepName'>Review Order & Checkout</div>
                        </div>
                        <hr />
                        <div className='step'>
                            <div className='stepIcon'>3</div>
                            <div className='stepName'>Result</div>
                        </div>
                    </div>

                </div>
                <div className='main-content container-fluid'>
                    <div className="main-content-title">
                        <h3>Review your order</h3>
                        <div class="CountDownRemainingTimeTitle" aria-hidden="true">
                            <span class="idCountDown CountDownRemainingTimeValueRegular" aria-hidden="true">{" "}18:25</span>
                            <span>Your items will be held for {" "}</span>
                        </div>
                    </div>
                    <div className='main-content-ticket'>
                        <div className="title-ticket">
                            <span>Tickets</span>
                        </div>
                        <div className="ticket-info">
                            <h3>The Manchester City Stadium Tour</h3>
                            <div className="ticket-info-detail">
                                <span className="date-time"> <img src={calendar} /> 26/11/2023 11:45</span>
                                <span className="location"><img src={location} />Stadium Tours</span>
                            </div>
                        </div>
                        <div className="ticket-detail">
                            <h4 className='ticket-label'>Area Stadium Tour</h4>
                            { data.adult > 0 ? (
                                Array.from({length: data.adult}, (_, index) => (<div className="ticket">
                                    <span className="ticket-label">
                                        1 tickets
                                    </span>
                                    <select name="typeOfTicket" className='type-of-ticket' id={"ticket-adult-" + index} previousData = 'adult' onChange={(e) => {
                                        updateSelection(e.target.id, e.target.value);
                                        updateTicketData(e.target.value, e.target.getAttribute('previousData'));
                                        document.getElementById('ticket-label-adult-info-' + index).innerText = '£' + parseTicketPriceFerType(e.target.value, tourPrice);
                                        e.target.setAttribute('previousData', parseTicketTypeValue(e.target.value));
                                        updateTotalPrice();
                                        }}>
                                        <option value="adult" selected>Adult</option>
                                        <option value="under_16">Under 16</option>
                                        <option value="student">Student</option>
                                        <option value="senior">Senior 65+</option>
                                        <option value="under_5">Under 5</option>
                                    </select>
                                    <div className='owner'>
                                        <span className='ticket-label'>Owner</span>
                                        <span className='ticket-label-info'>Unknown</span>
                                    </div>
                                    <button className="edit-button">
                                        <img src={edit}/>
                                        <span className='button-name'>Edit owner</span>
                                    </button>
                                    <div className='to-pay-per-ticket'>
                                        <span className='ticket-label'>To Pay:</span>
                                        <span id={'ticket-label-adult-info-' + index} className='ticket-label-info'>£0.00</span>
                                    </div>
                                    <button className='trash'>
                                        <img src={trash}/>
                                    </button>
                                </div>))
                                ) : null
                            }
                            { data.under16 > 0 ? (
                                Array.from({length: data.under16}, (_, index) => (<div className="ticket">
                                    <span className="ticket-label">
                                        1 tickets
                                    </span>
                                    <select name="typeOfTicket" className='type-of-ticket' id={"ticket-under-16-" + index} previousData = 'under16' onChange={(e) => {
                                        updateSelection(e.target.id, e.target.value);
                                        updateTicketData(e.target.value, e.target.getAttribute('previousData'));
                                        document.getElementById('ticket-label-under16-info-' + index).innerText = '£' + parseTicketPriceFerType(e.target.value, tourPrice);
                                        e.target.setAttribute('previousData', parseTicketTypeValue(e.target.value));
                                        updateTotalPrice();
                                        }}>
                                        <option value="adult">Adult</option>
                                        <option value="under_16 selected">Under 16</option>
                                        <option value="student">Student</option>
                                        <option value="senior">Senior 65+</option>
                                        <option value="under_5">Under 5</option>
                                    </select>
                                    <div className='owner'>
                                        <span className='ticket-label'>Owner</span>
                                        <span className='ticket-label-info'>Unknown</span>
                                    </div>
                                    <button className="edit-button">
                                        <img src={edit}/>
                                        <span className='button-name'>Edit owner</span>
                                    </button>
                                    <div className='to-pay-per-ticket'>
                                        <span className='ticket-label'>To Pay:</span>
                                        <span id={'ticket-label-under16-info-' + index} className='ticket-label-info'>£0.00</span>
                                    </div>
                                    <button className='trash'>
                                        <img src={trash}/>
                                    </button>
                                </div>))
                                ) : null
                            }
                            { data.student > 0 ? (
                                Array.from({length: data.student}, (_, index) => (<div className="ticket">
                                    <span className="ticket-label">
                                        1 tickets
                                    </span>
                                    <select name="typeOfTicket" className='type-of-ticket' id={"ticket-student-" + index} previousData = 'student' onChange={(e) => {
                                        updateSelection(e.target.id, e.target.value);
                                        updateTicketData(e.target.value, e.target.getAttribute('previousData'));
                                        document.getElementById('ticket-label-student-info-' + index).innerText = '£' + parseTicketPriceFerType(e.target.value, tourPrice);
                                        e.target.setAttribute('previousData', parseTicketTypeValue(e.target.value));
                                        updateTotalPrice();
                                        }}>
                                        <option value="adult">Adult</option>
                                        <option value="under_16">Under 16</option>
                                        <option value="student" selected>Student</option>
                                        <option value="senior">Senior 65+</option>
                                        <option value="under_5">Under 5</option>
                                    </select>
                                    <div className='owner'>
                                        <span className='ticket-label'>Owner</span>
                                        <span className='ticket-label-info'>Unknown</span>
                                    </div>
                                    <button className="edit-button">
                                        <img src={edit}/>
                                        <span className='button-name'>Edit owner</span>
                                    </button>
                                    <div className='to-pay-per-ticket'>
                                        <span className='ticket-label'>To Pay:</span>
                                        <span id={'ticket-label-student-info-' + index} className='ticket-label-info'>£0.00</span>
                                    </div>
                                    <button className='trash'>
                                        <img src={trash}/>
                                    </button>
                                </div>))
                                ) : null
                            }
                            { data.senior > 0 ? (
                                Array.from({length: data.senior}, (_, index) => (<div className="ticket">
                                    <span className="ticket-label">
                                        1 tickets
                                    </span>
                                    <select name="typeOfTicket" className='type-of-ticket' id={"ticket-senior-" + index} previousData = 'senior' onChange={(e) => {
                                        updateSelection(e.target.id, e.target.value);
                                        updateTicketData(e.target.value, e.target.getAttribute('previousData'));
                                        document.getElementById('ticket-label-senior-info-' + index).innerText = '£' + parseTicketPriceFerType(e.target.value, tourPrice);
                                        e.target.setAttribute('previousData', parseTicketTypeValue(e.target.value));
                                        updateTotalPrice();
                                        }}>
                                        <option value="adult">Adult</option>
                                        <option value="under_16">Under 16</option>
                                        <option value="student">Student</option>
                                        <option value="senior" selected>Senior 65+</option>
                                        <option value="under_5">Under 5</option>
                                    </select>
                                    <div className='owner'>
                                        <span className='ticket-label'>Owner</span>
                                        <span className='ticket-label-info'>Unknown</span>
                                    </div>
                                    <button className="edit-button">
                                        <img src={edit}/>
                                        <span className='button-name'>Edit owner</span>
                                    </button>
                                    <div className='to-pay-per-ticket'>
                                        <span className='ticket-label'>To Pay:</span>
                                        <span id={'ticket-label-senior-info-' + index} className='ticket-label-info'>£0.00</span>
                                    </div>
                                    <button className='trash'>
                                        <img src={trash}/>
                                    </button>
                                </div>))
                                ) : null
                            }
                            { data.under5 > 0 ? (
                                Array.from({length: data.under5}, (_, index) => (<div className="ticket">
                                    <span className="ticket-label">
                                        1 tickets
                                    </span>
                                    <select name="typeOfTicket" className='type-of-ticket' id={"ticket-under-5-" + index} previousData = 'under5' onChange={(e) => {
                                        updateSelection(e.target.id, e.target.value);
                                        updateTicketData(e.target.value, e.target.getAttribute('previousData'));
                                        document.getElementById('ticket-label-under5-info-' + index).innerText = '£' + parseTicketPriceFerType(e.target.value, tourPrice);
                                        e.target.setAttribute('previousData', parseTicketTypeValue(e.target.value));
                                        updateTotalPrice();
                                        }}>
                                        <option value="adult">Adult</option>
                                        <option value="under_16">Under 16</option>
                                        <option value="student">Student</option>
                                        <option value="senior">Senior 65+</option>
                                        <option value="under_5 selected">Under 5</option>
                                    </select>
                                    <div className='owner'>
                                        <span className='ticket-label'>Owner</span>
                                        <span className='ticket-label-info'>Unknown</span>
                                    </div>
                                    <button className="edit-button">
                                        <img src={edit}/>
                                        <span className='button-name'>Edit owner</span>
                                    </button>
                                    <div className='to-pay-per-ticket'>
                                        <span className='ticket-label'>To Pay:</span>
                                        <span id={'ticket-label-under5-info-' + index} className='ticket-label-info'>£0.00</span>
                                    </div>
                                    <button className='trash'>
                                        <img src={trash}/>
                                    </button>
                                </div>))
                                ) : null
                            }
                        </div>
                        <div className='summary-checkout'>
                            <p class="total-label">Total (1 seats):</p>
                            <p class="total" id='total-price'>£0.00</p>
                        </div>
                        <div className='payment-method-container'>
                            <div className='payment-blank'>

                            </div>
                            <div className='payment-method-content'>
                                <h3>Payment method</h3>
                                <hr />
                                <div className="payment-methods">
                            <div class="the-payment-method">
                                <label>
                                    <input
                                        type="radio"
                                        readonly=""
                                        name="payment-method"
                                        value="momo"
                                        // onChange={(e) =>
                                        //     setMethod(e.target.value)
                                        // }
                                    />
                                    <img
                                        class="method-icon"
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-momo.svg"
                                        width="32"
                                        height="32"
                                        alt="icon"
                                    />
                                    <span>MOMO Payment</span>
                                </label>
                            </div>
                            <div class="the-payment-method">
                                <label>
                                    <input
                                        type="radio"
                                        readonly=""
                                        name="payment-method"
                                        value="vnpay"
                                        // onChange={(e) =>
                                        //     setMethod(e.target.value)
                                        // }
                                    />
                                    <img
                                        class="method-icon"
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-vnpay.png"
                                        width="32"
                                        height="32"
                                        alt="icon"
                                    />
                                    <span>VNPay Payment</span>
                                </label>
                            </div>
                            <div class="the-payment-method">
                                <label>
                                    <input
                                        type="radio"
                                        readonly=""
                                        name="payment-method"
                                        value="atm"
                                        // onChange={(e) => {
                                        //     setMethod(e.target.value);
                                        // }}
                                    />
                                    <img
                                        class="method-icon"
                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-atm.svg"
                                        width="32"
                                        height="32"
                                        alt="icon"
                                    />
                                    <span>
                                        Domestic ATM card/ Internet Banking
                                    </span>
                                </label>
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>
                    <div className="check-out-footer">
                        <button className='continue-shopping'>Continue shopping</button>
                        <button className='checkout'>Checkout</button>
                    </div>
                </div>
            </main>
        </LayoutBasic>
    )
}

export default Checkout
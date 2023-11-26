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
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
    const navigate = useNavigate();
    const Continue = () => {
        navigate('/Checkout');
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
                            <div className='stepName'>Review Order</div>
                        </div>
                        <hr />
                        <div className='step'>
                            <div className='stepIcon'>3</div>
                            <div className='stepName'>Checkout</div>
                        </div>
                        <hr />
                        <div className='step'>
                            <div className='stepIcon'>4</div>
                            <div className='stepName'>Checkout</div>
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
                            <div className="ticket">
                                <span className="ticket-label">
                                    1 tickets
                                </span>
                                <select name="typeOfTicket" className='type-of-ticket' id="">
                                    <option value="adult">Adult</option>
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
                                <div className='price-per-ticket'>
                                    <span className='ticket-label'>Price:</span>
                                    <span className='ticket-label-info'>£0.00</span>
                                </div>
                                <div className='fee-per-ticket'>
                                    <span className='ticket-label'>Fee:</span>
                                    <span className='ticket-label-info'>£0.00</span>
                                </div>
                                <div className='to-pay-per-ticket'>
                                    <span className='ticket-label'>To Pay:</span>
                                    <span className='ticket-label-info'>£0.00</span>
                                </div>
                                <button className='trash'>
                                    <img src={trash}/>
                                </button>
                            </div>
                            <div className="ticket">
                                <span className="ticket-label">
                                    1 tickets
                                </span>
                                <select name="typeOfTicket" className='type-of-ticket' id="">
                                    <option value="adult">Adult</option>
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
                                <div className='price-per-ticket'>
                                    <span className='ticket-label'>Price:</span>
                                    <span className='ticket-label-info'>£0.00</span>
                                </div>
                                <div className='fee-per-ticket'>
                                    <span className='ticket-label'>Fee:</span>
                                    <span className='ticket-label-info'>£0.00</span>
                                </div>
                                <div className='to-pay-per-ticket'>
                                    <span className='ticket-label'>To Pay:</span>
                                    <span className='ticket-label-info'>£0.00</span>
                                </div>
                                <button className='trash'>
                                    <img src={trash}/>
                                </button>
                            </div>
                            <div className="ticket">
                                <span className="ticket-label">
                                    1 tickets
                                </span>
                                <select name="typeOfTicket" className='type-of-ticket' id="">
                                    <option value="adult">Adult</option>
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
                                <div className='price-per-ticket'>
                                    <span className='ticket-label'>Price:</span>
                                    <span className='ticket-label-info'>£0.00</span>
                                </div>
                                <div className='fee-per-ticket'>
                                    <span className='ticket-label'>Fee:</span>
                                    <span className='ticket-label-info'>£0.00</span>
                                </div>
                                <div className='to-pay-per-ticket'>
                                    <span className='ticket-label'>To Pay:</span>
                                    <span className='ticket-label-info'>£0.00</span>
                                </div>
                                <button className='trash'>
                                    <img src={trash}/>
                                </button>
                            </div>
                        </div>
                        <div className='summary-checkout'>
                            <p class="total-label">Total (1 seats):</p>
                            <p class="total">£25.00</p>
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
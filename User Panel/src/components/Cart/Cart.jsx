import { useState } from 'react';
import './Cart.css'
import { Tab, Tabs } from 'react-bootstrap';

const Cart = () => {

    const [key, setKey] = useState('cart');

    const [paymentMethod, setPaymentMethod] = useState('');
    const [upiId, setUpiId] = useState('');
    const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleUpiIdChange = (e) => {
        setUpiId(e.target.value);
    };

    const handleCardDetailsChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Payment Method:', paymentMethod);
        if (paymentMethod === 'UPI') {
            console.log('UPI ID:', upiId);
        } else if (paymentMethod === 'Card') {
            console.log('Card Details:', cardDetails);
        }
        alert('Order Confirmed');
    };


    return (
        <>
            <div className="container">
                <div className="row py-4">
                    <div className="w-100 cr-h2">
                        <h2>
                            My Cart
                        </h2>
                    </div>
                    <div className='w-100 d-flex flex-wrap my-4 mb-5 align-items-start'>
                        <div className="cart-box col-8">
                            <div className='p-4'>
                                <h3 className='w-100 d-flex justify-content-between'>
                                    Hyperlocal Basket <span>₹114.00</span>
                                </h3>
                            </div>
                            <div className="w-100 d-flex flex-wrap mb-4">
                                <div className="col-2">
                                    <img src="https://www.jiomart.com/images/product/original/490001795/maaza-mango-drink-1-2-l-product-images-o490001795-p490001795-0-202301272130.jpg?im=Resize=(240,240)" alt="product" className='w-100' />
                                </div>
                                <div className="col-10">
                                    <h4 className='mb-2'>
                                        Maaza mango Drink 1.2 l
                                    </h4>
                                    <h3 className='mb-2'>
                                        ₹54.00 <span className='sp2'> (4%)</span>
                                    </h3>
                                    <h5>
                                        <span className='sp2'>Sold by :- </span>Reliance Retail
                                    </h5>
                                </div>
                                <div className='col-12 text-right'>
                                    <button className='mx-2'>-</button>
                                    <span className='sp'>1</span>
                                    <button className='mx-2'>+</button>
                                </div>
                            </div>
                            <div className="w-100 d-flex flex-wrap mb-4">
                                <div className="col-2">
                                    <img src="https://www.jiomart.com/images/product/original/494260170/bharat-chana-dal-1-kg-product-images-o494260170-p606721409-0-202401271413.jpg?im=Resize=(240,240)" alt="product" className='w-100' />
                                </div>
                                <div className="col-10">
                                    <h4 className='mb-2'>
                                        Bharat Chana Dal 1 kg
                                    </h4>
                                    <h3 className='mb-2'>
                                        ₹60.00 <span className='sp2'> (1%)</span>
                                    </h3>
                                    <h5>
                                        <span className='sp2'>Sold by :- </span>Reliance Retail
                                    </h5>
                                </div>
                                <div className='col-12 text-right'>
                                    <button className='mx-2'>-</button>
                                    <span className='sp'>1</span>
                                    <button className='mx-2'>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 px-4">
                            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} >
                                <Tab eventKey="cart" title="Cart">
                                    <div className='p-4 mt-3 ct-box'>
                                        <h3 className='mb-3'>
                                            Payment Details
                                        </h3>
                                        <h4 className='w-100 d-flex justify-content-between mb-2 pb-2'>
                                            MRP <span>₹135.00</span>
                                        </h4>
                                        <h4 className='w-100 d-flex justify-content-between mb-2 pb-2'>
                                            Discount <span>(5%)</span>
                                        </h4>
                                        <h4 className='w-100 d-flex justify-content-between mb-2 pb-2'>
                                            Delivery Fee <span className='text-success'>FREE</span>
                                        </h4>
                                        <span className='w-100 d-flex justify-content-between sp my-2'>
                                            Total <h3>₹114.00</h3>
                                        </span>
                                        <button className='chek-btn mt-3'>
                                            Place Order
                                        </button>
                                    </div>
                                </Tab>
                                <Tab eventKey="review" title="Review">
                                    <div className='p-4 mt-3 ad-box'>
                                        <h3 className='mb-3'>
                                            Address Information
                                        </h3>
                                        <form class="d-flex flex-wrap w-100">
                                            <div class="col-12 mb-3">
                                                <label class="form-label">Mobile Number</label>
                                                <input type="number" class="form-control" />
                                            </div>
                                            <div class="col-12 mb-3">
                                                <label class="form-label">Address</label>
                                                <textarea type="text" class="form-control" />
                                            </div>
                                            <div class="col-12 mb-3">
                                                <label class="form-label">Address 2</label>
                                                <textarea type="text" class="form-control" />
                                            </div>
                                            <div class="col-6 mb-3">
                                                <label class="form-label">City</label>
                                                <input type="text" class="form-control" />
                                            </div>
                                            <div class="col-6 mb-3">
                                                <label class="form-label">State</label>
                                                <input type="text" class="form-control" />
                                            </div>
                                            <button type="submit" className='col-12 mt-2 chek-btn'>
                                                Save Address
                                            </button>
                                        </form>
                                    </div>
                                </Tab>
                                <Tab eventKey="payment" title="Payment">
                                    <div className='p-4 mt-3 ad-box'>
                                        <h3 className='mb-3'>Secure Payment</h3>
                                        <form className="d-flex flex-wrap w-100" onSubmit={handleSubmit}>
                                            <div className="form-check w-100">
                                                <input className="form-check-input" type="radio" id="flexRadioDefault1" name='paymentMethod' value='CashOnDelivery' onChange={handlePaymentChange} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Cash On Delivery
                                                </label>
                                            </div>
                                            <div className="form-check w-100">
                                                <input className="form-check-input" type="radio" id="flexRadioDefault2" name='paymentMethod' value='UPI' onChange={handlePaymentChange} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    UPI
                                                </label>
                                            </div>
                                            {paymentMethod === 'UPI' && (
                                                <div className="w-100 mb-3">
                                                    <label htmlFor="upiId">UPI ID</label>
                                                    <input type="text" id="upiId" name="upiId" className="form-control" value={upiId} onChange={handleUpiIdChange} />
                                                </div>
                                            )}
                                            <div className="form-check w-100">
                                                <input className="form-check-input" type="radio" id="flexRadioDefault3" name='paymentMethod' value='Card' onChange={handlePaymentChange} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                    Card
                                                </label>
                                            </div>
                                            {paymentMethod === 'Card' && (
                                                <div className="w-100 mb-3">
                                                    <label htmlFor="cardNumber">Card Number</label>
                                                    <input type="text" id="cardNumber" name="number" className="form-control mb-2" value={cardDetails.number} onChange={handleCardDetailsChange} />
                                                    <label htmlFor="expiry">Expiry Date</label>
                                                    <input type="text" id="expiry" name="expiry" className="form-control mb-2" value={cardDetails.expiry} onChange={handleCardDetailsChange} />
                                                    <label htmlFor="cvv">CVV</label>
                                                    <input type="text" id="cvv" name="cvv" className="form-control mb-2" value={cardDetails.cvv} onChange={handleCardDetailsChange} />
                                                </div>
                                            )}
                                            <button type="submit" className='col-12 mt-2 chek-btn'>
                                                Order Confirm
                                            </button>
                                        </form>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Cart
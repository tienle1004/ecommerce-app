import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useSelector } from 'react-redux';

function Checkout(props) {
    const state = useSelector(state => state.addItem)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tg1bwws', 'template_vr9bay7', form.current, 'PR33CNNzhlmnIGjNX')
            .then((result) => {
                console.log(result.text);
                alert('Your order has been send to us. Our staff will be call to confirm ☎️')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    let total = 0
    const itemList = (item, key) => {
        total += item.price
        return (
            <li key={key} className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                    <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        )
    }
    const products = state.map(element => {
        return element.title
    });
    return (
        <>
            <div className="container">
                <div className="row g-5 mx-5 my-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>
                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code" />
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Checkout Info</h4>
                        <form ref={form} onSubmit={sendEmail} className="needs-validation" noValidate>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">Full name</label>
                                    <input type="text" className="form-control" id="firstName" name='user_name' required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="username" className="form-label">Phone</label>
                                    <div className="input-group has-validation">
                                        <input type="text" className="form-control" id="phone" name='user_phone' required />
                                        <div className="invalid-feedback">
                                            Your phone is necessary.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" name='user_address' placeholder="1234 Main St" required />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="col-12 visually-hidden">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your products</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" name='user_products' rows="3" readOnly value={products.join(', ')}></textarea>
                                </div>

                                <div className="col-12 visually-hidden">
                                    <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                                    <div className="col-sm-10">
                                        <input readOnly className="form-control-plaintext  price" id="price" name='total_price' value={total} />
                                    </div>
                                </div>

                            </div>
                            <hr className="my-4" />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" />
                                <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                            </div>
                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" type="submit" value="Send">Continue to checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
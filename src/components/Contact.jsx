import React from 'react';

function Contact(props) {
    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 py-5 my-3">
                        <h1>Have some question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/contact.png" alt="Contact Img" width='350px' height='300px' />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='examples@gmail.com' />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputText" className="form-label">Title</label>
                                <input type="text" className="form-control" id="exampleInputText" placeholder='ABC' />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Content</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="d-flex flex-column">
                                <button type="submit" className="btn btn-outline-warning">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
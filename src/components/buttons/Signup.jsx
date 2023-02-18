import React from 'react';

function Signup(props) {
    return (
        <>
            {/* Button trigger modal */}
            <button type="button" className="btn btn-outline-dark me-3" data-bs-toggle="modal" data-bs-target="#signupModal"><span className='fa fa-user-plus me-1'></span> Sign up
            </button>
            {/* Modal */}
            <div className="modal fade" id="signupModal" tabIndex={-1} aria-labelledby="signupModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="signupModalLabel">Sign up</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="signupInput" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="signupInput" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="signupInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="signupInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="signupInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="signupInputPassword1" />
                                </div>

                                <hr />
                                <button type="submit" className="btn btn-success w-100 mt-3">Register</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
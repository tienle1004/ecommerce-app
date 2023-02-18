import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Login(props) {
    const { loginWithRedirect, isAuthenticated } = useAuth0()

    return (
        // <>
        //     Button trigger modal
        //     <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#loginModal"><span className='fa fa-sign-in me-1'></span> Login
        //     </button>
        //     {/* Modal */}
        //     <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="loginModalLabel" aria-hidden="true">
        //         <div className="modal-dialog">
        //             <div className="modal-content">
        //                 <div className="modal-header">
        //                     <h4 className="modal-title" id="loginModalLabel">Login</h4>
        //                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        //                 </div>
        //                 <div className="modal-body">
        //                     <form>
        //                         <div className="mb-3">
        //                             <label htmlFor="loginInputEmail1" className="form-label">Email address</label>
        //                             <input type="email" className="form-control" id="loginInputEmail1" aria-describedby="emailHelp" />
        //                         </div>
        //                         <div className="mb-3">
        //                             <label htmlFor="loginInputPassword1" className="form-label">Password</label>
        //                             <input type="password" className="form-control" id="loginInputPassword1" />
        //                         </div>

        //                         <hr />
        //                         <button className='btn btn-outline-dark w-100 mb-3'><i className="fa fa-google" aria-hidden="true"></i> Sign in with Google</button>
        //                         <button className='btn btn-outline-info w-100 mb-3'><i className="fa fa-facebook-square" aria-hidden="true"></i> Sign in with Facebook</button>
        //                         <button type="submit" className="btn btn-success w-100 mt-3">Submit</button>
        //                     </form>

        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>

        !isAuthenticated && (
            <>
                <button type="button" className="btn btn-outline-dark" onClick={() => loginWithRedirect()}>
                    <span className='fa fa-sign-in me-1'></span> Sign in
                </button>
            </>
        )

    );
}

export default Login;
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Logout(props) {
    const { logout, isAuthenticated } = useAuth0()
    return (
        isAuthenticated && (
            <button type="button" className="btn btn-outline-dark" onClick={() => logout()}>
                <span className='fa fa-sign-in me-1'></span> Sign out
            </button>
        )

    );
}

export default Logout;
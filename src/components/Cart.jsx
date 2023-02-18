import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem } from '../redux/actions';
import { useAuth0 } from '@auth0/auth0-react';


function Cart(props) {
    const { loginWithRedirect, isAuthenticated } = useAuth0()

    const state = useSelector(state => state.addItem)
    const dispatch = useDispatch()


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state))
    }, [state])


    const handleClose = (item) => {
        dispatch(removeItem(item))
    }

    // const cartItems = (cartItem, key) => {
    //     return (
    //         <div key={key} className="px-4 my-5 bg-light rounded-3">
    //             <div className="container py-4">
    //                 <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label='Close'></button>
    //                 <div className="row justify-content-center">
    //                     <div className="col-md-4">
    //                         <img src={cartItem.img} alt={cartItem.title} width='230px' height='200px' />
    //                     </div>
    //                     <div className="col-md-4 my-auto">
    //                         <h5>{cartItem.title}</h5>
    //                     </div>
    //                     <div className="col-md-4 my-auto">
    //                         <i className='lead'>${cartItem.price}</i>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
    const cartItems = state.map((cartItem, key) => {

        return (
            <div key={key} className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                    <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label='Close'></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} width='230px' height='200px' />
                        </div>
                        <div className="col-md-4 my-auto">
                            <h5>{cartItem.title}</h5>
                        </div>
                        <div className="col-md-4 my-auto">
                            <i className='lead'>${cartItem.price}</i>
                        </div>
                    </div>
                </div>
            </div>
        )
    })


    const checkoutBtn = () => {
        if (isAuthenticated) {
            return (
                <div className="container">
                    <div className="row">
                        <Link to='/checkout' className='btn btn-outline-success'>Proceed to checkout</Link>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="container">
                    <div className="row">
                        <button type="button" className="btn btn-outline-dark" onClick={() => loginWithRedirect()}>
                            <span className='fa fa-sign-in me-1'></span> Sign in
                        </button>
                    </div>
                </div>
            )
        }
    }

    const emptyCart = () => {
        return (
            <p className="font-monospace text-center mt-5 fs-1">Your cart is empty 🛒</p>
        )
    }
    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && cartItems}
            {state.length !== 0 && checkoutBtn()}
        </>
    );
}

export default Cart;
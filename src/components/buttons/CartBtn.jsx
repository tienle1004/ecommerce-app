import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CartBtn(props) {
    const state = useSelector((state) => state.addItem)
    return (
        <>
            <Link to='cart' className='btn btn-outline-info me-3'>
                <span className='fa fa-shopping-cart me-1'></span> Cart({state.length})
            </Link>
        </>
    );
}

export default CartBtn;
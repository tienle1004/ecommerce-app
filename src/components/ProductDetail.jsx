import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DATA from '../Data';
import { addItem, removeItem } from '../redux/actions'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


function ProductDetail(props) {
    const proid = useParams();
    const proDetail = DATA.filter(x => x.id === +proid.id)
    const product = proDetail[0]
    console.log(product);
    const [cartBtnState, setCartBtnState] = useState('Add to cart');
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        if (cartBtnState === 'Add to cart') {
            dispatch(addItem(product))
            setCartBtnState('Remove from cart')
        } else {
            dispatch(removeItem(product))
            setCartBtnState('Add to cart')
        }
    }
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center product">
                        <img src={product.img} alt={product.title} style={{ width: "40rem" }} />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className='display-5 fw-bold'>{product.title}</h1>
                        <hr />
                        <h2 className='my-4'>${product.price}</h2>
                        <p className='lead'>{product.desc}</p>
                        <Link to="/cart" onClick={() => handleAddToCart(product)} className='btn btn-outline-dark my-5'>
                            {cartBtnState}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
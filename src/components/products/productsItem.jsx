import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/cartReducer';

const ProductItems = ({ id, price, title, data, img }) => {

    const dispatch = useDispatch();
    const handleClickToCart = (products) => {
        dispatch(addToCart(products))
        console.log(products);
    }

    return (
        <div className="products-box__content" key={id}>
            <div className="products-box__content-img">
                <img src={img} alt="" />
            </div>
            <div className="products-box__content-name">{title}</div>
            <div className="products-box__content-footer">
                <span className="products-box__content-footer__price">{price}/000</span>
                <button className="products-box__content-footer__btn" onClick={() => handleClickToCart(data)}>ثبت خرید</button>
            </div>
        </div>
    );
}

export default ProductItems;
import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToCart, deCreaseToCart} from '../../store/reducers/cartReducer';
import './Style.scss';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

const Cart = () => {

    const history = useHistory();
    const { cartItems } = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const hasItem = cartItems.length === 0;
    const totalCart = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)



    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    const handleDeleteCart = (product) => {
        dispatch(deCreaseToCart(product))
    }
    const handleSubmit = () => {
        toast.info("ممنون از خریدتون")
        localStorage.clear();
        history.push("/") 
    }

    return (
        <div className="cart">
            <div className="container">
                {
                    hasItem ? (
                        <div className="text-center display-4">سبد خرید خالی است</div>
                    ) : (
                        <div className="cart-body">
                            <ul className="cart-list">
                                {
                                    cartItems.map(cart => (
                                        <li className="cart-list__item" key={cart.id}>
                                            <div className="cart-list__item-img">
                                                <img src={cart.img} alt={cart.title} />
                                            </div>
                                            <div className="cart-list__item-title">{cart.title}</div>
                                            <div className="cart-list__item-amount">
                                                <button className="cart-list__item-amount__btn" onClick={() => handleAddToCart(cart)}>+</button>
                                                <span className="cart-list__item-amount__quantity">{cart.quantity}</span>
                                                <button className="cart-list__item-amount__btn" onClick={() => handleDeleteCart(cart)}>-</button>
                                            </div>
                                            <div className="cart-list__item-price">{cart.price}/000</div>

                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="cart-total">
                                <span className="cart-total__text">جمع : </span>
                                <span className="cart-total__price">{totalCart}/000 تومان</span>
                            </div>
                            <div className="cart-btn">
                                <button className="cart-btn__text" onClick={handleSubmit}>تکمیل سفارش</button>
                            </div>
                        </div>
                    )


                }
            </div>
        </div>
    )
}

export default Cart

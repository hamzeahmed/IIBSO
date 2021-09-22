import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty]);
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    };

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    };
    return (

        <div class="container padding-bottom-3x mb-1">
            <br></br>
            {
                cartItems.length === 0 ? (
                    <MessageBox>Cart is empty</MessageBox>
                ) : (
                    <div class="table-responsive shopping-cart">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th class="text-center">Quantity</th>
                                    <th class="text-center">Subtotal</th>
                                    <th class="text-center"><a class="btn btn-sm btn-outline-danger" href="/#">Clear Cart</a></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr>
                                        <td>
                                            <div class="product-item">
                                                <a class="product-thumb" href="/#"><img src={item.image} alt="Product" /></a>
                                                <div class="product-info">
                                                    <h4 ><Link to={`/product/${item.product}`}>{item.name}</Link></h4><h4 class="product-title">${item.price}</h4><span><em>Size:</em> 10.5</span><span><em>Color:</em> Dark Blue</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            <div class="count-input">
                                                <select
                                                    class="form-control"
                                                    value={item.qty}
                                                    onChange={(e) =>
                                                        dispatch(
                                                            addToCart(item.product, Number(e.target.value))
                                                        )
                                                    }
                                                >
                                                    {[...Array(item.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </td>
                                        <td class="text-center text-lg text-medium">{(item.price)*(item.qty)}</td>
                                        <td class="text-center"><Link class="remove-from-cart" to={`/cart`} data-toggle="tooltip" title="" data-original-title="Remove item" onClick={() => removeFromCartHandler(item.product)}><i class="fa fa-trash"></i></Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            }

            <div class="shopping-cart-footer">
                <div class="column">
                    <form class="coupon-form" method="post">
                        <input class="form-control form-control-sm" type="text" placeholder="Coupon code" required="" />
                        <button class="btn btn-outline-primary btn-sm" type="submit">Apply Coupon</button>
                    </form>
                </div>
                <div class="column text-lg">Subtotal: <span class="text-medium">({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                    {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</span></div>
            </div>
            <div class="shopping-cart-footer">
                <div class="column"><Link class="btn btn-outline-secondary" to="/"><i class="icon-arrow-left"></i>&nbsp;Back to Shopping</Link></div>
                <div class="column"><a class="btn btn-primary" href="/#" data-toast="" data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Your cart" data-toast-message="is updated successfully!">Update Cart</a><i class="btn btn-success"disabled={cartItems.length === 0}  onClick={checkoutHandler}>Checkout</i></div>
            </div>
        </div>
    )
}

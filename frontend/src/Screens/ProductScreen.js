
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    const [qty, setQty] = useState(1);
    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    }
    return (
        <div class="container my-5">
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div class="card mb-3" style={{ maxWidth: "1250px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img
                                src={product.image}
                                alt="..."
                                class="img-fluid"
                            />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                <p class="card-text">
                                    {product.description}
                                </p>
                                <p class="card-text">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                                <h5 class="card-title">${product.price}</h5>
                                {product.countInStock > 0 ? (
                                    <span className="btn btn-outline-primary btn-rounded">In Stock</span>

                                ) : (
                                    <span className="btn btn-outline-danger btn-rounded">Unavailable</span>
                                )}
                                {
                                    product.countInStock > 0 && (
                                        <div className="row">
                                            <div> Qty</div>
                                            <div>
                                                <select
                                                    className="form-select"
                                                    value={qty}
                                                    onChange={(event) => setQty(event.target.value)}>
                                                    {
                                                        [...Array(product.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        )
                                                        )}
                                                </select>
                                            </div>
                                            <p></p>
                                            <button type="button"
                                                className="btn btn-primary btn-rounded"
                                                data-mdb-ripple-color="dark" onClick={addToCartHandler}>Add to Cart</button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

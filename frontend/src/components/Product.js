import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {
    const product = props.product
    return (
        <div class="col">
            <div class="card h-100">
                <img
                    src={product.image}
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body text-center">
                    <Link to={`/product/${product._id}`} ><h5 class="card-title">{product.name}</h5></Link>
                    <h5 class="card-title ">${product.price}</h5>
                </div>
                <div class="card-footer">
                    <button className="btn btn-block btn-primary">Add to cart</button>
                </div>
            </div>
        </div>

    )
}

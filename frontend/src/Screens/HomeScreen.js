
import React, { useEffect } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { listProducts } from '../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    console.log();
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div class="container my-5">
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div class="row row-cols-1 row-cols-md-3 g-4">
                   {products.map((product) => (
                        <Product key={product.id}  product={product}/>
                    ))}
                </div>
            )
            }
        </div>
    )
}

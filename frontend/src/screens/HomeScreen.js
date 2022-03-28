import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, listSearchedProducts } from '../actions/productActions';
import SearchBox from '../components/SearchBox';

var prods;

var searchedProducts = [];

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  prods = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <div className='row center'><SearchBox/></div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
  );
}

 export function searchProducts(value) {
  prods['products'].forEach(prod => {
    if(prod['name'].toLowerCase().toUpperCase() == value) {
      console.log('penis');
      searchedProducts.push(prod);    
    } 
  });
  console.log(searchedProducts);
 }

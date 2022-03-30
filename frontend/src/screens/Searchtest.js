import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';


export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);

  function search(products) {
    return products.filter((product) => {
        return searchParam.some((newProduct) => {
            return (
                product[newProduct]
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
            );
        });
    });
}

  return (
    <div>
        <div className= "row center">
            <form className= "search">
                <div className="row">
                    <label htmlFor="search-form">
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            placeholder="Suchen..."
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        />
                        
                    </label>
                </div>
            </form>
        </div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center" >
          {search(products).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
  );
}

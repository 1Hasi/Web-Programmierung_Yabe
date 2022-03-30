import { useSelector } from 'react-redux';
import searchProducts from '../components/SearchBox';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

export default function SearchesItems() {
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    var prods = searchProducts;
    return (
        <div>
         
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div className="row center" >
              {prods.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          )}
        </div>
      );
}
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
var searchedProducts;
var products;
export  function SearchBox(test) {
    const navigate = useNavigate;
  const [name, setName] = useState('');
  products = test.products;
  return (
    <form className="search" >
      <div className="row">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Suchen..."
          // onChange={(e) => searchProducts(e.target.value)}
          onKeyDown={(e) => EnterSubmitSearchProducts(e)}
        ></input>
        <button onClick="searchProducts()" className="primary" >
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}

export  function EnterSubmitSearchProducts(event) {
  if(event.keyCode === 13) {
      searchProducts(event.target.value);
  }
}

export  default function searchProducts(value) {
  const navigate = useNavigate;
  searchedProducts = [];
  products['products'].forEach(prod => {
    if(value !== undefined) {
      if(prod['name'].toLowerCase().trim() == value.toLowerCase().trim()) {
        searchedProducts.push(prod);
      } 
    }
  });
  console.log('Navigiere: ');
  navigate('/search');
 }

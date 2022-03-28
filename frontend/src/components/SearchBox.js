import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {searchProducts} from '../screens/HomeScreen.js';

export default function SearchBox() {
    const navigate = useNavigate;
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/name/${name}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="row">
        <input
          type="search"
          id="search-form"
          name="search-form"
          placeholder="Suchen..."
          onChange={(e) => searchProducts(e.target.value)}
        ></input>
        <button className="primary" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}
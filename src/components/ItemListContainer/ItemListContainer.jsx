import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardUser from '../CardUser/CardUser';
import { Link } from 'react-router-dom';
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/productos.json').then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <div className="Cards-List">
      <div className="product-container">
        {items.map((item, index) => (
          <div key={index} className="product">
            <Link to={`/detail/${item.id}`}>
              <CardUser className="Cards-List" item={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

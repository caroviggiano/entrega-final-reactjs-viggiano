import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardUser from "../../components/CardUser/CardUser";
import { useParams } from 'react-router-dom';
import "./DetailPage.css"

const DetailPage = () => {
  let { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get('/productos.json').then((res) => {
      const product = res.data.find(item => item.id === parseInt(id));
      setItem(product);
    });
  }, [id]);

  return (
    <div className='Detail-products'>
      {item ? <CardUser item={item} /> : null}
    </div>
  );
};

export default DetailPage;

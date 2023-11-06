import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardUser from "../../components/CardUser/CardUser";
import { useParams } from 'react-router-dom';
import "./DetailPage.css"

const DetailPage = () => {
  let { id } = useParams();
  const [Producto, setProducto] = useState(null);

  useEffect(() => {
    axios.get('/productos.json').then((res) => {
      const product = res.data.find(Producto => Producto.id === parseInt(id));
      setProducto(product);
    });
  }, [id]);

  return (
    <div className='Detail-products'>
      {Producto ? <CardUser Producto={Producto} /> : null}
    </div>
  );
};

export default DetailPage;

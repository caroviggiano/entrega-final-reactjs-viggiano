import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardUser from "../../components/CardUser/CardUser";
import { useParams } from 'react-router-dom';
import "./CategoryPage.css"

const CategoryPage = () => {
  const [Productos, setProductos] = useState([]);
  let { categoryId } = useParams();


  useEffect(() => {
    axios.get('/productos.json').then((res) => {
      setProductos(res.data);
    });
  }, [] );

  let filteredProductos = Productos.filter((Producto) => {
    return Producto.category === categoryId
  })

  return(
    <div className='Cards-List'>
        {filteredProductos.map((Producto)=>{
          return (
            <div style={{margin: 10 }} key= {Producto.id}>
                <CardUser Producto={Producto} /> 
            </div>
          )
        } )}
    </div>
  )
}

export default CategoryPage
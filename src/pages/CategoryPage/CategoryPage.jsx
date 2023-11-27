import React, { useState, useEffect } from 'react';
import CardUser from '../../components/CardUser/CardUser';
import { useParams, Link } from 'react-router-dom';
import './CategoryPage.css';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/firebaseConfig'; 

const CategoryPage = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Categoría actual:', categoryId);

        const q = query(collection(db, 'productos'), where('category', '==', categoryId));
        const querySnapshot = await getDocs(q);

        console.log('Resultados de la consulta:', querySnapshot.docs.map(doc => doc.data()));

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(data);
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div className="category-page">
      <h1 className="category-title">{categoryId}</h1>
      <div className="cards-list">
        {productos.map((producto) => (
          <div className="card-wrapper" key={producto.id}>
            <CardUser producto={producto} />
          </div>
        ))}
      </div>
      <Link to="/" className="back-link">Volver a la página de inicio</Link>
    </div>
  );
};

export default CategoryPage;

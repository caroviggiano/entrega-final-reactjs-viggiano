import React, { useState, useEffect } from 'react';
import CardUser from '../../components/CardUser/CardUser';
import { useParams } from 'react-router-dom';
import './CategoryPage.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

const CategoryPage = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = firebase.firestore();

    const fetchData = async () => {
      try {
        const querySnapshot = await db.collection('productos').where('category', '==', categoryId).get();

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
    <div className="Cards-List">
      {productos.map((producto) => (
        <div style={{ margin: 10 }} key={producto.id}>
          <CardUser producto={producto} />
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;

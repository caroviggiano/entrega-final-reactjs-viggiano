import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import CardUser from "../../components/CardUser/CardUser";
import { useParams } from 'react-router-dom';
import "./DetailPage.css";

const firebaseConfig = {
  apiKey: "AIzaSyAJ0XDAbqd8NzSvwrJr55bDzV5xaM_pARc",
  authDomain: "fb-alba.firebaseapp.com",
  projectId: "fb-alba",
  storageBucket: "fb-alba.appspot.com",
  messagingSenderId: "698969649559",
  appId: "1:698969649559:web:481428d46cd3f4ff1ed4d2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DetailPage = () => {
  let { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'productos', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error('No se encontró el producto con ID:', id);
        }
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='Detail-products'>
      {producto ? <CardUser producto={producto} /> : null}
    </div>
  );
};

export default DetailPage;

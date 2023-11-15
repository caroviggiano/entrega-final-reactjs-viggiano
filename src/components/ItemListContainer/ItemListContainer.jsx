import { useEffect, useState } from "react";
import ProductoList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
import "./ItemListContainer.css"; 

const ProductoListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos"); 
    const category = useParams().category;

    useEffect(() => {
        const productosRef = collection(db, "productos");
        const q = category ? query(productosRef, where("category", "==", category)) : productosRef;

        getDocs(q)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id };
                    })
                );
            });

 
        setTitulo(category ? `Productos - ${category}` : "Productos");
    }, [category]);

    return (
        <div className="product-container">
            <ProductoList productos={productos} titulo={titulo} />
        </div>
    );
};

export default ProductoListContainer;

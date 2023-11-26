import { useEffect, useState } from "react";
import ProductoList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
import "./ItemListContainer.css";

const ProductoListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [name, setName] = useState("Productos");
    const [isLoading, setIsLoading] = useState(true);
    const category = useParams().category;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productosRef = collection(db, "productos");
                const q = category ? query(productosRef, where("category", "==", category)) : productosRef;
                const resp = await getDocs(q);

                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id };
                    })
                );

                setName(category ? `Productos - ${category}` : "Productos");
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [category]);

    if (isLoading) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="product-container">
            <ProductoList productos={productos} name={name} />
        </div>
    );
};

export default ProductoListContainer;

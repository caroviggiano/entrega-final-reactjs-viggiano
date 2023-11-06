import { useEffect, useState } from "react"
import ProductoDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";


const ProductoDetailContainer = () => {

    const [Producto, setProducto] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        const docRef = doc(db, "productos", id);

      getDoc(docRef)
        .then((resp) => {
          setProducto( {
            ...resp.data(), id: resp.id
          } );
        })

    }, [id])


  return (
    <div>
        {Producto && <ProductoDetail Producto={Producto} />}
    </div>
  )
}
export default ProductoDetailContainer
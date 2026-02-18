import React, { useEffect, useState } from "react";
import { getOneProduct, getProducts } from "../asyncMock/data";
import { Link, useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { db } from "../service/firebase";
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(null)

    const {itemId} = useParams()

    useEffect (()=> {
        const docRef = doc(db, "productos", itemId)
        getDoc(docRef)
        .then((res) => {
          if(res.data()) {
            setDetail({
              id: res.id,
              ...res.data()
            })
          } else {
            setNotFound(true)
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, [itemId])

    if(notFound) {
      return (
        <div className="cart-empty-container">
          <h2>Producto no encontrado</h2>
          <Link className='btn-primary-custom mt-3' to='/'>Volver a Home</Link>
        </div>
      )
    }

  return (
    <div>
      {loading ? <Loader text='Cargando Detalle...'/> : <ItemDetail detail={detail} />}
    </div>
  );
};

export default ItemDetailContainer;

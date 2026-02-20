import { useEffect, useState } from "react";
import { getProducts, products } from "../asyncMock/data"
import ItemList from "./ItemList";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { addDoc, collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../service/firebase"
import BannerCarousel from "./BannerCarousel";

const ItemListContainer = (props) => {

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const {type} = useParams()

 useEffect(() => {
    setLoading(true);
    // siempre obtener productos; luego aplicar filtro si hay category
    const prodCollection = type ? query(collection (db, "productos"), 
        where("category", "==", type)) : collection(db, "productos")

    getDocs(prodCollection)
      .then((res) => {

        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setData(list)
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [type]);

  let subtitulo = '';

if(type) {


  subtitulo = `Categoría: ${type.charAt(0).toUpperCase() + type.slice(1)}`;
}

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="align-items-center text-center gap-1">
          <BannerCarousel />

          {subtitulo && (
            <div className="text-start w-100 mt-4 mb-3 ps-3">
              <span className="text-secondary" style={{ fontSize: '1.5rem' }}>{subtitulo}</span>
            </div>
          )}
          <ItemList data={data} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;

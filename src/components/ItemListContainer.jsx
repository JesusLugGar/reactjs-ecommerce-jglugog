import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock/data"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {

  const [data, setData] = useState([]);

  const {type} = useParams()

 useEffect(() => {
    // siempre obtener productos; luego aplicar filtro si hay category
    getProducts()
      .then((products) => {
        if (type) {
          const filteredData = products.filter((item) => item.category === type);
          setData(filteredData);
        } else {
          setData(products);
        }
      })
      .catch((err) => {
        console.error("getProducts error:", err);
        setData([]);
      });
  }, [type]);


  /*useEffect(() => {
    getProducts().then((data) => {
      setData(data);
    });
  }, []);*/

  const { tituloItem } = props;

  return (
    <div className="align-items-center text-center gap-5">
      <h1>{tituloItem}</h1>
      
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;

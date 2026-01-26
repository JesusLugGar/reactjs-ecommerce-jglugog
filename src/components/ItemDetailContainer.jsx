import React, { useEffect, useState } from "react";
import { getOneProduct, getProducts } from "../asyncMock/data";
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})

    const {itemId} = useParams()

    useEffect (()=> {
        getOneProduct(itemId)
        .then((res) => setDetail(res))
    }, [itemId])

  return (
    <div>
      <ItemDetail detail={detail} />
    </div>
  );
};

export default ItemDetailContainer;

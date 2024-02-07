import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../../ProductsMock";

const ItemListContainer = () => {
  //LOGICA
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      //reject ("Error")
    });

    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(items);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;

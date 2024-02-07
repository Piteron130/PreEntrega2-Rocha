import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("Stock maximo");
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      alert("No puede ser menos de 1");
    }
  };

  return <ItemCount counter={counter} sumar={sumar} restar={restar} />;
};

export default ItemCountContainer;

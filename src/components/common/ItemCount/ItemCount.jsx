const ItemCount = ({ counter, sumar, restar }) => {
  return (
    <>
      <div>
        <button onClick={sumar}>Sumar</button>
        <h3>{counter}</h3>
        <button onClick={restar === 1 ? true : false}>Restar</button>
        <button>Agregar al carrito</button>
      </div>
    </>
  );
};

export default ItemCount;

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div style={{ border: "2px solid black" }} key={item.id}>
            <img
              src={item.image}
              alt=""
              style={{ width: "250px", marginLeft: "40%" }}
            />
            <h2>{item.title}</h2>
            <h3>${item.price}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

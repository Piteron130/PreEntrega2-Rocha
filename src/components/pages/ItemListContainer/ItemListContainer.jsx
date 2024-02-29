import ItemList from "./ItemList";
import { getProducts } from "../../../productsMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const resp = await getProducts();

        if (category) {
          const productsFilter = resp.filter(
            (product) => product.category === category
          );
          setProducts(productsFilter);
        } else {
          setProducts(resp);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <Box sx={{ width: "100%" }}>
      {isLoading ? (
        <LinearProgress color="secondary" />
      ) : (
        <ItemList products={products} />
      )}
    </Box>
  );
};

export default ItemListContainer;

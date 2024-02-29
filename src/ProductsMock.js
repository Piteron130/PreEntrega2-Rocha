export let products = [
  {
    id: 1,
    title: "Remera Mariposa del Mar",
    price: 12432,
    description:
      "Esta hermosa remera fue diseñada con inspiración en las mariposas del mar, combinando elegancia y estilo.",
    img: "https://d22fxaf9t8d39k.cloudfront.net/cb61002bdfd6ce1e4e452cef36e8350ec7163bbaf156c28832ab0548aa2e4b21191582.png",
    stock: 12,
    category: "remeras",
  },
  {
    id: 2,
    title: "Wilson Advance",
    price: 14500,
    stock: 5,
    description:
      "Disfruta de la última tecnología en comodidad y estilo con la musculosa Wilson Advance. Ultraliviana y con cámara de aire para una experiencia única.",
    category: "remeras",
    img: "https://d22fxaf9t8d39k.cloudfront.net/87812a829e998ba65d49b1b7f08dfb5eb4a7bfbf0ba7cfef97c36cbf779f71a4122010.png",
  },
  {
    id: 3,
    title: "Musculosa Mariposa Mujer",
    price: 19000,
    stock: 5,
    description:
      "Luce espectacular con nuestra musculosa mariposa para mujeres. Diseñada pensando en la elegancia y comodidad para cualquier ocasión.",
    category: "musculosa",
    img: "https://acdn.mitiendanube.com/stores/593/080/products/0f3201da-f990-4a5d-9ba7-1c0e16875e72-c6b39f4ac724d3f67516967854679572-240-0.jpeg",
  },
  {
    id: 4,
    title: "Musculosa Mariposa Hombre",
    price: 17800,
    stock: 5,
    description:
      "Conquista tus entrenamientos con la musculosa mariposa para hombres. Diseñada para brindar comodidad y rendimiento en cada actividad deportiva.",
    category: "musculosa",
    img: "https://underwavebrand.com/wp-content/uploads/2023/10/DSC01058.webp",
  },
  {
    id: 5,
    title: "Buzo Deportivo Hombre",
    price: 17800,
    stock: 5,
    description:
      "Eleva tu estilo deportivo con nuestro buzo deportivo de última generación. Diseño moderno y materiales de alta calidad para un rendimiento excepcional.",
    category: "buzo",
    img: "https://i.pinimg.com/564x/36/e0/4e/36e04e208bfc0ebc67dad08f03a9770d.jpg",
  },
  {
    id: 6,
    title: "Buzo Deportivo Mujer",
    price: 17800,
    stock: 5,
    description:
      "Descubre la combinación perfecta de estilo y comodidad con nuestro buzo deportivo para mujeres. Diseñado para destacar en cualquier ocasión.",
    category: "buzo",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTR9TMKn2fQRgqAA4KDULrbg9odEYFWO9zCbbnJ32Aov0wHYJpI",
  },
  {
    id: 7,
    title: "Buzo Casual Hombre",
    price: 17800,
    stock: 5,
    description:
      "Añade un toque de estilo casual a tu look con nuestro buzo casual para hombres. Confort y moda en una sola prenda.",
    category: "buzo",
    img: "https://i.pinimg.com/564x/09/d9/e5/09d9e5bda9bc8c40d2b021970b2671dc.jpg",
  },
  {
    id: 8,
    title: "Buzo Casual Mujer",
    price: 17800,
    stock: 5,
    description:
      "Siente la elegancia y la comodidad con nuestro buzo casual para mujeres. Perfecto para cualquier ocasión y siempre a la moda.",
    category: "buzo",
    img: "https://i.pinimg.com/236x/f0/10/3c/f0103cd0bc84df0e3134c85caa3c259d.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};

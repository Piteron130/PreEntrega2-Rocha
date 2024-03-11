import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { CartContainer } from "./components/pages/cart/CartContainer";
import { ItemDetailContainer } from "./components/pages/ItemDetailContainer/ItemDetailContainer.jsx";
import { Layout } from "./components/layout/Layout";
import { CheckoutContainer } from "./components/pages/Checkout/CheckoutContainer";
import CartContextProvider from "./context/CartContext";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDesc from "./pages/ProductDesc";
import ProductForm from "./pages/ProductForm";
import Register from "./pages/Register";
import TermsCondition from "./pages/TermsCondition";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add" element={<ProductForm />} />
        <Route path="/products/:productId" element={<ProductDesc />} />
      </Route>
    </Routes>
  );
}

export default App;

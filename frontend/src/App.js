import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import { Main, Product, Basket, Panel, Login, Register } from "./pages";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/product/:productId" /> */}
        <Route path="/basket" element={<Basket />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

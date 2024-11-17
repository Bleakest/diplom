import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import {Main, Product, Basket, Panel} from './pages'
import Footer from './components/footer'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" />
        <Route path="/basket" element={<Basket />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/login" />
        <Route path="/register" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

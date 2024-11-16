import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import {Main} from './pages'
import Footer from './components/footer'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" />
        <Route path="/product/:productId" />
        <Route path="/basket" />
        <Route path="/panel" />
        <Route path="/login" />
        <Route path="/register" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

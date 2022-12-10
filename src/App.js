import MockmanEs from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Login,
  Signup,
  Products,
  Wishlist,
  Cart,
  Home,
} from "./barrelexport/Pageutil";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="mockman" element={<MockmanEs />} />
      </Routes>
    </div>
  );
}

export default App;
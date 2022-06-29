import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Slidshow from "./components/Slideshow";
import Login from "./components/adminHome";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Slidshow />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/home" element={<Products />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./components/adminHome";
import Admin from "./admin";

function Userhome() {
  // const color = {backgroundColor:'#410412'}

  return (
    <div className="App" style={color}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      <Admin />
    </div>
  );
}

export default Userhome;

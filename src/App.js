import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import { GlobalStyle } from "./Global_Styles/Global_Style";
import { ThemeProvider } from "styled-components";
import { theme } from "./Global_Styles/Theme";
import CreateProduct from "./pages/CreateProduct";
import Navbar from "./pages/Navbar";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import Filters from "./pages/Filters";

const App = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle/>
        <ToastContainer/>
        <Navbar/>
        <Routes>
          <Route path="/shopito/" element={<Filters/>} />
          <Route path="/create-product" element={<CreateProduct/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/:id" element={<SingleProduct/>} />
          <Route path="/update/:id" element={<CreateProduct/>} />
          <Route path="/" element={<Filters/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

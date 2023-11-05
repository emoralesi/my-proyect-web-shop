import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import FiltroSelectedProvider from "./Contexts/FiltroSelectedContext";
import CategoriaProductos from "./components/FilterProductos/CategoriaProductos";
import Home from "./components/Home";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (

    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />}>
            <Route path="/" element={<Home />} />
            <Route path="/categoria" element={
              <FiltroSelectedProvider>
                <CategoriaProductos idSubCategoria={27} />
              </FiltroSelectedProvider>
            } />
          </Route>
        </Routes>
      </Router>
    </div>

    //<Test/>
  );
}

export default App;

import {
  BrowserRouter, 
  Routes, 
  Route
 } from "react-router-dom";
import * as React from 'react';
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Header from "./components/Header"

function App() {
return (
  <>
  <Header/>
  <BrowserRouter>
    <Routes>
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  </>
)
}

export default App;

import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import Ahorcado from "./pages/Ahorcado/Ahorcado";
import NotFound from "./pages/NotFound/NotFound";
import Tresenraya from "./pages/Tresenraya/Tresenraya";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Tresenraya />} />
          <Route path="/apod" element={<Ahorcado />} />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

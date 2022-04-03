import "./App.css";

import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import About from "@/containers/About/index.jsx";
import Game from "@/containers/Game/index.jsx";
import Home from "@/containers/Home/index.jsx";
import configureStore from "@/redux/rootStore";

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

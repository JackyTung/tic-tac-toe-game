import "./App.css";

import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import CanvasPlayGround from "@/containers/CanvasPlayGround/index.jsx";
import CanvasTutorial from "@/containers/CanvasTutorial/index.jsx";
import Game from "@/containers/Game/index.jsx";
import Home from "@/containers/Home/index.jsx";
import SvgPlayGround from "@/containers/SvgPlayGround/index.jsx";
import configureStore from "@/redux/rootStore";
import themes from "@/styles/themes";

const store = configureStore();

function App() {
  return (
    <ThemeProvider theme={themes}>
      <div className="App">
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="game" element={<Game />} />
            <Route path="svg-playground" element={<SvgPlayGround />} />
            <Route path="canvas-playground" element={<CanvasPlayGround />} />
            <Route path="canvas-tutorial" element={<CanvasTutorial />} />
          </Routes>
        </Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;

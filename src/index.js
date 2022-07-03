import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./assets/styles/tailwind.css";
import "./index.css";
import Landing from "./pages/Landing";
import About from "./pages/About";
import { EmotionProvider } from "containers/emotionProvider";

const rootElement = document.getElementById("root");
render(
    <EmotionProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/:version" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Navigate to="/4" />} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </BrowserRouter>
    </EmotionProvider>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Landing, About, PageNotFound } from "pages";
import { EmotionProvider } from "containers/emotionProvider";

export const App = () => {
    return (
        <EmotionProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/home/:version" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Navigate to="/home/4" />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </EmotionProvider>
    );
};

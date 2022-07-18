/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, About, PageNotFound } from "pages";
import { EmotionProvider } from "containers/emotionProvider";

export const App = () => {
    return (
        <EmotionProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </EmotionProvider>
    );
};

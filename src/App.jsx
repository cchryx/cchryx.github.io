import "./app.css";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Projects from "./pages/Projects/Projects";
import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Landing />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
            </Routes>
        </>
    );
}

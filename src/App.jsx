import "./theme.css";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
    return (
        <>
            <div className="bg-fx" aria-hidden="true">
                <span className="bg-grid" />
                <span className="bg-glow" />
                <span className="bg-scan" />
            </div>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Landing />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
            </Routes>
        </>
    );
}

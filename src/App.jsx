import "./app.css";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Projects from "./pages/Projects/Projects";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/projects" exact element={<Projects />}></Route>
        </Routes>
    );
}

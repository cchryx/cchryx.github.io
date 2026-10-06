import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { displayName } from "../lib/data";

const LINKS = [
    { label: "About", id: "pilot" },
    { label: "Projects", id: "missions" },
    { label: "Skills", id: "systems" },
    { label: "Experience", id: "record" },
    { label: "Beyond code", id: "offduty" },
    { label: "Contact", id: "comms" },
];

export default function Nav() {
    const [open, setOpen] = useState(false);
    const nav = useNavigate();
    const loc = useLocation();

    const go = (id) => {
        setOpen(false);
        if (loc.pathname === "/") {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            nav("/", { state: { scrollTo: id } });
        }
    };

    return (
        <header className="nav">
            <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
                <span className="nav-mark" />
                <span className="nav-name">
                    <b>{displayName}</b>
                    <small>Developer and roboticist</small>
                </span>
            </Link>

            <nav className={`nav-links ${open ? "open" : ""}`}>
                {LINKS.map((l) => (
                    <button key={l.id} className="nav-link" onClick={() => go(l.id)}>
                        {l.label}
                    </button>
                ))}
                <Link to="/projects" className="nav-link nav-hot" onClick={() => setOpen(false)}>
                    All projects
                </Link>
            </nav>

            
            <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(!open)}>
                <i />
                <i />
                <i />
            </button>
        </header>
    );
}

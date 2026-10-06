import React, { useMemo, useState } from "react";
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import { SectionHead } from "../components/Hud";
import { projects, stageLabel, displayName, fetchedAt } from "../lib/data";

export default function Projects() {
    const [filter, setFilter] = useState("All");
    const [q, setQ] = useState("");

    const stages = useMemo(() => ["All", ...Array.from(new Set(projects.map(stageLabel)))], []);

    const shown = projects.filter((p) => {
        if (filter !== "All" && stageLabel(p) !== filter) return false;
        const t = q.trim().toLowerCase();
        if (!t) return true;
        const hay = [p.title, p.summary, ...(p.skills || []).map((s) => s.name)].join(" ").toLowerCase();
        return hay.includes(t);
    });

    return (
        <>
            <Nav />
            <section className="sec sec-top">
                <SectionHead no="Work" title="All projects" sub={`${projects.length} projects by ${displayName}, synced from Inkference.`} />

                <div className="filters">
                    <div className="filter-chips">
                        {stages.map((s) => (
                            <button key={s} className={`fchip ${filter === s ? "on" : ""}`} onClick={() => setFilter(s)}>
                                {s}
                            </button>
                        ))}
                    </div>
                    <input
                        className="search"
                        placeholder="Search projects or skills"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                </div>

                <div className="proj-grid">
                    {shown.map((p, i) => (
                        <ProjectCard key={p.id} p={p} index={i} />
                    ))}
                </div>
                {!shown.length ? <p className="dim center">No projects match your search.</p> : null}
            </section>

            <footer className="foot">
                <span>{displayName}</span>
                <span>{fetchedAt ? `Synced from Inkference ${fetchedAt.slice(0, 10)}` : "Data from Inkference"}</span>
            </footer>
        </>
    );
}

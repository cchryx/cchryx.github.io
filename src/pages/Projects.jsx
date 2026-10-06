import React, { useMemo, useState } from "react";
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import { SectionHead } from "../components/Hud";
import { projects, stageLabel, displayName, fetchedAt } from "../lib/data";

export default function Projects() {
    const [filter, setFilter] = useState("ALL");
    const [q, setQ] = useState("");

    const stages = useMemo(() => ["ALL", ...Array.from(new Set(projects.map(stageLabel)))], []);

    const shown = projects.filter((p) => {
        if (filter !== "ALL" && stageLabel(p) !== filter) return false;
        const t = q.trim().toLowerCase();
        if (!t) return true;
        const hay = [p.title, p.summary, ...(p.skills || []).map((s) => s.name)].join(" ").toLowerCase();
        return hay.includes(t);
    });

    return (
        <>
            <Nav />
            <section className="sec sec-top">
                <SectionHead no="//" title="ALL MISSIONS" sub={`${projects.length} projects logged by ${displayName}`} />

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
                        placeholder="SEARCH MISSIONS OR SKILLS..."
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                </div>

                <div className="proj-grid">
                    {shown.map((p, i) => (
                        <ProjectCard key={p.id} p={p} index={i} />
                    ))}
                </div>
                {!shown.length ? <p className="mono dim center">NO MISSIONS MATCH THIS SEARCH.</p> : null}
            </section>

            <footer className="foot mono">
                <span>{`RX-CC // ${displayName.toUpperCase()}`}</span>
                <span>{fetchedAt ? `DATA SYNCED FROM INKFERENCE ${fetchedAt.slice(0, 10)}` : "DATA: SAVED COPY"}</span>
            </footer>
        </>
    );
}

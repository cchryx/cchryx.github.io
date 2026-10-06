import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import MechHead from "../components/MechHead";
import ProjectCard from "../components/ProjectCard";
import { Hud, SectionHead, Tag } from "../components/Hud";
import {
    me,
    projects,
    skills,
    experience,
    fetchedAt,
    levelPct,
    fmtMonth,
    hostOf,
    imgUrl,
    totalViews,
    displayName,
} from "../lib/data";
import resumePDF from "../assets/PDFs/chrischenresume.pdf";

const bioParts = (me.bio || "").split(/\n\s*\n/).filter(Boolean);

const FEATURED = 3;

export default function Landing() {
    const loc = useLocation();
    const [heroImg, setHeroImg] = useState(true);

    useEffect(() => {
        const id = loc.state && loc.state.scrollTo;
        if (id) {
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 80);
        }
    }, [loc.state]);

    const building = projects.filter((p) => String(p.stage).toUpperCase().includes("BUILD")).length;
    const avatar = imgUrl(me.avatar);

    const stats = [
        { k: "Projects", v: projects.length },
        { k: "In development", v: building },
        { k: "Skills", v: skills.length },
        { k: "Profile views", v: totalViews },
    ];

    const featured = projects.slice(0, FEATURED);
    const ranked = skills.filter((s) => levelPct(s.level) != null);
    const others = skills.filter((s) => levelPct(s.level) == null);

    return (
        <>
            <Nav />

            {/* HERO */}
            <section className="hero" id="top">
                <div className="hero-grid">
                    <div className="hero-copy">
                        <p className="eyebrow">
                            <span className="dot" /> Toronto, Canada
                        </p>
                        <h1 className="hero-title">{displayName}</h1>
                        <p className="hero-sub">
                            {me.headline && me.headline.title
                                ? `${me.headline.title} at ${me.headline.organization}`
                                : "Builder, roboticist and computer science student at the University of Toronto."}
                        </p>
                        <p className="hero-lead">I design and build software and robots, and I ship projects people actually use.</p>
                        <div className="hero-actions">
                            <button
                                className="btn"
                                onClick={() => document.getElementById("missions").scrollIntoView({ behavior: "smooth" })}
                            >
                                View projects
                            </button>
                            <a className="btn btn-ghost" href={resumePDF} download="chrischenresume.pdf">
                                Download resume
                            </a>
                        </div>
                    </div>

                    <div className="hero-art" aria-hidden="true">
                        <div className="stage">
                            <span className="ring ring-1" />
                            <span className="ring ring-2" />
                            {heroImg ? (
                                <img
                                    className="stage-img"
                                    src={`${process.env.PUBLIC_URL}/assets/mecha.jpg`}
                                    alt=""
                                    onError={() => setHeroImg(false)}
                                />
                            ) : (
                                <MechHead />
                            )}
                        </div>
                    </div>
                </div>
                <ul className="hero-stats">
                    {stats.map((s) => (
                        <li key={s.k}>
                            <b>{s.v.toLocaleString()}</b>
                            <small>{s.k}</small>
                        </li>
                    ))}
                </ul>
            </section>

            {/* 01 PILOT */}
            <section className="sec" id="pilot">
                <SectionHead no="01" title="About" sub="A little about me." />
                <div className="pilot-grid">
                    <Hud tone="blue" className="pilot-card">
                        <div className="pilot-avatar">
                            {avatar ? <img src={avatar} alt={displayName} /> : <MechHead />}
                        </div>
                        <dl className="spec">
                            <div>
                                <dt>Name</dt>
                                <dd>{displayName}</dd>
                            </div>
                            <div>
                                <dt>Username</dt>
                                <dd>@{me.username || "cchryx"}</dd>
                            </div>
                            <div>
                                <dt>Location</dt>
                                <dd>Toronto, ON</dd>
                            </div>
                            <div>
                                <dt>School</dt>
                                <dd>University of Toronto</dd>
                            </div>
                        </dl>
                    </Hud>
                    <Hud tone="blue" className="pilot-bio">
                        <h3 className="panel-title">Bio</h3>
                        {bioParts.map((t, i) => (
                            <p key={i}>{t}</p>
                        ))}
                        {me.profileUrl ? (
                            <a className="btn btn-sm" href={me.profileUrl} target="_blank" rel="noreferrer">
                                View Inkference profile
                            </a>
                        ) : null}
                    </Hud>
                </div>
            </section>

            {/* 02 MISSIONS */}
            <section className="sec" id="missions">
                <SectionHead no="02" title="Projects" sub="Recent work, pulled live from Inkference." />
                <div className="proj-grid">
                    {featured.map((p, i) => (
                        <ProjectCard key={p.id} p={p} index={i} />
                    ))}
                </div>
                <div className="center">
                    <Link className="btn" to="/projects">
                        See all {projects.length} projects
                    </Link>
                </div>
            </section>

            {/* 03 SYSTEMS */}
            <section className="sec" id="systems">
                <SectionHead no="03" title="Skills" sub="What I work with and how well." />
                <Hud tone="yellow" className="systems">
                    {ranked.length ? (
                        <ul className="bars">
                            {ranked.map((s) => (
                                <li key={s.name}>
                                    <div className="bar-top">
                                        <span>{s.name}</span>
                                        <small >
                                            {String(s.level).charAt(0).toUpperCase() + String(s.level).slice(1).toLowerCase()}
                                            {s.usingNow ? " · In use" : ""}
                                        </small>
                                    </div>
                                    <div className="bar">
                                        <i style={{ width: `${levelPct(s.level)}%` }} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                    {others.length ? (
                        <>
                            <h3 className="panel-title">Also familiar with</h3>
                            <ul className="chips chips-lg">
                                {others.map((s) => (
                                    <li key={s.name}>{s.name}</li>
                                ))}
                            </ul>
                        </>
                    ) : null}
                </Hud>
            </section>

            {/* 04 RECORD */}
            <section className="sec" id="record">
                <SectionHead no="04" title="Experience" sub="Roles and responsibilities." />
                <ol className="timeline">
                    {experience.map((e) => {
                        const title =
                            e.title || (e.positions && e.positions[0] && e.positions[0].title) || (e.project && e.project.title);
                        const org = e.organization || (e.project && e.project.title) || "";
                        const start = fmtMonth(e.startDate || (e.positions && e.positions[0] && e.positions[0].startDate));
                        const end = fmtMonth(e.endDate);
                        return (
                            <li key={e.id}>
                                <span className="tl-dot" />
                                <Hud tone={e.current ? "yellow" : "blue"} className="tl-card">
                                    <div className="tl-top">
                                        <h3>{title}</h3>
                                        {e.current ? <Tag tone="yellow">Current</Tag> : null}
                                    </div>
                                    <p className="tl-org">{org}</p>
                                    {start ? (
                                        <p className="dim sm">
                                            {start} to {e.current ? "Present" : end || ""}
                                        </p>
                                    ) : null}
                                    {e.description ? <p>{e.description}</p> : null}
                                </Hud>
                            </li>
                        );
                    })}
                </ol>
            </section>

            {/* 06 OFF DUTY */}
            <section className="sec" id="offduty">
                <SectionHead no="05" title="Beyond code" sub="Skateboarding and art." />
                <div className="off-grid">
                    <Hud tone="blue" className="off-card">
                        <div className="off-media">
                            <video autoPlay muted loop playsInline>
                                <source
                                    src="https://res.cloudinary.com/decele1ao/video/upload/v1721074684/Project%20Helios/Skateboarding/k2ernznsxoomrz14mcz1.mov"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <h3 className="panel-title">Skateboarding</h3>
                        <p>
                            This hobby started during the summer of the pandemic. I watched many videos of cool tricks and
                            fell in love with the sport. Most summers I skated at least three hours a day with friends.
                            Next goal: land consistent tre-flips.
                        </p>
                    </Hud>
                    <Hud tone="yellow" className="off-card">
                        <div className="off-media">
                            <img
                                src="https://res.cloudinary.com/decele1ao/image/upload/v1721074791/Project%20Helios/Art/ukw1t0r0spc4aoznwdaq.png"
                                alt="Artwork by Chris"
                            />
                        </div>
                        <h3 className="panel-title">Art</h3>
                        <p>
                            I started art classes at age 7. I like realistic art and use graphite, colored pencils and
                            watercolor. I have been busy with robotics, school and code, but this is some of my past work.
                        </p>
                    </Hud>
                </div>
            </section>

            {/* 05 COMMS */}
            <section className="sec" id="comms">
                <SectionHead no="06" title="Contact" sub="Find me online." />
                <div className="comms">
                    {(me.links || []).map((l) => (
                        <a key={l.url} className="comm" href={l.url} target="_blank" rel="noreferrer">
                            <small>Link</small>
                            <b>{l.host || hostOf(l.url)}</b>
                        </a>
                    ))}
                    {me.profileUrl ? (
                        <a className="comm comm-hot" href={me.profileUrl} target="_blank" rel="noreferrer">
                            <small>Portfolio platform</small>
                            <b>inkference.app</b>
                        </a>
                    ) : null}
                </div>
            </section>

            <footer className="foot">
                <span>{`${new Date().getFullYear()} ${displayName}`}</span>
                <span>{fetchedAt ? `Data synced from Inkference ${fetchedAt.slice(0, 10)}` : "Data from Inkference"}</span>
            </footer>
        </>
    );
}

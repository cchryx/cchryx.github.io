import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
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
const FEATURED = 6;

export default function Landing() {
    const loc = useLocation();

    useEffect(() => {
        const id = loc.state && loc.state.scrollTo;
        if (id) {
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 80);
        }
    }, [loc.state]);

    const avatar = imgUrl(me.avatar);
    const banner = imgUrl(me.banner);
    const org = me.headline && me.headline.organization;
    const featured = projects.slice(0, FEATURED);
    const ranked = skills.filter((s) => levelPct(s.level) != null);
    const others = skills.filter((s) => levelPct(s.level) == null);

    return (
        <>
            <Nav />

            {/* PROFILE HEADER */}
            <section className="profile" id="top">
                <div className="profile-card">
                    <div className="profile-banner" style={banner ? { backgroundImage: `url(${banner})` } : undefined}>
                        <span className="banner-fade" />
                    </div>
                    <div className="profile-body">
                        <div className="avatar-wrap">{avatar ? <img className="avatar" src={avatar} alt={displayName} /> : <span className="avatar" />}</div>
                        <div className="profile-main">
                            <div className="profile-id">
                                <h1 className="name">{displayName}</h1>
                                <p className="handle">@{me.username || "cchryx"}</p>
                            </div>
                            <div className="profile-actions">
                                <a className="btn" href={resumePDF} download="chrischenresume.pdf">
                                    Resume
                                </a>
                                {me.profileUrl ? (
                                    <a className="btn btn-ghost" href={me.profileUrl} target="_blank" rel="noreferrer">
                                        Inkference profile
                                    </a>
                                ) : null}
                            </div>
                        </div>

                        <ul className="stat-pill">
                            <li>
                                <b>{projects.length}</b> Projects
                            </li>
                            <li>
                                <b>{skills.length}</b> Skills
                            </li>
                            <li>
                                <b>{totalViews}</b> Views
                            </li>
                        </ul>

                        <div className="bio">
                            {bioParts.map((t, i) => (
                                <p key={i}>{t}</p>
                            ))}
                        </div>

                        <div className="profile-meta">
                            {org ? (
                                <a className="work-chip" href={me.headline.organizationUrl || "#"} target="_blank" rel="noreferrer">
                                    <small>Working at</small> {org}
                                </a>
                            ) : null}
                            <span className="loc-chip">Toronto, ON</span>
                            {(me.links || []).map((l) => (
                                <a key={l.url} className="loc-chip link-chip" href={l.url} target="_blank" rel="noreferrer">
                                    {l.host || hostOf(l.url)}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <section className="sec" id="missions">
                <SectionHead no="Projects" title="Things I've built" sub="Pulled from Inkference." />
                <div className="proj-grid">
                    {featured.map((p, i) => (
                        <ProjectCard key={p.id} p={p} index={i} />
                    ))}
                </div>
                <div className="center">
                    <Link className="btn btn-ghost" to="/projects">
                        See all {projects.length} projects
                    </Link>
                </div>
            </section>

            {/* SKILLS */}
            <section className="sec" id="systems">
                <SectionHead no="Skills" title="What I work with" sub="Levels come from my Inkference profile." />
                <Hud tone="yellow" className="systems">
                    {ranked.length ? (
                        <ul className="bars">
                            {ranked.map((s) => (
                                <li key={s.name}>
                                    <div className="bar-top">
                                        <span>{s.name}</span>
                                        <small>
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

            {/* EXPERIENCE */}
            <section className="sec" id="record">
                <SectionHead no="Experience" title="Where I've worked" sub="Roles and responsibilities." />
                <ol className="timeline">
                    {experience.map((e) => {
                        const title =
                            e.title || (e.positions && e.positions[0] && e.positions[0].title) || (e.project && e.project.title);
                        const orgName = e.organization || (e.project && e.project.title) || "";
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
                                    <p className="tl-org">{orgName}</p>
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

            {/* BEYOND CODE */}
            <section className="sec" id="offduty">
                <SectionHead no="Beyond code" title="Off the keyboard" sub="Skateboarding and art." />
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

            {/* CONTACT */}
            <section className="sec" id="comms">
                <SectionHead no="Contact" title="Say hello" sub="Find me online." />
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

import React from "react";
import { Hud, Tag } from "./Hud";
import { fmtMonth, imgUrl, linkList, stageLabel, stageTone } from "../lib/data";

export default function ProjectCard({ p }) {
    const banner = imgUrl(p.banner);
    const icon = imgUrl(p.icon);
    const start = fmtMonth(p.startDate);
    const end = fmtMonth(p.endDate);
    const when = start ? `${start} to ${end || "Now"}` : null;
    const links = linkList(p);
    const views = p.stats && p.stats.views;
    const likes = p.stats && p.stats.likes;

    return (
        <Hud className="proj" tone={stageTone(p)}>
            {banner ? (
                <div className="proj-banner">
                    <img src={banner} alt="" loading="lazy" />
                </div>
            ) : null}
            <div className="proj-body">
                <div className="proj-top">
                    {icon ? <img className="proj-icon" src={icon} alt="" loading="lazy" /> : <span className="proj-icon proj-icon-empty" />}
                    <div className="proj-head">
                        <h3>{p.title}</h3>
                        {when ? <p className="dim sm">{when}</p> : null}
                    </div>
                    <Tag tone={stageTone(p)}>{stageLabel(p)}</Tag>
                </div>
                {p.role ? <p className="role">{p.role}</p> : null}
                {p.summary ? <p className="proj-sum">{p.summary}</p> : null}
                {p.skills && p.skills.length ? (
                    <ul className="chips">
                        {p.skills.slice(0, 6).map((s) => (
                            <li key={s.name}>{s.name}</li>
                        ))}
                    </ul>
                ) : null}
                <div className="proj-foot">
                    <span className="dim sm">
                        {views != null ? `${views} views` : ""}
                        {likes != null ? `  ·  ${likes} likes` : ""}
                    </span>
                    <div className="proj-actions">
                        {links.slice(0, 2).map((l) => (
                            <a key={l.url} className="btn btn-sm btn-ghost" href={l.url} target="_blank" rel="noreferrer">
                                {l.label}
                            </a>
                        ))}
                        {p.url ? (
                            <a className="btn btn-sm" href={p.url} target="_blank" rel="noreferrer">
                                View
                            </a>
                        ) : null}
                    </div>
                </div>
            </div>
        </Hud>
    );
}

import React from "react";
import { Hud, Tag } from "./Hud";
import { fmtMonth, imgUrl, linkList, stageLabel, stageTone } from "../lib/data";

export default function ProjectCard({ p, index = 0 }) {
    const banner = imgUrl(p.banner);
    const icon = imgUrl(p.icon);
    const start = fmtMonth(p.startDate);
    const end = fmtMonth(p.endDate);
    const when = start ? `${start} > ${end || "NOW"}` : null;
    const links = linkList(p);

    return (
        <Hud className="proj" tone={stageTone(p)}>
            <div className="proj-banner">
                {banner ? (
                    <img src={banner} alt="" loading="lazy" />
                ) : (
                    <div className="proj-banner-empty">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                )}
                <div className="proj-scan" />
                <Tag tone={stageTone(p)}>{stageLabel(p)}</Tag>
            </div>
            <div className="proj-body">
                <div className="proj-top">
                    {icon ? <img className="proj-icon" src={icon} alt="" loading="lazy" /> : null}
                    <div>
                        <h3>{p.title}</h3>
                        {when ? <p className="mono dim">{when}</p> : null}
                    </div>
                </div>
                {p.summary ? <p className="proj-sum">{p.summary}</p> : null}
                {p.skills && p.skills.length ? (
                    <ul className="chips">
                        {p.skills.slice(0, 6).map((s) => (
                            <li key={s.name}>{s.name}</li>
                        ))}
                    </ul>
                ) : null}
                <div className="proj-actions">
                    {p.url ? (
                        <a className="btn btn-sm" href={p.url} target="_blank" rel="noreferrer">
                            Open on Inkference
                        </a>
                    ) : null}
                    {links.map((l) => (
                        <a key={l.url} className="btn btn-sm btn-ghost" href={l.url} target="_blank" rel="noreferrer">
                            {l.label}
                        </a>
                    ))}
                </div>
            </div>
        </Hud>
    );
}

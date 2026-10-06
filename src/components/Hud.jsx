import React from "react";

/** A panel with cut corners and a thin glowing edge. */
export function Hud({ children, className = "", tone = "blue", ...rest }) {
    return (
        <div className={`hud hud-${tone} ${className}`} {...rest}>
            <div className="hud-in">{children}</div>
        </div>
    );
}

/** Section title with a number, like a system menu. */
export function SectionHead({ no, title, sub }) {
    return (
        <div className="sec-head">
            <span className="sec-no">{no}</span>
            <div>
                <h2 className="sec-title">{title}</h2>
                {sub ? <p className="sec-sub">{sub}</p> : null}
            </div>
            <span className="sec-line" />
        </div>
    );
}

/** A small label that looks like a status tag. */
export function Tag({ tone = "blue", children }) {
    return <span className={`tag tag-${tone}`}>{children}</span>;
}

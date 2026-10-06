import React from "react";

/** A clean card with a thin gold edge. */
export function Hud({ children, className = "", tone = "blue", ...rest }) {
    return (
        <div className={`card card-${tone} ${className}`} {...rest}>
            <div className="card-in">{children}</div>
        </div>
    );
}

/** Section title with a small numbered label. */
export function SectionHead({ no, title, sub }) {
    return (
        <div className="sec-head">
            <span className="sec-no">{no}</span>
            <h2 className="sec-title">{title}</h2>
            {sub ? <p className="sec-sub">{sub}</p> : null}
        </div>
    );
}

/** A small status label. */
export function Tag({ tone = "blue", children }) {
    return <span className={`tag tag-${tone}`}>{children}</span>;
}

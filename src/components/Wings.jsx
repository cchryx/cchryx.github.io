import React from "react";

const PIVOT = [200, 196];
const BACK = [[200, 66], [220, 54], [232, 42], [236, 30], [232, 18], [222, 6], [206, -6], [186, -18]];
const MID = [[150, 62], [166, 48], [174, 34], [174, 20], [166, 6], [152, -6], [134, -18]];
const FRONT = [[96, 56], [106, 40], [108, 24], [102, 8], [90, -6]];

function Feather({ len, angle, fill, stroke = "#c9a24a" }) {
    const l = len;
    const d = `M0,0 C${-l * 0.1},${-l * 0.16} ${-l * 0.55},${-l * 0.17} ${-l},0 C${-l * 0.55},${l * 0.1} ${-l * 0.1},${l * 0.1} 0,0 Z`;
    return (
        <g transform={`translate(${PIVOT[0]} ${PIVOT[1]}) rotate(${angle})`}>
            <path d={d} fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round" />
            <path d={`M${-l * 0.08},0 L${-l * 0.9},0`} stroke={stroke} strokeWidth="0.6" opacity="0.5" />
        </g>
    );
}

function Wing() {
    return (
        <g>
            {BACK.map(([l, a], i) => (
                <Feather key={`b${i}`} len={l} angle={a} fill="url(#wg-back)" />
            ))}
            {MID.map(([l, a], i) => (
                <Feather key={`m${i}`} len={l} angle={a} fill="url(#wg-white)" />
            ))}
            {FRONT.map(([l, a], i) => (
                <Feather key={`f${i}`} len={l} angle={a} fill="url(#wg-gold)" stroke="#8f6a14" />
            ))}
        </g>
    );
}

/** White and gold wings with a halo ring, sized to sit behind a portrait. */
export default function Wings({ className = "" }) {
    return (
        <svg className={`wings ${className}`} viewBox="-60 -20 520 440" aria-hidden="true">
            <defs>
                <linearGradient id="wg-white" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#ffffff" />
                    <stop offset="1" stopColor="#d9d1bd" />
                </linearGradient>
                <linearGradient id="wg-back" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#d8d0bb" />
                    <stop offset="1" stopColor="#ffffff" />
                </linearGradient>
                <linearGradient id="wg-gold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#fff3c2" />
                    <stop offset="0.5" stopColor="#e0b23a" />
                    <stop offset="1" stopColor="#8f6a14" />
                </linearGradient>
            </defs>
            <Wing />
            <g transform="translate(400 0) scale(-1 1)">
                <Wing />
            </g>
        </svg>
    );
}

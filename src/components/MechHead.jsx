import React from "react";

/*
 * Original angelic white and gold mecha, drawn in SVG.
 * Layered feather wings, a winged helmet with a halo, ornate shoulder armor and a flowing robe.
 */

const PIVOT = [152, 214];

// Feather rows: [length, angle in degrees, fill]
const BACK = [
    [190, -78], [200, -64], [205, -50], [200, -36], [190, -22], [175, -8], [155, 6], [135, 20],
];
const MID = [
    [140, -70], [150, -55], [152, -40], [146, -25], [136, -10], [120, 4], [104, 18],
];
const FRONT = [
    [86, -62], [92, -46], [92, -30], [86, -14], [76, 2],
];

function Feather({ len, angle, fill, stroke = "#b8923a", w = 1.2 }) {
    const l = len;
    const d = `M0,0 C${-l * 0.12},${-l * 0.075} ${-l * 0.5},${-l * 0.085} ${-l},0 C${-l * 0.5},${l * 0.06} ${-l * 0.12},${l * 0.06} 0,0 Z`;
    return (
        <g transform={`translate(${PIVOT[0]} ${PIVOT[1]}) rotate(${angle})`}>
            <path d={d} fill={fill} stroke={stroke} strokeWidth={w} strokeLinejoin="round" />
            <path d={`M${-l * 0.08},0 L${-l * 0.9},0`} stroke={stroke} strokeWidth="0.7" opacity="0.55" />
        </g>
    );
}

function Wing() {
    return (
        <g>
            {BACK.map(([l, a], i) => (
                <Feather key={`b${i}`} len={l} angle={a} fill="url(#ma-wing-back)" />
            ))}
            {MID.map(([l, a], i) => (
                <Feather key={`m${i}`} len={l} angle={a} fill="url(#ma-white)" />
            ))}
            {FRONT.map(([l, a], i) => (
                <Feather key={`f${i}`} len={l} angle={a} fill="url(#ma-gold)" stroke="#8a6f1c" />
            ))}
        </g>
    );
}

const SPARKS = [
    [40, 110, 2.2], [78, 60, 1.6], [330, 80, 2], [362, 150, 1.5], [60, 330, 1.8], [345, 300, 2.2],
    [110, 410, 1.5], [300, 430, 1.8], [24, 230, 1.4], [378, 240, 1.6], [200, 14, 1.6], [250, 30, 1.2],
];

export default function MechHead({ className = "" }) {
    return (
        <svg className={`mech-head ${className}`} viewBox="-30 -6 460 492" role="img" aria-label="Angelic white and gold mecha">
            <defs>
                <linearGradient id="ma-white" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#ffffff" />
                    <stop offset="1" stopColor="#d9d1bd" />
                </linearGradient>
                <linearGradient id="ma-wing-back" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#e9e2cf" />
                    <stop offset="1" stopColor="#ffffff" />
                </linearGradient>
                <linearGradient id="ma-gold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#fff3c2" />
                    <stop offset="0.45" stopColor="#e0b23a" />
                    <stop offset="1" stopColor="#8f6a14" />
                </linearGradient>
                <linearGradient id="ma-dark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#2a2418" />
                    <stop offset="1" stopColor="#0a0907" />
                </linearGradient>
                <linearGradient id="ma-robe" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#d9d1bd" stopOpacity="0.1" />
                </linearGradient>
                <radialGradient id="ma-core" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0" stopColor="#ffffff" />
                    <stop offset="0.5" stopColor="#ffe28a" />
                    <stop offset="1" stopColor="#e0b23a" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="ma-rays" cx="0.5" cy="0.45" r="0.6">
                    <stop offset="0" stopColor="#ffe9a8" stopOpacity="0.5" />
                    <stop offset="1" stopColor="#ffe9a8" stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* glow and light rays */}
            <circle cx="200" cy="200" r="210" fill="url(#ma-rays)" />
            <g stroke="#ffe9a8" strokeWidth="1" opacity="0.25">
                <line x1="200" y1="200" x2="200" y2="-20" />
                <line x1="200" y1="200" x2="60" y2="-10" />
                <line x1="200" y1="200" x2="340" y2="-10" />
                <line x1="200" y1="200" x2="-10" y2="80" />
                <line x1="200" y1="200" x2="410" y2="80" />
            </g>

            {/* halo ring behind the head */}
            <circle cx="200" cy="112" r="92" fill="none" stroke="#e0b23a" strokeWidth="1.2" opacity="0.55" />
            <circle cx="200" cy="112" r="102" fill="none" stroke="#e0b23a" strokeWidth="0.8" strokeDasharray="2 6" opacity="0.6" />

            {/* wings */}
            <Wing />
            <g transform="translate(400 0) scale(-1 1)">
                <Wing />
            </g>

            {/* robe */}
            <path
                d="M150,300 C130,370 112,430 96,480 L304,480 C288,430 270,370 250,300 Z"
                fill="url(#ma-robe)"
                stroke="#b8923a"
                strokeWidth="1"
                opacity="0.9"
            />
            <g stroke="#b8923a" strokeWidth="0.8" opacity="0.5" fill="none">
                <path d="M176,330 C170,390 160,430 150,480" />
                <path d="M200,340 L200,480" />
                <path d="M224,330 C230,390 240,430 250,480" />
            </g>

            {/* torso */}
            <path d="M162,176 L238,176 L252,228 L238,300 L200,334 L162,300 L148,228 Z" fill="url(#ma-white)" stroke="#b8923a" strokeWidth="2" />
            <path d="M172,188 L200,214 L228,188 L222,236 L200,262 L178,236 Z" fill="url(#ma-gold)" stroke="#8f6a14" strokeWidth="1.5" />
            <path d="M186,270 L214,270 L208,300 L200,312 L192,300 Z" fill="url(#ma-gold)" stroke="#8f6a14" strokeWidth="1.2" />
            <g stroke="#b8923a" strokeWidth="1.2" fill="none" opacity="0.8">
                <path d="M160,250 L186,262" />
                <path d="M240,250 L214,262" />
                <path d="M164,276 L190,284" />
                <path d="M236,276 L210,284" />
            </g>
            <circle cx="200" cy="232" r="18" fill="url(#ma-core)" />
            <circle cx="200" cy="232" r="5" fill="#ffffff" />

            {/* belt */}
            <path d="M166,300 L234,300 L226,318 L200,330 L174,318 Z" fill="url(#ma-gold)" stroke="#8f6a14" strokeWidth="1.5" />

            {/* shoulder armor, both sides */}
            {[false, true].map((flip) => (
                <g key={flip ? "r" : "l"} transform={flip ? "translate(400 0) scale(-1 1)" : ""}>
                    <path d="M164,184 L118,190 L96,224 L108,256 L150,262 L168,232 Z" fill="url(#ma-white)" stroke="#b8923a" strokeWidth="2" />
                    <path d="M118,190 L96,224 L108,256 L122,252 L112,226 L130,196 Z" fill="url(#ma-gold)" stroke="#8f6a14" strokeWidth="1.2" />
                    <path d="M150,198 L126,204 L114,226 L124,244 L150,246 Z" fill="none" stroke="#b8923a" strokeWidth="1" opacity="0.7" />
                    <path d="M100,236 L134,262 L118,282 L98,262 Z" fill="url(#ma-gold)" stroke="#8f6a14" strokeWidth="1.2" />
                </g>
            ))}

            {/* neck */}
            <path d="M188,160 L212,160 L216,178 L184,178 Z" fill="#1a160e" stroke="#b8923a" strokeWidth="1.2" />

            {/* helmet fins, both sides */}
            {[false, true].map((flip) => (
                <g key={flip ? "hr" : "hl"} transform={flip ? "translate(400 0) scale(-1 1)" : ""}>
                    <path d="M182,70 L146,4 L172,22 L190,60 Z" fill="url(#ma-white)" stroke="#b8923a" strokeWidth="1.6" />
                    <path d="M174,96 L110,58 L160,86 Z" fill="url(#ma-gold)" stroke="#8f6a14" strokeWidth="1.2" />
                    <path d="M172,108 L122,90 L166,100 Z" fill="url(#ma-white)" stroke="#b8923a" strokeWidth="1" />
                </g>
            ))}

            {/* helmet */}
            <path d="M200,52 L230,66 L238,100 L234,128 L220,150 L200,162 L180,150 L166,128 L162,100 L170,66 Z" fill="url(#ma-white)" stroke="#b8923a" strokeWidth="2.2" />
            <path d="M186,60 L214,60 L210,84 L190,84 Z" fill="url(#ma-gold)" stroke="#8f6a14" strokeWidth="1.2" />
            <polygon points="200,38 207,58 200,70 193,58" fill="url(#ma-gold)" stroke="#8f6a14" strokeWidth="1.2" />

            {/* visor and eyes */}
            <path d="M174,96 L226,96 L222,122 L200,132 L178,122 Z" fill="url(#ma-dark)" stroke="#b8923a" strokeWidth="1.6" />
            <polygon className="mh-eye" points="181,106 197,110 195,118 184,116" fill="#ffd45a" />
            <polygon className="mh-eye" points="219,106 203,110 205,118 216,116" fill="#ffd45a" />

            {/* cheek and chin */}
            <g stroke="#b8923a" strokeWidth="1.4" opacity="0.9">
                <line x1="168" y1="134" x2="182" y2="138" />
                <line x1="232" y1="134" x2="218" y2="138" />
            </g>
            <polygon points="190,138 210,138 206,154 200,158 194,154" fill="url(#ma-gold)" stroke="#8f6a14" strokeWidth="1" />

            {/* halo */}
            <ellipse className="ma-halo" cx="200" cy="34" rx="50" ry="10" fill="none" stroke="#fff1b8" strokeWidth="3" />
            <ellipse cx="200" cy="34" rx="50" ry="10" fill="none" stroke="#e0b23a" strokeWidth="0.8" />

            {/* sparks */}
            {SPARKS.map(([x, y, r], i) => (
                <circle key={i} className="ma-spark" style={{ animationDelay: `${(i % 6) * 0.5}s` }} cx={x} cy={y} r={r} fill="#ffe28a" />
            ))}
        </svg>
    );
}

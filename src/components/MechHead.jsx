import React from "react";

/** An original angelic white mecha bust with gold trim, wings and a halo, drawn in SVG. */
export default function MechHead({ className = "" }) {
    const wing = (flip) => (
        <g transform={flip ? "translate(400 0) scale(-1 1)" : ""}>
            <polygon points="140,150 20,60 40,110 8,120 44,160 22,190 70,200 60,236 150,210" fill="url(#ma-white)" stroke="#b8923a" strokeWidth="2" />
            <polygon points="150,160 52,98 70,138 40,148 76,178 56,200 100,204 150,196" fill="#fffaf0" opacity="0.9" />
            <polygon points="130,150 34,70 50,112" fill="url(#ma-gold)" />
            <polygon points="120,200 60,236 100,230" fill="url(#ma-gold)" />
        </g>
    );
    return (
        <svg className={`mech-head ${className}`} viewBox="0 0 400 330" role="img" aria-label="Angelic white mecha">
            <defs>
                <linearGradient id="ma-white" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#ffffff" />
                    <stop offset="1" stopColor="#cfc8b6" />
                </linearGradient>
                <linearGradient id="ma-gold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#fff1b8" />
                    <stop offset="0.5" stopColor="#e0b23a" />
                    <stop offset="1" stopColor="#9a7416" />
                </linearGradient>
                <linearGradient id="ma-dark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#2a2418" />
                    <stop offset="1" stopColor="#0c0b10" />
                </linearGradient>
            </defs>

            {wing(false)}
            {wing(true)}

            {/* halo */}
            <ellipse className="ma-halo" cx="200" cy="34" rx="60" ry="12" fill="none" stroke="#fff1b8" strokeWidth="4" />

            {/* shoulders and chest */}
            <polygon points="120,262 160,226 240,226 280,262 292,330 108,330" fill="url(#ma-white)" stroke="#b8923a" strokeWidth="2" />
            <polygon points="150,250 200,236 250,250 236,330 164,330" fill="url(#ma-gold)" opacity="0.9" />
            <polygon points="186,262 214,262 208,300 192,300" fill="#fffaf0" />
            <polygon points="104,248 150,232 140,276 96,284" fill="url(#ma-gold)" stroke="#8a6f1c" strokeWidth="2" />
            <polygon points="296,248 250,232 260,276 304,284" fill="url(#ma-gold)" stroke="#8a6f1c" strokeWidth="2" />

            {/* horn crest (V fin) */}
            <polygon points="168,92 140,16 184,78" fill="url(#ma-white)" stroke="#b8923a" strokeWidth="2" />
            <polygon points="232,92 260,16 216,78" fill="url(#ma-white)" stroke="#b8923a" strokeWidth="2" />
            <polygon points="200,80 190,40 200,8 210,40" fill="url(#ma-gold)" stroke="#8a6f1c" strokeWidth="1.5" />

            {/* helmet */}
            <polygon points="150,92 250,92 266,150 254,206 226,232 174,232 146,206 134,150" fill="url(#ma-white)" stroke="#b8923a" strokeWidth="3" />
            <polygon points="162,98 238,98 246,124 154,124" fill="url(#ma-gold)" stroke="#8a6f1c" strokeWidth="2" />

            {/* visor */}
            <polygon points="154,134 246,134 236,176 164,176" fill="url(#ma-dark)" stroke="#b8923a" strokeWidth="2" />
            <polygon className="mh-eye" points="164,144 190,144 188,158 168,160" fill="#ffd45a" />
            <polygon className="mh-eye" points="236,144 210,144 212,158 232,160" fill="#ffd45a" />

            {/* cheek and chin */}
            <g stroke="#b8923a" strokeWidth="3">
                <line x1="152" y1="186" x2="172" y2="186" />
                <line x1="156" y1="196" x2="176" y2="196" />
                <line x1="248" y1="186" x2="228" y2="186" />
                <line x1="244" y1="196" x2="224" y2="196" />
            </g>
            <polygon points="184,200 216,200 210,226 190,226" fill="url(#ma-gold)" stroke="#8a6f1c" strokeWidth="1.5" />
        </svg>
    );
}

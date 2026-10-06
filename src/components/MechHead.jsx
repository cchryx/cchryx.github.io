import React from "react";

/** An original mecha helmet drawn in SVG. */
export default function MechHead({ className = "" }) {
    return (
        <svg className={`mech-head ${className}`} viewBox="0 0 200 230" role="img" aria-label="Mecha helmet">
            <defs>
                <linearGradient id="mh-white" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#ffffff" />
                    <stop offset="1" stopColor="#b9c4da" />
                </linearGradient>
                <linearGradient id="mh-dark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#1a2548" />
                    <stop offset="1" stopColor="#0a1030" />
                </linearGradient>
            </defs>

            {/* side sensor pods */}
            <rect x="22" y="98" width="18" height="52" fill="#9fb0d2" stroke="#27407f" strokeWidth="2" />
            <rect x="160" y="98" width="18" height="52" fill="#9fb0d2" stroke="#27407f" strokeWidth="2" />
            <rect x="26" y="110" width="10" height="8" fill="#ffd23f" />
            <rect x="164" y="110" width="10" height="8" fill="#ffd23f" />

            {/* centre crest */}
            <polygon points="100,4 114,56 86,56" fill="#ffd23f" stroke="#a37d00" strokeWidth="2" />
            <polygon points="100,16 106,50 94,50" fill="#fff3b0" />

            {/* helmet shell */}
            <polygon
                points="50,58 150,58 164,112 154,172 130,204 70,204 46,172 36,112"
                fill="url(#mh-white)"
                stroke="#27407f"
                strokeWidth="3"
            />
            {/* forehead plate */}
            <polygon points="68,64 132,64 138,92 62,92" fill="#2b6cff" stroke="#173a96" strokeWidth="2" />
            <polygon points="76,70 124,70 126,78 74,78" fill="#6a9bff" />

            {/* visor */}
            <polygon points="58,102 142,102 132,134 68,134" fill="url(#mh-dark)" stroke="#27407f" strokeWidth="2" />
            <polygon className="mh-eye" points="66,112 134,112 128,124 72,124" fill="#4de8ff" />

            {/* cheek vents */}
            <g stroke="#7d8db3" strokeWidth="3">
                <line x1="54" y1="146" x2="74" y2="146" />
                <line x1="56" y1="156" x2="76" y2="156" />
                <line x1="60" y1="166" x2="78" y2="166" />
                <line x1="146" y1="146" x2="126" y2="146" />
                <line x1="144" y1="156" x2="124" y2="156" />
                <line x1="140" y1="166" x2="122" y2="166" />
            </g>

            {/* chin */}
            <polygon points="80,170 120,170 112,200 88,200" fill="#e5333a" stroke="#8d1217" strokeWidth="2" />
            <rect x="94" y="176" width="12" height="18" fill="#ffd23f" />
        </svg>
    );
}

import React, { useEffect, useState } from "react";

const LINES = [
    "MOBILE SUIT OS  //  BOOT SEQUENCE",
    "> CHECKING PILOT LINK ............ OK",
    "> CALIBRATING MINOVSKY-FREE SENSORS . OK",
    "> LOADING INKFERENCE DATA ........ OK",
    "> ARMING PORTFOLIO SYSTEMS ....... OK",
    "ALL SYSTEMS GREEN. LAUNCH.",
];

/** A short start-up screen. Shows once per visit. Click or press a key to skip. */
export default function Boot() {
    const seen = (() => {
        try {
            return sessionStorage.getItem("boot-seen") === "1";
        } catch (e) {
            return false;
        }
    })();
    const reduce =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const [done, setDone] = useState(seen || reduce);
    const [count, setCount] = useState(1);
    const [leaving, setLeaving] = useState(false);

    const finish = () => {
        setLeaving(true);
        try {
            sessionStorage.setItem("boot-seen", "1");
        } catch (e) {
            // ignore
        }
        setTimeout(() => setDone(true), 450);
    };

    useEffect(() => {
        if (done) return undefined;
        const t = setInterval(() => {
            setCount((c) => {
                if (c >= LINES.length) {
                    clearInterval(t);
                    setTimeout(finish, 500);
                    return c;
                }
                return c + 1;
            });
        }, 330);
        const skip = () => finish();
        window.addEventListener("keydown", skip);
        return () => {
            clearInterval(t);
            window.removeEventListener("keydown", skip);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [done]);

    if (done) return null;
    return (
        <div className={`boot ${leaving ? "boot-out" : ""}`} onClick={finish}>
            <div className="boot-box">
                {LINES.slice(0, count).map((l, i) => (
                    <p key={i} className={i === 0 ? "boot-title" : ""}>
                        {l}
                    </p>
                ))}
                <span className="boot-cursor" />
                <p className="boot-skip">CLICK TO SKIP</p>
            </div>
        </div>
    );
}

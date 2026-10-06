// Reads src/data/inkference.json (filled by scripts/fetch-inkference.js)
// and gives the pages clean, safe values to use.
import raw from "../data/inkference.json";

export const me = raw.me || {};
export const fetchedAt = raw.fetchedAt || null;
export const projects = Array.isArray(raw.projects) ? raw.projects : [];
export const skills = Array.isArray(raw.skills) ? raw.skills : [];
export const experience = Array.isArray(raw.experience) ? raw.experience : [];

const LEVELS = { beginner: 25, novice: 25, intermediate: 55, advanced: 80, expert: 100 };

/** 0 to 100 for a skill level, or null when no level is saved. */
export function levelPct(level) {
    if (level == null || level === "") return null;
    if (typeof level === "number") return Math.max(5, Math.min(100, level <= 5 ? level * 20 : level));
    return LEVELS[String(level).toLowerCase()] ?? null;
}

/** Mecha-style label for a project stage. */
export function stageLabel(p) {
    const s = String(p.stage || p.status || "").toUpperCase();
    if (s.includes("BUILD")) return "IN DEVELOPMENT";
    if (s.includes("SHIP") || s.includes("COMPLETE") || s.includes("LIVE")) return "DEPLOYED";
    if (s.includes("IDEA") || s.includes("PLAN")) return "IN PLANNING";
    return s || "ARCHIVED";
}

export function stageTone(p) {
    const l = stageLabel(p);
    if (l === "IN DEVELOPMENT") return "yellow";
    if (l === "DEPLOYED") return "blue";
    return "red";
}

export function fmtMonth(iso) {
    if (!iso) return null;
    const d = new Date(iso);
    if (isNaN(d)) return null;
    return d.toLocaleDateString("en-CA", { year: "numeric", month: "short" }).toUpperCase();
}

export function hostOf(url) {
    try {
        return new URL(url).hostname.replace(/^www\./, "");
    } catch (e) {
        return url;
    }
}

export const imgUrl = (img) => (img ? (typeof img === "string" ? img : img.url) : null);

/** Project links come in a few shapes. Always return [{label, url}]. */
export function linkList(p) {
    const out = [];
    (p.links || []).forEach((l) => {
        const url = typeof l === "string" ? l : l && (l.url || l.href);
        if (!url || !/^https?:\/\//i.test(url)) return;
        out.push({ url, label: (l && (l.label || l.title || l.name)) || hostOf(url) });
    });
    return out.slice(0, 3);
}

export const totalViews = projects.reduce((n, p) => n + ((p.stats && p.stats.views) || 0), 0);

export const displayName = me.name || "Chris Chen";

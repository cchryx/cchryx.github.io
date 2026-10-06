// Pulls your public data from the Inkference API and saves it to
// src/data/inkference.json. It runs before "npm start" and "npm run build".
//
// Your key is read from the INKFERENCE_API_KEY environment variable, or from
// a line in .env.local:   INKFERENCE_API_KEY=ink_live_...
// The key is only used here, on your computer. It is never put in the website.
// If there is no key or the API cannot be reached, the saved data is kept.

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "src", "data", "inkference.json");
const BASE = (process.env.INKFERENCE_API_URL || "https://inkference.app/api/v1").replace(/\/$/, "");

function readKey() {
    if (process.env.INKFERENCE_API_KEY) return process.env.INKFERENCE_API_KEY.trim();
    try {
        const text = fs.readFileSync(path.join(ROOT, ".env.local"), "utf8");
        const line = text.split(/\r?\n/).find((l) => l.startsWith("INKFERENCE_API_KEY="));
        if (line) return line.slice("INKFERENCE_API_KEY=".length).trim().replace(/^["']|["']$/g, "");
    } catch (e) {
        // no .env.local, that is fine
    }
    return "";
}

const KEY = readKey();

async function get(route) {
    const res = await fetch(BASE + route, { headers: { Authorization: `Bearer ${KEY}` } });
    if (!res.ok) {
        let msg = res.statusText;
        try {
            msg = (await res.json()).error.message;
        } catch (e) {
            // not json
        }
        throw new Error(`${route}: ${res.status} ${msg}`);
    }
    return res.json();
}

async function getAll(route) {
    const items = [];
    let cursor = null;
    do {
        const json = await get(`${route}?limit=100${cursor ? `&cursor=${cursor}` : ""}`);
        items.push(...json.data);
        cursor = json.nextCursor || null;
    } while (cursor);
    return items;
}

(async () => {
    if (!KEY) {
        console.log("[inkference] No INKFERENCE_API_KEY found. Using the saved data in src/data/inkference.json.");
        return;
    }
    try {
        const [me, projects, skills, experience] = await Promise.all([
            get("/me").then((j) => j.data),
            getAll("/projects"),
            get("/skills").then((j) => j.data),
            get("/experience").then((j) => j.data),
        ]);
        const data = { fetchedAt: new Date().toISOString(), me, projects, skills, experience };
        fs.mkdirSync(path.dirname(OUT), { recursive: true });
        fs.writeFileSync(OUT, JSON.stringify(data, null, 2));
        console.log(
            `[inkference] Saved ${projects.length} projects, ${skills.length} skills and ${experience.length} experience entries.`
        );
    } catch (err) {
        console.warn(`[inkference] Could not load from the API (${err.message}). Using the saved data.`);
    }
})();

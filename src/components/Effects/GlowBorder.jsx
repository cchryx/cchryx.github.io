import "./effects.css";

export default function GlowBorder({ children, borderRadius }) {
    return (
        <>
            <div
                className="E_glowBorder"
                style={{ borderRadius: borderRadius }}
            >
                {children}
            </div>
        </>
    );
}

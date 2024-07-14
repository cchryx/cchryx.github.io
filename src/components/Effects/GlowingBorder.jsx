import { useEffect, useState, useRef } from "react";
import "./effects.css";

function GlowingBorder(props) {
    let [borderRad, setBorderRad] = useState("0px");
    let [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current && containerRef.current.firstChild) {
            const firstChild = containerRef.current.firstChild;
            const computedStyle = getComputedStyle(firstChild);
            setBorderRad(computedStyle.borderRadius);

            const rect = firstChild.getBoundingClientRect();
            setDimensions({ width: rect.width, height: rect.height });
        }
    }, [props.children, borderRad]);

    const glowBorderStyles = {
        borderRadius: borderRad,
        background: "#191c29",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        color: "rgb(88 199 250 / 0%)",
    };

    const glowBorderBeforeStyles = {
        borderRadius: borderRad,
        padding: `${dimensions.height * 0.52}px ${dimensions.width * 0.52}px`,
        backgroundImage:
            "linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2)",
        position: "absolute",
        zIndex: "-1",
        top: "-2%",
        left: "-2%",
        animation: "spin 2.5s linear infinite",
    };

    const glowBorderAfterStyles = {
        borderRadius: borderRad,
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "-1",
        height: dimensions.height + 30,
        width: dimensions.width + 30,
        margin: "0 auto",
        transform: "scale(0.8)",
        filter: "blur(90px)",
        backgroundImage:
            "linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2)",
        opacity: "1",
        transition: "opacity 0.5s",
        animation: "spin 2.5s linear infinite",
    };

    return (
        <div>
            <div ref={containerRef} style={glowBorderStyles}>
                {props.children}
                <div style={glowBorderBeforeStyles}></div>
                <div style={glowBorderAfterStyles}></div>
            </div>
        </div>
    );
}

export default GlowingBorder;

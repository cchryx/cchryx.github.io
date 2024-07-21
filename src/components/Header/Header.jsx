import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./header.css"; // Make sure to include your CSS file

export default function Header({ headerText, imgSrc, jumpLink }) {
    // Header Text Animation
    useEffect(() => {
        const headerTxt = document.getElementById("header_text");
        const words = headerTxt.textContent.split(" ");
        headerTxt.innerHTML = words
            .map(
                (word, index) =>
                    `<span style="animation: A_fadeIn 0.8s ${
                        0.1 * index
                    }s forwards cubic-bezier(0.11, 0, 0.5, 0);">${word}</span>`
            )
            .join(" ");
    }, []);

    // Sparke Animation
    const [sparklesCreated, setSparklesCreated] = useState(false);

    useEffect(() => {
        if (!sparklesCreated) {
            // Number of sparkles to be created
            const numSparkles = 40;

            // Get all sparkle boxes
            const sparkleBoxes = document.querySelectorAll(".sparkle-box");

            // Function to create a sparkle
            function createSparkle() {
                // Create a sparkle element
                const sparkle = document.createElement("div");
                sparkle.classList.add("sparkle");
                sparkle.style.left = Math.random() * 100 + "%"; // Random left position
                sparkle.style.top = Math.random() * 100 + "%"; // Random top position

                // Append the sparkle to the sparkle box
                this.appendChild(sparkle);
            }

            // Add sparkles to each sparkle box
            sparkleBoxes.forEach((item) => {
                // Add sparkles based on the number
                for (let i = 0; i < numSparkles; i++) {
                    createSparkle.call(item); // Call the function in the context of the sparkle box
                }
            });

            // Set the state to true to prevent further sparkle creation
            setSparklesCreated(true);
        }
    }, [sparklesCreated]); // Dependency array includes sparklesCreated

    return (
        <div className="header_container sparkle-box">
            <img id="header_img" src={imgSrc} alt="header_img" />
            <h1 id="header_text">{headerText}</h1>
            <div id="downArrow_container">
                <a href={`#${jumpLink}`}>
                    <FontAwesomeIcon
                        id="downArrow"
                        icon={faAngleDown}
                        size="xl"
                    />
                </a>
            </div>
        </div>
    );
}

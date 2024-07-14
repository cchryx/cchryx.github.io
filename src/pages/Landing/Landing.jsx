import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./landing.css";
import {
    faAngleDown,
    faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FadeInSection from "../../components/Effects/FadeInSection";
import GlowingBorder from "../../components/Effects/GlowingBorder";

function Landing() {
    const [navbarHeight, setNavbarHeight] = useState(0);

    // Calculate navbar height and store it in state
    useEffect(() => {
        const navbar = document.querySelector(".navbar_container");
        if (navbar) {
            setNavbarHeight(navbar.offsetHeight);
        }
    }, []);

    // Smooth Scrolling
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();

                const targetElement = document.querySelector(
                    this.getAttribute("href")
                );

                const offset = navbarHeight + 40; // Adjust this value as needed
                const elementPosition =
                    targetElement.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            });
        });
    }, [navbarHeight]);

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
        <>
            <Navbar />
            <div className="header_container sparkle-box">
                <img
                    id="landing_header"
                    src={require("../../assets/landing_header.png")}
                    alt="landing_header"
                />
                <h1 id="header_text">
                    Welcome to my personal portfolio. Dive in and explore more
                    about me and my projects.
                </h1>
                <div id="downArrow_container">
                    <a href="#section1">
                        <FontAwesomeIcon
                            id="downArrow"
                            icon={faAngleDown}
                            size="xl"
                        />
                    </a>
                </div>
                <FadeInSection>
                    <div className="section_container" id="section1">
                        <div id="meImg_container">
                            <GlowingBorder>
                                <img
                                    id="meImg"
                                    src="https://res.cloudinary.com/decele1ao/image/upload/v1720844653/Project%20Helios/cc.rix1.jpg"
                                    alt="cc.rix1"
                                />
                            </GlowingBorder>
                        </div>
                        <div className="text_template1">
                            <div className="typewriter">
                                <h1>Hello! My name is Chris.👋</h1>
                            </div>
                            <p>
                                I am currently a high school student at Dr.
                                Norman Bethune C.I. in Scarborough, Ontario,
                                expected to graduate in 2025. I am very
                                passionate about problem-solving and innovation,
                                which is why I love <u>programming</u> and{" "}
                                <u>robotics</u>, where I continually seek to
                                expand my skills and knowledge.
                            </p>
                            <br />
                            <br />
                            <ul id="contents_list">
                                <li>
                                    <a href="/">
                                        <p>Resume</p>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faArrowRightLong}
                                            />
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <p>Projects and accomplishments</p>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faArrowRightLong}
                                            />
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <p>Other hobbies and interests</p>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faArrowRightLong}
                                            />
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="section_container" id="section2">
                        Hello
                    </div>
                </FadeInSection>
            </div>
        </>
    );
}

export default Landing;

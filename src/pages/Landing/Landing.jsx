import "./landing.css";

import React, { useEffect, useState } from "react";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "../../components/Navbar/Navbar";
import FadeInSection from "../../components/Effects/FadeInSection";
import GlowingBorder from "../../components/Effects/GlowingBorder";
import Header from "../../components/Header/Header";

import landing_header from "../../assets/headers/landing_header.png"; // Import an image

export default function Landing() {
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

    return (
        <>
            <Navbar />
            <Header
                imgSrc={landing_header}
                headerText={
                    "Welcome to my personal portfolio. Dive in and explore more about me and my projects."
                }
            />
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
                            I am currently a high school student at Dr. Norman
                            Bethune C.I. in Scarborough, Ontario, expected to
                            graduate in 2025. I am very passionate about
                            problem-solving and innovation, which is why I love{" "}
                            <u>programming</u> and <u>robotics</u>, where I
                            continually seek to expand my skills and knowledge.
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
                                <a href="/projects">
                                    <p>Projects and accomplishments</p>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faArrowRightLong}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#section2">
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
        </>
    );
}

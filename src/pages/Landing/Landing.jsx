import "./landing.css";

import React, { useEffect, useState } from "react";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "../../components/Navbar/Navbar";
import FadeInSection from "../../components/Effects/FadeInSection";
import GlowingBorder from "../../components/Effects/GlowingBorder";
import Header from "../../components/Header/Header";

import landing_header from "../../assets/headers/landing_header.png"; // Import an image
import Box1 from "../../components/Effects/Boxes/Box1";

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
                            <u>
                                <b>programming</b>
                            </u>
                            ,{" "}
                            <u>
                                <b>engineering</b>
                            </u>
                            , and{" "}
                            <u>
                                <b>robotics</b>
                            </u>
                            , where I continually seek to expand my skills and
                            knowledge.
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
                                <a href="#section2">
                                    <p>Projects and accomplishments</p>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faArrowRightLong}
                                        />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#section3">
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
                    For programming and engineering and robotics overview
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="section_container" id="section3">
                    <Box1>
                        <h1 className="box_title">Skateboarding</h1>
                        <p className="box_desc">
                            Argument: Raising funds for increased public safety
                            through taxes or borrowing can have economic
                            repercussions. Higher taxes or increased debt might
                            burden businesses and individuals, potentially
                            stifling economic growth and reducing overall
                            quality of life.
                        </p>
                        <br />
                        <br />
                        <u>
                            <a href="#section4" className="q_link">
                                &#9654; Next: Art
                            </a>
                        </u>
                        <br />
                        <u>
                            <a href="#section2" className="q_link">
                                &#9654; Projects and Accomplishments:
                                Programming, Engineering and Robotics
                            </a>
                        </u>
                    </Box1>
                    <div id="skateVideo">
                        <GlowingBorder width={382} height={450}>
                            <video autoPlay={true} muted loop>
                                <source
                                    src="https://res.cloudinary.com/decele1ao/video/upload/v1721074684/Project%20Helios/Skateboarding/k2ernznsxoomrz14mcz1.mov"
                                    type="video/mp4"
                                />
                            </video>
                        </GlowingBorder>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="section_container" id="section4">
                    <div id="artImg">
                        <GlowingBorder>
                            <img
                                src="https://res.cloudinary.com/decele1ao/image/upload/v1721074791/Project%20Helios/Art/ukw1t0r0spc4aoznwdaq.png"
                                alt="artImg"
                            />
                        </GlowingBorder>
                    </div>
                    <Box1 className="box">
                        <h1 className="box_title">Art</h1>
                        <p className="box_desc">
                            Argument: Raising funds for increased public safety
                            through taxes or borrowing can have economic
                            repercussions. Higher taxes or increased debt might
                            burden businesses and individuals, potentially
                            stifling economic growth and reducing overall
                            quality of life.
                        </p>
                        <br />
                        <br />
                        <u>
                            <a href="#section3" className="q_link">
                                &#9654; Previous: Skateboarding
                            </a>
                        </u>
                        <br />
                        <u>
                            <a href="#section2" className="q_link">
                                &#9654; Projects and Accomplishments:
                                Programming, Engineering and Robotics
                            </a>
                        </u>
                    </Box1>
                </div>
            </FadeInSection>
        </>
    );
}

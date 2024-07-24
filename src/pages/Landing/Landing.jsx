import "./landing.css";

import React, { useEffect, useState } from "react";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "../../components/Navbar/Navbar";
import FadeInSection from "../../components/Effects/FadeInSection";
import GlowBorder from "../../components/Effects/GlowBorder";
import Header from "../../components/Header/Header";
import Box1 from "../../components/Boxes/Box1";

import landing_header from "../../assets/headers/landing_header.png";
import resumePDF from "../../assets/PDFs/chrischenresume.pdf";

export default function Landing() {
    const mobile = window.innerWidth < 1200;
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

                const offset = navbarHeight - 40; // Adjust this value as needed
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

    return (
        <>
            <Navbar />
            <Header
                imgSrc={landing_header}
                headerText={
                    "Welcome to my personal portfolio. Dive in and explore more about me and my projects."
                }
                jumpLink="section1"
            />
            <FadeInSection>
                <div className="section_container" id="section1">
                    <div id="meImg_container">
                        <GlowBorder borderRadius={mobile ? 20 : 50}>
                            <img
                                id="meImg"
                                src="https://res.cloudinary.com/decele1ao/image/upload/v1720844653/Project%20Helios/cc.rix1.jpg"
                                alt="cc.rix1"
                            />
                        </GlowBorder>
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
                                <a
                                    href={resumePDF}
                                    download="chrischenresume.pdf"
                                >
                                    <p>Resume (PDF Download)</p>
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
                <div
                    className="section_container"
                    id="section2"
                    style={{ flexDirection: "column" }}
                >
                    <GlowBorder borderRadius={mobile ? 20 : 50}>
                        <div id="PERImg_container">
                            <img
                                src="https://res.cloudinary.com/decele1ao/image/upload/v1721145052/Project%20Helios/PER/czaqpchumqrxz7aokgud.png"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/decele1ao/image/upload/v1721144937/Project%20Helios/PER/nrjzrrxmew89rtis8z5o.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/decele1ao/image/upload/v1721144934/Project%20Helios/PER/j7rpr9woxmj9dclmulei.jpg"
                                alt=""
                            />
                        </div>
                    </GlowBorder>
                    <div id="PERImg_text">
                        <h1>My Projects and Accomplishments</h1>
                        <h2>Programming, Engineering, and Robotics</h2>
                        <p>
                            I am a curious and adventurous individual, always
                            eager to explore new opportunities and continually
                            learn and discover new things. In the world of
                            programming, engineering, and robotics, I have found
                            limitless potential for innovation and creativity,
                            constantly inspiring me to learn and grow. I like to
                            think of all my experiences as a boundless universe,
                            where every project and accomplishment ignites
                            another star that enlightens the universe. Although
                            not every project goes as planned, as long as I've
                            learned something and had fun, it is more than
                            enough. Feel free to check out my projects and
                            accomplishments in the link below!
                        </p>
                        <br />
                        <u>
                            <a href="/#/projects" className="q_link">
                                &#9654; View my projects and accomplishments
                            </a>
                        </u>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="section_container" id="section3">
                    <Box1>
                        <h1 className="box_title">Skateboarding</h1>
                        <p className="box_desc">
                            This hobby started during the summer of the pandemic
                            when there was nothing to do. After trying out
                            skateboarding and watching many videos of others
                            doing cool tricks, I immediately fell in love with
                            the sport. Nearly every day during the following
                            summers, besides coding, I would be skateboarding
                            for at least three hours a day, practicing and
                            trying new tricks at the skatepark and enjoying time
                            with friends. Hopefully, I can land consistent
                            tre-flips in the near future! 🛹
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
                        <GlowBorder borderRadius={mobile ? 20 : 50}>
                            <video autoPlay={true} muted loop>
                                <source
                                    src="https://res.cloudinary.com/decele1ao/video/upload/v1721074684/Project%20Helios/Skateboarding/k2ernznsxoomrz14mcz1.mov"
                                    type="video/mp4"
                                />
                            </video>
                        </GlowBorder>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="section_container" id="section4">
                    <div id="artImg">
                        <GlowBorder borderRadius={mobile ? 20 : 50}>
                            <img
                                src="https://res.cloudinary.com/decele1ao/image/upload/v1721074791/Project%20Helios/Art/ukw1t0r0spc4aoznwdaq.png"
                                alt="artImg"
                            />
                        </GlowBorder>
                    </div>
                    <Box1 className="box">
                        <h1 className="box_title">Art</h1>
                        <p className="box_desc">
                            I began art classes at age 7 and unexpectedly
                            enjoyed visual arts and drawing. I love creating
                            things and using various tools and media to bring
                            ideas to life. Realistic art appeals to me for its
                            technical skill and attention to detail. My favorite
                            media are graphite, colored pencils, and watercolor.
                            However, due to my commitments to robotics, school,
                            and programming, I haven't created any recent art
                            pieces. Here is a gallery of some of my past work.
                        </p>
                        <br />
                        <br />
                        <u>
                            <a href="/" className="q_link">
                                &#9654; Artwork Gallery
                            </a>
                        </u>
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

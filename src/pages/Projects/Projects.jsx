import React, { useEffect, useState } from "react";
import "./projects.css";

import projects_header from "../../assets/headers/projects_header.png";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import GlowBorder from "../../components/Effects/GlowBorder";

export default function Projects() {
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

    return (
        <>
            <Navbar />
            <Header
                imgSrc={projects_header}
                headerText={"Explore my projects and accomplishments."}
                jumpLink="mainSection"
            />
            <div className="section_container" id="mainSection">
                <div className="projects_container">
                    <GlowBorder borderRadius={20}>
                        <div className="box">
                            <img
                                style={{ height: 200 }}
                                src="https://res.cloudinary.com/decele1ao/image/upload/v1720844653/Project%20Helios/cc.rix1.jpg"
                                alt="cc.rix1"
                            />
                        </div>
                    </GlowBorder>

                    <div className="box">Box 1</div>
                    <div className="box">Box 1</div>
                    <div className="box">Box 1</div>
                    <div className="box">Box 1</div>
                    <div className="box">Box 1</div>
                    <div className="box">Box 1</div>
                </div>
            </div>
        </>
    );
}

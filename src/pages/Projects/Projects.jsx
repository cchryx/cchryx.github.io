import React, { useEffect, useState } from "react";
import "./projects.css";

import projects_header from "../../assets/headers/projects_header.png";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import ProjetctsListRender from "./ProjetctsListRender";
import { skillsCount, projCount } from "./ProjectsListData";

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
                imgSrc={projects_header}
                headerText={"Explore my projects and accomplishments."}
                jumpLink="mainSection"
            />
            <div
                className="section_container"
                id="mainSection"
                style={{ display: "block" }}
            >
                <div className="stats_container">
                    <div className="stat_bubble">
                        <h1>{skillsCount.toLocaleString()}</h1>
                        <p>Skills Recorded</p>
                    </div>
                    <div className="stat_bubble">
                        <h1>{projCount.toLocaleString()}</h1>
                        <p>Projects Recorded</p>
                    </div>
                </div>
                <h1 className="F_aquire section_header">Robotics</h1>
                <div className="projects_container">
                    <ProjetctsListRender list="robotics" />
                </div>
            </div>
            <div className="section_container" style={{ display: "block" }}>
                <h1 className="F_aquire section_header">Progamming</h1>
                <div className="projects_container">
                    <ProjetctsListRender list="programming" />
                </div>
            </div>
            <div className="section_container" style={{ display: "block" }}>
                <h1 className="F_aquire section_header">Engineering</h1>
                <div className="projects_container">
                    <ProjetctsListRender list="engineering" />
                </div>
            </div>
        </>
    );
}

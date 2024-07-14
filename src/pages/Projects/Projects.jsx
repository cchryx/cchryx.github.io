import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./projects.css";

function Projects() {
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
    // useEffect(() => {
    //     const headerTxt = document.getElementById("header_text");
    //     const words = headerTxt.textContent.split(" ");
    //     headerTxt.innerHTML = words
    //         .map(
    //             (word, index) =>
    //                 `<span style="animation: A_fadeIn 0.8s ${
    //                     0.1 * index
    //                 }s forwards cubic-bezier(0.11, 0, 0.5, 0);">${word}</span>`
    //         )
    //         .join(" ");
    // }, []);

    return (
        <>
            <Navbar />
            <div>hello</div>
        </>
    );
}

export default Projects;

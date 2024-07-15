import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./navbar.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Navbar() {
    // Scroll navbar visibility
    useEffect(() => {
        const navbar = document.querySelector(".navbar_wrapper");

        window.addEventListener("scroll", function () {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollThreshold = windowHeight * 0.1;

            if (scrollPosition > scrollThreshold) {
                navbar.style.backgroundColor = "rgb(27, 32, 48)";
                navbar.style.boxShadow =
                    "0px 0px 10px 0px rgba(60, 103, 227, 0.9)";
            } else {
                navbar.style.backgroundColor = "transparent";
                navbar.style.boxShadow = "none";
            }
        });
    });

    return (
        <div className="navbar_container">
            <div className="navbar_wrapper">
                <a href={`/`}>
                    <div className="navbar_left">
                        <img
                            id="navbar-logo"
                            src={require("../../assets/helios.png")}
                            alt="heliosLogo"
                        />
                        <div>
                            <h1 className="F_aquire">Portfolio</h1>
                            <p>Devoloped By Chris Chen</p>
                        </div>
                    </div>
                </a>
                <div className="navbar_right">
                    <ul id="page-links">
                        <li>
                            <a href={`/`}>Landing</a>
                        </li>
                        <li>
                            <a href={`/projects`}>Projects</a>
                        </li>
                    </ul>
                    <ul id="social-links">
                        <li>
                            <a href="https://github.com/cchryx" target="_">
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    size="lg"
                                    className="social-link"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/chris-chen-a69924288/"
                                target="_"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    size="lg"
                                    className="social-link"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto: chris.chen878@gmail.com"
                                target="_"
                            >
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    size="lg"
                                    className="social-link"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/cc.rix/"
                                target="_"
                            >
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    size="lg"
                                    className="social-link"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

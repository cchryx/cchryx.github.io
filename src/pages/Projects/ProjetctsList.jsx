import FadeInSection from "../../components/Effects/FadeInSection";
import GlowBorder from "../../components/Effects/GlowBorder";

const tagsList = {
    ReactJS: {
        icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721584570/Project%20Helios/Icons/reactjs.png",
        color: null,
    },
    "HTML/CSS": {
        icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721583516/Project%20Helios/Icons/htmlcss.png",
        color: null,
    },
    Javascript: {
        icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721584715/Project%20Helios/Icons/javascript.png",
        color: null,
    },
    Java: {
        icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721585527/Project%20Helios/Icons/java.png",
        color: null,
    },
    OpenCV: {
        icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721584715/Project%20Helios/Icons/opencv.png",
        color: null,
    },
    TensorFlow: {
        icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721584715/Project%20Helios/Icons/tensorflow.png",
        color: null,
    },
    Devolotics: {
        icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721584715/Project%20Helios/Icons/devolotics.png",
        color: null,
    },
    SSA: {
        icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721584715/Project%20Helios/Icons/ssa.png",
        color: null,
    },
    Python: {
        icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721584715/Project%20Helios/Icons/python.png",
        color: null,
    },
    Pygame: {
        icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721584715/Project%20Helios/Icons/pygame.png",
        color: null,
    },
    Arduino: {
        icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721584715/Project%20Helios/Icons/arduino.png",
        color: null,
    },
    PHP: {
        icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721584715/Project%20Helios/Icons/php.png",
        color: null,
    },
    DiscordJS: {
        icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721584715/Project%20Helios/Icons/discordjs.png",
        color: null,
    },
    MongoDB: {
        icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721584715/Project%20Helios/Icons/mongodb.png",
        color: null,
    },
    Heroku: {
        icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721584715/Project%20Helios/Icons/heroku.png",
        color: null,
    },
    Onshape: {
        icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721584715/Project%20Helios/Icons/onshape.png",
        color: null,
    },
};

const projectsList = {
    robotics: [
        {
            coverImg:
                "https://res.cloudinary.com/decele1ao/image/upload/v1721144934/Project%20Helios/PER/j7rpr9woxmj9dclmulei.jpg",
            title: "FTC Centerstage Competitive Robot (PLUTO)",
            date: "Jun 2023 - Apr 2024",
            tags: ["Java", "TensorFlow", "OpenCV", "Onshape", "Devolotics"],
            caption:
                "This was my first year in robotics, and I served as a builder and programmer for my FIRST Tech Challenge team, 19498 Devolotics. After 10 months worth of hard work, we placed #2 in Ontario for the FIRST Tech Challenge and competed at the 2024 World Championships in Houston, Texas. I contributed to the mechanical design and programming of our robot, PLUTO. This robot featured a mecanum drivetrain, angled slides, a surgical tubing intake, a pixel (scoring element) storage and deposit system with 2 degrees of motion, a hanging system, a drone (paper airplane) launcher, and an autonomous program that allowed the robot to navigate the playing field and score points without a human driver.",
            link: "robotics_ftc_centerstage",
        },
        {
            coverImg:
                "https://res.cloudinary.com/dfcuj6dei/image/upload/v1708278573/Outreach/Summer%20Bot%20Camps/1.jpg",
            title: "Scarborough STEM Alliance",
            date: "Jun 2023 - Present",
            tags: ["SSA", "Devolotics"],
            caption:
                "My team, 19498 Devolotics, aimed to spread robotics and STEM in our community to inspire younger students. To achieve this, we founded and operated the non-profit organization Scarborough STEM Alliance (SSA). Through SSA, we have reached thousands of students by hosting workshops in FIRST Lego League (FLL) and P5.JS coding at summer camps, libraries, community centers, and schools. As of 2024, we have expanded our operations beyond our community. Our initiatives include members traveling to China to host workshops and sending custom-made mini Arduino robots. We partner with outreach organizations, such as Just Cause Canada, to send these kits to Uganda. I serve as an operations executive, creating lesson plans, and as a volunteer coordinator, training volunteers. I strongly believe our initiative is impactful and life-changing, providing students with valuable experiences in STEM and robotics.",
            links: [
                {
                    tag: "SSA Instagram",
                    url: "https://www.instagram.com/scarborough.stem.alliance/",
                    icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721694277/Project%20Helios/Icons/instagram.png",
                },
                {
                    tag: "SSA Workshop Gallery",
                    url: "https://devolotics.github.io/pages/outreach.html",
                    icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721695587/Project%20Helios/Icons/website.png",
                },
            ],
        },
    ],
    engineering: [
        {
            coverImg:
                "https://res.cloudinary.com/decele1ao/image/upload/v1721144937/Project%20Helios/PER/nrjzrrxmew89rtis8z5o.jpg",
            title: "Bicopter",
            date: "Dec 2023 - Jan 2024",
            tags: ["Arduino"],
            caption: "[Add Caption]",
        },
    ],
    programming: [
        {
            coverImg:
                "https://res.cloudinary.com/decele1ao/image/upload/v1721584905/Project%20Helios/Projects/personalwebsite.png",
            title: "Personal Website",
            date: "Jul 2024",
            tags: ["ReactJS", "HTML/CSS", "Javascript"],
            caption: "[Add Caption]",
            links: [
                {
                    tag: "Source Code",
                    url: "https://github.com/cchryx/cchryx.github.io",
                    icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721921637/Project%20Helios/Icons/link.png",
                },
            ],
        },
        {
            coverImg:
                "https://res.cloudinary.com/decele1ao/image/upload/v1721589616/Project%20Helios/Projects/devoloticswebsite.png",
            title: "Devolotics Website",
            date: "Jul 2023 - Present",
            tags: ["Devolotics", "HTML/CSS", "Javascript"],
            caption: "[Add Caption]",
            links: [
                {
                    tag: "Source Code",
                    url: "https://github.com/cchryx/Devolotics_Website",
                    icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721921637/Project%20Helios/Icons/link.png",
                },
            ],
        },
        {
            coverImg:
                "https://res.cloudinary.com/decele1ao/image/upload/v1721590342/Project%20Helios/Projects/storyofstarboy.png",
            title: "Story of Star Boy RPG",
            date: "Jun 2024",
            tags: ["Python", "Pygame"],
            caption: "[Add Caption]",
            links: [
                {
                    tag: "Source Code",
                    url: "https://github.com/cchryx/StoryOfStarBoy",
                    icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721921637/Project%20Helios/Icons/link.png",
                },
            ],
        },
        {
            coverImg:
                "https://res.cloudinary.com/decele1ao/image/upload/v1721589831/Project%20Helios/Projects/noutes.png",
            title: "Noutes",
            date: "Oct 2023",
            tags: ["PHP", "HTML/CSS", "Javascript"],
            caption: "[Add Caption]",
            links: [
                {
                    tag: "Source Code",
                    url: "https://github.com/cchryx/Noutes",
                    icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721921637/Project%20Helios/Icons/link.png",
                },
            ],
        },
        {
            coverImg:
                "https://res.cloudinary.com/decele1ao/image/upload/v1721589111/Project%20Helios/Projects/dankex.png",
            title: "Dank Exclusive (Discord Bot)",
            date: "Jul 2022 - Sep 2023",
            tags: ["DiscordJS", "Javascript", "MongoDB", "Heroku"],
            caption: "[Add Caption]",
            links: [
                {
                    tag: "Source Code",
                    url: "https://github.com/cchryx/Dank_Exclusive",
                    icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721921637/Project%20Helios/Icons/link.png",
                },
            ],
        },
        {
            coverImg:
                "https://res.cloudinary.com/decele1ao/image/upload/v1721589111/Project%20Helios/Projects/xenon.png",
            title: "Xenon Economy (Discord Bot)",
            date: "Jun 2022 - Sep 2022",
            tags: ["DiscordJS", "Javascript", "MongoDB", "Heroku"],
            caption: "[Add Caption]",
            links: [
                {
                    tag: "Source Code",
                    url: "https://github.com/cchryx/Xenon",
                    icon: "https://res.cloudinary.com/decele1ao/image/upload/v1721921637/Project%20Helios/Icons/link.png",
                },
            ],
        },
    ],
};

export default function ProjectsList({ list }) {
    return (
        <>
            {projectsList[list].map((proj, index) => (
                <FadeInSection key={`${index}`}>
                    <div>
                        <GlowBorder borderRadius={20}>
                            {proj.link ? (
                                <a href={proj.link}>
                                    {" "}
                                    <div
                                        className={`proj_container ${
                                            proj.link ? "proj_linked" : null
                                        }`}
                                    >
                                        <div className="img_container">
                                            <img
                                                className="cover_img"
                                                src={proj.coverImg}
                                                alt="Project cover"
                                            />
                                            <div className="img_frost"></div>
                                        </div>
                                        <div className="proj_desc">
                                            <div className="top">
                                                <h1>{proj.title}</h1>
                                                <p>{proj.date}</p>
                                            </div>
                                            <ul className="tags">
                                                {proj.tags.map((tag) => {
                                                    const fetchTag =
                                                        tagsList[tag] || null;
                                                    return (
                                                        <li key={tag}>
                                                            {fetchTag &&
                                                            fetchTag.icon ? (
                                                                <>
                                                                    <img
                                                                        src={
                                                                            fetchTag.icon
                                                                        }
                                                                        alt=""
                                                                    />
                                                                    <p>{tag}</p>
                                                                </>
                                                            ) : (
                                                                tag
                                                            )}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                            <p className="proj_caption">
                                                {proj.caption}
                                            </p>
                                        </div>
                                    </div>{" "}
                                </a>
                            ) : (
                                <div
                                    className={`proj_container ${
                                        proj.link ? "proj_linked" : null
                                    }`}
                                >
                                    <div className="img_container">
                                        <img
                                            className="cover_img"
                                            src={proj.coverImg}
                                            alt="Project cover"
                                        />
                                        <div className="img_frost"></div>
                                    </div>
                                    <div className="proj_desc">
                                        <div className="top">
                                            <h1>{proj.title}</h1>
                                            <p>{proj.date}</p>
                                        </div>
                                        <ul className="tags">
                                            {proj.tags.map((tag) => {
                                                const fetchTag =
                                                    tagsList[tag] || null;
                                                return (
                                                    <li key={tag}>
                                                        {fetchTag &&
                                                        fetchTag.icon ? (
                                                            <>
                                                                <img
                                                                    src={
                                                                        fetchTag.icon
                                                                    }
                                                                    alt=""
                                                                />
                                                                <p>{tag}</p>
                                                            </>
                                                        ) : (
                                                            tag
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                        <p className="proj_caption">
                                            {proj.caption}
                                        </p>
                                        {proj.links ? (
                                            <ul className="link_container">
                                                {proj.links.map((l, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <a
                                                                href={l.url}
                                                                target="_"
                                                            >
                                                                <img
                                                                    src={l.icon}
                                                                    alt=""
                                                                />
                                                                <p>{l.tag}</p>
                                                            </a>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        ) : null}
                                    </div>
                                </div>
                            )}
                        </GlowBorder>
                    </div>
                </FadeInSection>
            ))}
        </>
    );
}

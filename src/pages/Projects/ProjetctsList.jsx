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
};

const projectsList_R = [
    {
        coverImg:
            "https://res.cloudinary.com/decele1ao/image/upload/v1721144934/Project%20Helios/PER/j7rpr9woxmj9dclmulei.jpg",
        title: "FTC Centerstage Competative Robot (PLUTO)",
        date: "Jun 2023 - Apr 2024",
        tags: ["Java", "TensorFlow", "OpenCV", "Devolotics"],
        caption: "[Add Caption]",
    },
    {
        coverImg:
            "https://res.cloudinary.com/dfcuj6dei/image/upload/v1708278573/Outreach/Summer%20Bot%20Camps/1.jpg",
        title: "Scarborough STEM Alliance",
        date: "Jun 2023 - Present",
        tags: ["SSA", "Devolotics"],
        caption: "[Add Caption]",
    },
];

const projectsList_E = [
    {
        coverImg:
            "https://res.cloudinary.com/decele1ao/image/upload/v1721144937/Project%20Helios/PER/nrjzrrxmew89rtis8z5o.jpg",
        title: "Bicopter",
        date: "Dec 2023 - Jan 2024",
        tags: ["Arduino"],
        caption: "[Add Caption]",
    },
];

const projectsList_P = [
    {
        coverImg:
            "https://res.cloudinary.com/decele1ao/image/upload/v1721584905/Project%20Helios/Projects/personalwebsite.png",
        title: "Personal Website",
        date: "Jul 2024",
        tags: ["ReactJS", "HTML/CSS", "Javascript"],
        caption: "[Add Caption]",
    },
    {
        coverImg:
            "https://res.cloudinary.com/decele1ao/image/upload/v1721589616/Project%20Helios/Projects/devoloticswebsite.png",
        title: "Devolotics Website",
        date: "Jul 2023 - Present",
        tags: ["Devolotics", "HTML/CSS", "Javascript"],
        caption: "[Add Caption]",
    },
    {
        coverImg:
            "https://res.cloudinary.com/decele1ao/image/upload/v1721590342/Project%20Helios/Projects/storyofstarboy.png",
        title: "Story of Star Boy RPG",
        date: "Jun 2024",
        tags: ["Python", "Pygame"],
        caption: "[Add Caption]",
    },
    {
        coverImg:
            "https://res.cloudinary.com/decele1ao/image/upload/v1721589831/Project%20Helios/Projects/noutes.png",
        title: "Noutes",
        date: "Oct 2023",
        tags: ["PHP", "HTML/CSS", "Javascript"],
        caption: "[Add Caption]",
    },
    {
        coverImg:
            "https://res.cloudinary.com/decele1ao/image/upload/v1721589111/Project%20Helios/Projects/xenon.png",
        title: "Xenon Economy (Discord Bot)",
        date: "Jun 2022 - Sep 2022",
        tags: ["DiscordJS", "Javascript", "MongoDB", "Heroku"],
        caption: "[Add Caption]",
    },
    {
        coverImg:
            "https://res.cloudinary.com/decele1ao/image/upload/v1721589111/Project%20Helios/Projects/dankex.png",
        title: "Dank Exclusive (Discord Bot)",
        date: "Jul 2022 - Present",
        tags: ["DiscordJS", "Javascript", "MongoDB", "Heroku"],
        caption: "[Add Caption]",
    },
];

export default function ProjectsList({ list }) {
    switch (list) {
        case "robotics":
            return (
                <>
                    {projectsList_R.map((proj, index) => (
                        <div key={index}>
                            <GlowBorder borderRadius={20}>
                                <div className="proj_container">
                                    <div className="img_container">
                                        <img
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
                                        <p>{proj.caption}</p>
                                    </div>
                                </div>
                            </GlowBorder>
                        </div>
                    ))}
                </>
            );
        case "engineering":
            return (
                <>
                    {projectsList_E.map((proj, index) => (
                        <div key={index}>
                            <GlowBorder borderRadius={20}>
                                <div className="proj_container">
                                    <div className="img_container">
                                        <img
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
                                        <p>{proj.caption}</p>
                                    </div>
                                </div>
                            </GlowBorder>
                        </div>
                    ))}
                </>
            );
        case "programming":
            return (
                <>
                    {projectsList_P.map((proj, index) => (
                        <div key={index}>
                            <GlowBorder borderRadius={20}>
                                <div className="proj_container">
                                    <div className="img_container">
                                        <img
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
                                        <p>{proj.caption}</p>
                                    </div>
                                </div>
                            </GlowBorder>
                        </div>
                    ))}
                </>
            );
        default:
    }
}

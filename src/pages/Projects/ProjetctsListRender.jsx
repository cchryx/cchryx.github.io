import FadeInSection from "../../components/Effects/FadeInSection";
import GlowBorder from "../../components/Effects/GlowBorder";
import { D_ProjList, D_LogoList } from "./ProjectsListData";

export default function ProjectsListRender({ list }) {
    return (
        <>
            {D_ProjList[list].map((proj, index) => (
                <FadeInSection key={`${index}`}>
                    <div>
                        <GlowBorder borderRadius={20}>
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
                                                D_LogoList[tag] || null;
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
                        </GlowBorder>
                    </div>
                </FadeInSection>
            ))}
        </>
    );
}

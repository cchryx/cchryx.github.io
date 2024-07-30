import { D_LogoList } from "./ProjectsListData";

export default function SkillsListRender() {
    return (
        <div className="skills_container">
            {Object.keys(D_LogoList).map((key) => {
                if (!D_LogoList[key].notSkill) {
                    return (
                        <div key={key} className="skill_logo">
                            <img src={D_LogoList[key].icon} alt="" />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

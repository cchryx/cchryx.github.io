import "./boxes.css";

export default function Box1(prop, { title, description }) {
    return <div className="box1_container">{prop.children}</div>;
}

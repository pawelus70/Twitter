import React from "react";
import "./CSS/SidebarOption.css";
//Opcje bocznego pasku
function SidebarOption({ text, Icon, link, active }) {
    return (
        <a href={link}>
        <div className={`sidebarOption  ${active && "sidebarOption--active"}`} >
            <Icon />
            <h2>{text}</h2>
        </div>
            </a>
    );
}

export default SidebarOption;
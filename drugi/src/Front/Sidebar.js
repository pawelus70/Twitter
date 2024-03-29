import React from "react";
import "./CSS/Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {Button} from "@material-ui/core";

//Boczny pasek nawigacyjny z ikonami
function Sidebar() {

    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
            <SidebarOption Icon={HomeIcon} text="Home" link="/" active={true}/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOption Icon={MailOutlineIcon} text="Messages"/>

            <SidebarOption Icon={PermIdentityIcon} text="Profile" link="profile"/>
            <SidebarOption Icon={PermIdentityIcon} text="Log out" link="logout"/>

            {/*<SidebarOption Icon={PermIdentityIcon} text="Login" link="login"/>*/}
            {/*<SidebarOption Icon={PermIdentityIcon} text="Register" link="register"/>*/}

            <SidebarOption Icon={MoreHorizIcon} text="More"/>
            <Button variant="outlined" className="sidebar__tweet" fullWidth>
                Tweet
            </Button>
        </div>
    );

}


export default Sidebar;
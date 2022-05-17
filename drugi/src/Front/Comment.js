import {Avatar} from "@material-ui/core";
import React from "react";
import "./CSS/Comment.css";

//Tworzenie commentów wyświetlające wszystkie dane
function Comment({displayName, username, text, avatar, id}) {

    return (
        <div className="comment">
            <div className="comment__avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="comment__body">
                <div className="comment__header">
                    <div className="comment__headerText">
                        <h3>
                            {displayName}{" "}
                            <span className="comment__headerSpecial">
                                {username}
                            </span>
                        </h3>
                    </div>
                    <div className="comment__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>);
}

export default Comment;
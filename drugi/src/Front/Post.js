import { Avatar } from "@material-ui/core";
import {db, auth} from "../DBconn/firebase";
import { useEffect, useState } from "react";
import {
    ChatBubbleOutline,
    FavoriteBorder,
    Favorite,
    Publish,
    Repeat,
    VerifiedUser,
} from "@material-ui/icons";
import React from "react";
import "./CSS/Post.css";

var usid; //Przechowuje uid trochę odciąża system

//Tworzenie postów wyświetlające wszystkie dane
function Post({ displayName, username, verified, text, image, avatar, id }) {

        auth.onAuthStateChanged((user) => {
            usid=user.uid;
        });
        //Stany
        const [likes, setLikes] = useState([]);
        const [liked, setLiked] = useState(false);

        //Do polubienia
        useEffect(() => {
            db.collection("posts").doc(id).collection("likes").onSnapshot((snapshot) => {
                setLikes(snapshot.docs);
            });
        }, [db, id]);

        //Polubione
        useEffect(
            () =>
                setLiked(
                    likes.findIndex((like) => like.id === usid) !== -1
                ),
            [likes]
        );

    //Ustaw polubienie
    const LikePost = async() => {
        if (liked) { //Jeżeli polubione to usuń

            db.collection("posts").doc(id).collection("likes").doc(usid).delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });

        } else { //Jeżeli nie polubione to polub

        db.collection("posts").doc(id).collection("likes").doc(usid).set({
            username: usid,
        })
            .then(() => {
                console.log("Document successfully written!");
                console.log(id);
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });


        }


    }
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}
                            <span className="post__headerSpecial">
                {verified && <VerifiedUser className="post__badge" />} @
                                {username}
              </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small" />
                    <Repeat fontSize="small" />
                    <div className="Polubienie"
                        onClick={(e) => {
                        e.stopPropagation();
                        LikePost();
                    }}>
                        {liked ? (
                            <Favorite fontSize="small"/>
                        ) : (
                            <FavoriteBorder fontSize="small"/>
                        )}
                        {likes.length > 0 && (
                            <span>
                                {likes.length}
                            </span>
                        )}
                    </div>
                    <Publish fontSize="small" />
                </div>
            </div>
        </div>
    );
}

export default Post;
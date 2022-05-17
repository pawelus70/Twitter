import React, {useEffect, useState} from "react";
import "./CSS/Modal.css";
import {db, auth} from "../DBconn/firebase";
import Comment from "./Comment.js";

var usid;

function Modal({ setOpenModal,activePostID }) {
    const [comments, setComments] = useState([]);
    const [commentMessage, setCommentMessage] = useState("");
    //Wrcuź posty na stronę
    useEffect(() => {
        db.collection("posts").doc(id).collection("comments").orderBy("date", "desc").onSnapshot((snapshot) => {
            setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);
    var id=activePostID;
    auth.onAuthStateChanged((user) => {
        usid=user.uid;
    });
    //dodanie komentarza
    const AddComment = async() => {
        auth.onAuthStateChanged((user) => {
            if (user){
                var docRef = db.collection("users").doc(usid);
                docRef.get().then((doc) => {
                    //jeśli użytkownik istnieje
                    if (doc.exists) {
                        // dodaj posta z pobranymi danymi
                        db.collection("posts").doc(id).collection("comments").doc(usid + Date.now()).set({    //********Id postów od teraz składają się z UID + DataUTC*********/////////
                            username: doc.data().firstName + " " + doc.data().lastName,
                            id: usid + Date.now(),
                            displayName: doc.data().userName,
                            avatar: doc.data().avatar,
                            text: commentMessage,
                            date: Date.now()
                        });
                        setCommentMessage("");
                    } else {
                        // brak dodatkowych danych o użytkowniku
                        console.log("Bład ");
                    };
                });
            };
        });
    };

    return (
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="commentsContainer" >
                {comments.map((comment) => (
                    <Comment
                        displayName={comment.displayName}
                        username={comment.username}
                        text={comment.text}
                        avatar={comment.avatar}
                        id={comment.id} //id postu
                    />
                ))}
                </div>
                <div className="comment__input">
                    <input
                        value={commentMessage}
                        onChange={(e) => setCommentMessage(e.target.value)}
                        placeholder="Comment"
                        type="text"
                    />
                    <button class="MuiButtonBase-root MuiButton-root MuiButton-text tweetBox__button"
                        onClick={(e) => {
                            e.stopPropagation();
                            AddComment();
                        }}>
                    Comment</button>
                </div>
            </div>
    );
}

export default Modal;
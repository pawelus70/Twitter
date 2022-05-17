import React, {useEffect, useState} from "react";
import "./CSS/ModalProfile.css";
import {db, auth} from "../DBconn/firebase";

var usid;

function ModalProfile({ setOpenModal }) {
    const [urlImage, seturlImage] = useState("");
    auth.onAuthStateChanged((user) => {
        usid=user.uid;
    });
    const ChangeImage = async() =>{
        db.collection("users").doc(usid).update({
            avatar: urlImage,
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    };
    return (
        <div className="modalContainerP">
            <div className="titleCloseBtnP">
                <button
                    onClick={() => {
                        setOpenModal(false);
                    }}>
                    X
                </button>
            </div>
            <div className="comment__input">
                <input
                    value={urlImage}
                    onChange={(e) => seturlImage(e.target.value)}
                    placeholder="Wstaw URL obrazka"
                    type="text"
                />
                <button class="MuiButtonBase-root MuiButton-root MuiButton-text tweetBox__button"
                        onClick={(e) => {
                            e.stopPropagation();
                            ChangeImage();
                            setOpenModal(false);
                        }}>
                    Zmien
                </button>
            </div>
        </div>

    );
}

export default ModalProfile;
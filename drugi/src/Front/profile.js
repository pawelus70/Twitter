import React, {useState} from "react";
import {db, auth} from "../DBconn/firebase";
import {useHistory} from "react-router-dom";
import {Avatar, Button} from "@material-ui/core";
import "./CSS/Profile.css";
import ModalProfile from "./ModalProfile.js";

var uid;

function Profile() {

    const [modalOpen, setModalOpen] = useState(false);
    var userName,firstName,lastName,avatar;
    //history push
    let history = useHistory();
    //autoryzacja
    auth.onAuthStateChanged((user) => {
        if (user) {
            uid = user.uid;
            var docRef = db.collection("users").doc(user.uid);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    setProfile( doc.data());
                   //console.log('test');
                } else {

                    console.log("No such document!");
                    history.push('/Loginn');
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
                history.push('/Loginn');
            });


        } else {
            // User is signed out
            // Przekieruj do logowania
            //alert("Sesja wygasła");
            history.push('/Loginn');
        }
    });
    const [profile, setProfile] = useState([]);



    return (
        <div className="profile">
            <div className="profile__title">
                <h2>Profile</h2>
            </div>

                <div className="profile__avatar" onClick={(e) => {
                    e.stopPropagation();
                    // AddComment();
                    setModalOpen(true);
                    //setPostId(id);
                    //setIsOpen(true);
                }}>
                    <img src={profile.avatar}/>
                </div>
            {modalOpen && <ModalProfile setOpenModal={setModalOpen}/>}
            <div className="profile__data">
            <h3>{profile.userName}</h3>
            <p>Imie: {profile.firstName}</p>
            <p>Nazwisko: {profile.lastName}</p>
            </div>


        </div>
    )
}

export default Profile;
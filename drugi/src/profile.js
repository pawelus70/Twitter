import React, {useState} from "react";
import {db, auth} from "./firebase";
import {useHistory} from "react-router-dom";



function Profile() {


    var userName,firstName,lastName,avatar;
    //history push
    let history = useHistory();
    //autoryzacja
    auth.onAuthStateChanged((user) => {
        if (user) {
            var uid = user.uid;
            var docRef = db.collection("users").doc(user.uid);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    setProfile( doc.data());
                } else {

                    console.log("No such document!");
                    history.push('/login');
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
                history.push('/login');
            });


        } else {
            // User is signed out
            // Przekieruj do logowania
            alert("Sesja wygasła");
            history.push('/login');
        }
    });
    const [profile, setProfile] = useState([]);

    return (
        <div>
            <p>Profile</p>
            <p>firstName:{profile.firstName}</p>
            <p>lastName:{profile.lastName}</p>
            <p>userName:{profile.userName}</p>
            <img src={profile.avatar} alt={'avatar'}/>
        </div>
    )
}

export default Profile;
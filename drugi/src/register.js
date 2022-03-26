import React, {useEffect, useState} from "react";
import db from "./firebase";
import {useHistory} from "react-router-dom"

function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    let history = useHistory();

    const sendRegister = (e) => {


        e.preventDefault()

        //Dodanie użytkownika do bazy
        if (password === repeatPassword && email !== "" && firstName !== "" && lastName !== "" && username !== "" && password !== "") {

            async function getMultiple(db) {
                // [START firestore_data_query]
                const citiesRef = db.collection('users');
                const snapshot = await citiesRef.where('username', '==', username).get();

                if (snapshot.empty) {
                    console.log('No matching documents.');
                    db.collection("users").add({
                        email: email,
                        firstName: firstName,
                        lastName: lastName,
                        username: username,
                        password: password,

                    });
                    alert("Created: ", username)
                    history.push('/feed');
                    return;

                }

                snapshot.forEach(doc => {
                    alert("Email or username taken")
                    //console.log(doc.id, '=>', doc.data());

                });
                // [END firestore_data_query]
            }

            getMultiple(db);

        } else {
            alert("podane hasła się nie zgadzaja/brak danych")
        }

        setFirstName("");
        setLastName("");
        setEmail("");
        setUsername("");
        setPassword("");
        setRepeatPassword("");

    }


    return (
        <form>
            <h3>Register</h3>
            <div className="form-group">
                <label>First Name</label>
                <input value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}
                       placeholder="First Name"
                       type="text"/>
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input value={lastName}
                       onChange={(e) => setLastName(e.target.value)}
                       placeholder="Last Name"
                       type="text"/>
            </div>
            <div className="form-group">
                <label>Username</label>
                <input value={username}
                       onChange={(e) => setUsername(e.target.value)}
                       placeholder="Username"
                       type="text"/>
            </div>
            <div className="form-group">
                <label>email</label>
                <input value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder="Email"
                       type="text"/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder="password"
                       type="text"/>
            </div>
            <div className="form-group">
                <label>Repeat Password</label>
                <input value={repeatPassword}
                       onChange={(e) => setRepeatPassword(e.target.value)}
                       placeholder="password"
                       type="text"/>
            </div>
            <button className="btn btn-primary btn-block" onClick={sendRegister}>Register</button>
        </form>
    )
}
;


export default Register;
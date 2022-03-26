import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom"
import db from "./firebase";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history= useHistory();


    const sendLogin = (e) => {
        e.preventDefault()


        if (email !== "" && password !== "") {
            //Sprawdzenie czy użytkownik jest
            async function getMultiple(db) {
                // [START firestore_data_query]
                const citiesRef = db.collection('users');
                const snapshot = await citiesRef.where('email', '==', email).get();
                if (snapshot.empty) {
                    alert("No user");
                    return;
                }
                snapshot.forEach(doc => {
                    if ((doc.id, '=>', doc.data().password) === password) {

                        alert("Log in");
                        localStorage.setItem("login", true);
                        localStorage.setItem("username", doc.data().username);
                        localStorage.setItem("displayName", doc.data().firstName+" "+doc.data().lastName);
                        //redirect
                        history.push('/feed');
                    } else {
                        alert("No user");
                    }
                });

            }

            getMultiple(db);

        } else {
            alert("podane hasła się nie zgadzaja/brak danych")
        }


        setEmail("");
        setPassword("");
    }


    return (
        <form>
            <h3>Login</h3>

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

            <button className="btn btn-primary btn-block" onClick={sendLogin}>Login</button>
            <div>
                <p> Dont have a account ? <a href={"/register"}>Register</a> </p>
            </div>
        </form>



    )
}

export default Login;
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom"
import {db, auth} from "../DBconn/firebase";

//TODO ::: Pamiętaj żeby zmienić autoryzacje na sesyjną nie cookies i do backu wdupc

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();


    const sendLogin = (e) => {
        e.preventDefault()

        //sprawdzenie czy użytwkonik uzupełnił pola
        if (email !== "" && password !== "") {


            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;

                    //Stworzenie cookies
                    const timestamp = new Date().getTime();
                    const expire = timestamp + (60*3);
                    const expireDate = new Date(expire)
                    //const cookies = new Cookies();
                    //cookies.set('user', user, { path: '/',expire:expireDate }); //dostępne na całej stronie, 20 minut
                    //console.log(cookies.get("user"));
                    //przekieruj do feeda
                    history.push('/feed');
                })
                .catch((error) => {
                    //nie udało się zalogować
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorCode, errorMessage)
                });

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
                <p> Dont have a account ? <a href={"/register"}>Register</a></p>
            </div>
        </form>


    )
}

export default Login;
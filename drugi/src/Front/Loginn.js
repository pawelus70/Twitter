import React, {useEffect, useState} from "react";
import {db, auth} from "../DBconn/firebase";
import {LoginB} from "../Back/loginB"
import {useHistory} from "react-router-dom"

import "./CSS/Login.css";

function Loginn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    const sendLogin = (e) => {
        e.preventDefault()
        //sprawdzenie czy użytwkonik uzupełnił pola
        if (email !== "" && password !== "") {
            //Logowanie użytkownika
            LoginB(email, password)
            auth.onAuthStateChanged((user) => {  //Przekierowanie po zalogowaniu
                let sessionTimeout = null;
                if (user) {
                    history.push('/');
                }
            });
        } else {
            alert("Uzupełnij pola ")
        }
        setEmail("");
        setPassword("");
    }
    return (
    <div className="wrapper fadeInDown">
        <div id="formContent">
            <h2 className="active"> Logowanie </h2>
            <div className="fadeIn first">
                <img src={require('./Img/tweet-logo.png')} id="icon" alt="TweetLogo"/>
            </div>
            <form>
                <input value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       type="text"
                       className="fadeIn second"
                       name="login"
                       placeholder="login" />
                <input value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       type="password"
                       className="fadeIn second"
                       name="login"
                       placeholder="password" />
                <button className="fadeIn third" onClick={sendLogin}>Login</button>
            </form>
            <div id="formFooter">
                <a className="underlineHover" href={"/Registern"}>Nie posiadasz jeszcze konta?</a><br/>
                <a className="underlineHover" href={"/reset"}>Zapomniałeś hasła?</a>
            </div>
        </div>
    </div>
    )
}

export default Loginn;
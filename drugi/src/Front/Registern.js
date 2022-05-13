import React, {useEffect, useState} from "react";
import {db, auth} from "../DBconn/firebase";
import {useHistory} from "react-router-dom";
import Cookies from 'universal-cookie';
import {registerB} from '../Back/registerB';

import "./CSS/Login.css";


function Registern() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    let history = useHistory();

    const sendRegister = (e) => {


        e.preventDefault()

        //Sprawdzenie czy użytkownik wypełnił formularz poprawnie
        if (password === repeatPassword && email !== "" && firstName !== "" && lastName !== "" && userName !== "" && password !== "") {
            registerB(email,password,firstName,lastName,userName);

            auth.onAuthStateChanged((user) => {  //Przekierowanie po zalogowaniu

                let sessionTimeout = null;
                if (user) {
                    history.push('/');
                }
            });

        } else {
            //Daj alert jeśli hasło się nie zgadza
            alert("podane hasła się nie zgadzaja/brak danych")
            setPassword("");
            setRepeatPassword("");
        }
        //Czyszczenie formularza
        /* setFirstName("");
         setLastName("");
         setEmail("");
         setUsername("");
         setPassword("");
         setRepeatPassword("");
 */
    }


    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <h2 className="active"> Rejestracja </h2>


                <div className="fadeIn first">
                    <img src={require('./Img/tweet-logo.png')} id="icon" alt="TweetLogo"/>
                </div>


                <form>
                    <input value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}
                           type="text"
                           className="fadeIn second"
                           name="fname"
                           placeholder="Imie"/>
                    <input value={lastName}
                           onChange={(e) => setLastName(e.target.value)}
                           type="text"
                           className="fadeIn second"
                           name="lname"
                           placeholder="Nazwisko"/>
                    <input value={userName}
                           onChange={(e) => setUserName(e.target.value)}
                           type="text"
                           className="fadeIn second"
                           name="uname"
                           placeholder="Username"/>
                    <input value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           type="text"
                           className="fadeIn second"
                           name="email"
                           placeholder="E-mail"/>
                    <input value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           type="password"
                           className="fadeIn second"
                           name="pass"
                           placeholder="Hasło"/>
                    <input value={repeatPassword}
                           onChange={(e) => setRepeatPassword(e.target.value)}
                           type="password"
                           className="fadeIn second"
                           name="rpass"
                           placeholder="Powtórz hasło"/>
                    <button className="fadeIn third" onClick={sendRegister}>Zarejestruj</button>
                </form>


                <div id="formFooter">
                    <a className="underlineHover" href={"/Loginn"}>Posiadasz konto?</a>
                </div>

            </div>
        </div>


    )
}
;


export default Registern;
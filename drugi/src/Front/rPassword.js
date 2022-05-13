import React, {useEffect, useState} from "react";
import {db, auth} from "../DBconn/firebase";
import {rPasswordB} from "../Back/rPasswordB"
import {useHistory} from "react-router-dom"

import "./CSS/Login.css";

function RPassword() {

    const [email, setEmail] = useState("");


    let history = useHistory();

    const sendrPassword = (e) => {
        e.preventDefault()

        //sprawdzenie czy użytwkonik uzupełnił pola
        if (email !== "") {
            //Logowanie użytkownika
            rPasswordB(email)
                //history.push('/');
                alert("Wysłano reset hasła")


                        history.push('/');

                          } else {
            alert("Uzupełnij pola ")
        }

        setEmail("")
    }


    return (


    <div className="wrapper fadeInDown">
        <div id="formContent">

            <h2 className="active"> Reset Hasła </h2>


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

                    <button className="fadeIn third" onClick={sendrPassword}>Resetuj</button>

            </form>


            <div id="formFooter">
                <a className="underlineHover" href={"/Registern"}>Nie posiadasz jeszcze konta?</a>
            </div>

        </div>
    </div>

    )
}

export default RPassword;
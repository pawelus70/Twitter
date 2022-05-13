import React, {useEffect, useState} from "react";
import {db, auth} from "../DBconn/firebase";
import {loginB} from "../Back/loginB"
import {useHistory} from "react-router-dom"

//TODO ::: Pamiętaj żeby zmienić autoryzacje na sesyjną nie cookies i do backu wdupc

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();

    const sendLogin = (e) => {
        e.preventDefault()

        //sprawdzenie czy użytwkonik uzupełnił pola
        if (email !== "" && password !== "") {
            //Logowanie użytkownika
            loginB(email, password);
            alert("zalogowano")
        } else {
            alert("Uzupełnij pola ")
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
                <p> Forget password ? <a href={"/reset"}>Reset</a></p>
            </div>
        </form>


    )
}

export default Login;
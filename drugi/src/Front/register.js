import React, {useEffect, useState} from "react";
import {db, auth} from "../DBconn/firebase";
import {useHistory} from "react-router-dom";
import Cookies from 'universal-cookie';
import {registerB} from '../Back/registerB';

function Register() {

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
        } else {
            //Daj alert jeśli hasło się nie zgadza
            alert("podane hasła się nie zgadzaja/brak danych")
            setPassword("");
            setRepeatPassword("");
        }
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
                <input value={userName}
                       onChange={(e) => setUserName(e.target.value)}
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
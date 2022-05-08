import React, {useEffect, useState} from "react";
import {db, auth} from "../DBconn/firebase";
import {loginB} from "../Back/loginB"
import {useHistory} from "react-router-dom"

import "./CSS/Login.css";

export default function Login({ setToken }) {
    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Loginn;